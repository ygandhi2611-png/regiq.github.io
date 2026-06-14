exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const messages = body.messages || [];
    const systemPrompt = body.system || '';

    // Convert to Gemini format
    const contents = [];

    messages.forEach(function(msg) {
      contents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      });
    });

    const geminiBody = {
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: contents,
      generationConfig: {
        maxOutputTokens: 1400,
        temperature: 0.3
      }
    };

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(geminiBody)
      }
    );

    const data = await response.json();

    // Log full response for debugging
    console.log('Gemini raw response:', JSON.stringify(data));

    // Extract text safely from Gemini response
    let text = '';
    if (data.candidates && data.candidates.length > 0) {
      const candidate = data.candidates[0];
      if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
        text = candidate.content.parts[0].text || '';
      }
    }

    // If still empty check for errors
    if (!text && data.error) {
      console.log('Gemini error:', JSON.stringify(data.error));
      text = 'API error: ' + data.error.message;
    }

    if (!text && data.promptFeedback) {
      console.log('Prompt feedback:', JSON.stringify(data.promptFeedback));
      text = 'Request blocked: ' + JSON.stringify(data.promptFeedback);
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        content: [{ type: 'text', text: text }]
      })
    };

  } catch (err) {
    console.log('Function error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
