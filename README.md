# RegIQ — Regulatory & Quality Intelligence

> AI-powered regulatory pathway probability assessment and QA readiness scoring — for every regulated health product, across every major global authority.

🔗 **[Live Tool → regiq-io.vercel.app](https://regiq-io.vercel.app)**

---

## What it does

RegIQ helps life sciences professionals answer two critical early-stage questions in regulated product development — fast, free, and without expensive software or consultants.

### Regulatory Pathway Module (RA)
Describe your product and target markets → RegIQ identifies possible submission pathways with **probability scores** (e.g. UKMA 60% · Conditional MA 40%), maps pathways for every requested market with equal depth, and delivers a regulatory risk score (1–100) with a full interlinked breakdown — all cited to real regulatory guidance documents.

### QA Readiness Module (QA)
Describe your product and current QMS situation → RegIQ scores your Quality Management System readiness against the right standard for your requested markets, identifies your top gaps, and flags the deficiencies most likely to appear in an inspection or audit.

---

## Key features

- **Probability-based pathway assessment** — confidence-weighted options with explicit reasoning, not a single answer
- **All markets are equal** — UK, Japan, India, Canada get the same depth as USA and EU. No FDA-first bias.
- **Market-specific reports** — ask for UK + Japan, get only UK + Japan. Nothing extra added.
- **Interlinked analysis** — pathway confidence, risk score, breakdown, and top risks all tell one consistent story
- **QMSR updated** — reflects FDA's Quality Management System Regulation effective February 2, 2026, incorporating ISO 13485:2016
- **Conversational AI** — reads what you already said, asks only what it needs, infers the rest
- **Verify primary sources** — every result includes direct links to primary regulatory sources
- **Save as PDF** — clean print-optimized report with RegIQ header and date
- **No login required** — no account, no tracking, no data retained by RegIQ

---

## Who it's for

| User | Use case |
|---|---|
| Regulatory Affairs professionals | Map submission pathway before escalating to leadership |
| QA professionals | Pressure-test QMS readiness before an inspection or audit |
| RA/QA graduate students | Build practical regulatory knowledge |
| Startup founders | Understand regulatory complexity before committing to development |
| CROs and consultants | Rapid first-pass assessment for new clients |

---

## What you get

### RA — Regulatory Pathway
- Product classification (drug / device / biologic / combination product)
- Lead authority with justification
- Pathway probability assessment — multiple pathways per market with confidence % and reasoning
- Equal coverage for every requested market (FDA, MHRA, EMA, PMDA, CDSCO, Health Canada, TGA)
- Regulatory risk score 1–100 with 4-dimension breakdown
- Top regulatory risks with exact regulation citations — interlinked with pathway confidence
- Direct links to primary regulatory sources for verification

### QA — Readiness Score
- QMS standard mapping scoped to requested markets only
- Readiness score 1–100 with element-level breakdown
- Gap analysis across document control, CAPA, supplier controls, design controls, training, audit readiness
- Top deficiency flags modelled on real inspection findings
- Applicable GxP requirements by product and market
- Direct links to regulatory quality system guidance

---

## Risk score bands

### Regulatory Risk Score (RA)
| Score | Level | Meaning |
|---|---|---|
| 1–39 | Low | Simple or well-established product. Straightforward pathway. |
| 40–69 | Moderate | Standard complexity. Manageable gaps to address. |
| 70–100 | High | Novel or complex product. Significant regulatory investment required. |

### QA Readiness Score
| Score | Level | Meaning |
|---|---|---|
| 70–100 | High | Well-prepared. Minor items to close before inspection. |
| 40–69 | Moderate | Core systems in place. Key gaps to address before audit. |
| 1–39 | Low | Needs significant QMS development. Not ready for inspection. |

---

## Product categories

| Category | Examples |
|---|---|
| Pharmaceutical | NMEs, generics, ANDA, 505(b)(2), OTC/Rx switches |
| Medical Devices | 510(k), De Novo, PMA, EU MDR Class I-III, IVDs, SaMD, AI/ML devices |
| Biologics and Biotech | BLA, MAA, biosimilars 351(k), cell and gene therapy, vaccines, mRNA |
| Combination Products | Drug-device, biologic-device, prefilled systems, drug-eluting implants |

---

## Global authority coverage

| Authority | Market |
|---|---|
| US FDA (CDER / CDRH / CBER) | USA |
| EMA | European Union |
| MHRA | United Kingdom (post-Brexit) |
| Health Canada | Canada |
| TGA | Australia |
| PMDA | Japan |
| CDSCO | India |

---

## Privacy

RegIQ collects no user data and requires no account. Queries are processed via Anthropic's API — subject to Anthropic's privacy policy at anthropic.com/privacy. Anthropic does not use API inputs to train models by default.

---

## Regulatory basis

All outputs are grounded in publicly available guidance — current as of June 2026:

- FDA QMSR — 21 CFR Part 820 amended effective February 2, 2026, incorporating ISO 13485:2016
- New FDA inspection Compliance Program 7382.850 (replaces 7382.845 and 7383.001)
- 21 CFR Parts 3, 210, 211, 312, 601, 807, 820
- EU MDR 2017/745, IVDR 2017/746
- UK Human Medicines Regulations 2012, UK MDR 2002
- ICH Q10, Q5E, M4, E5(R1), E6(R3), S7B and related guidelines
- ISO 13485:2016, ISO 14971:2019
- New Drugs and Clinical Trials Rules 2019 (India / CDSCO)
- PMDA Pharmaceutical and Medical Device Act (Japan)
- WHO, TGA, Health Canada guidance

---

## Tech stack

- Frontend — Plain HTML, CSS, JavaScript. No frameworks, no dependencies.
- Backend — Vercel serverless function (Node.js)
- AI — Claude Haiku (Anthropic API) via Vercel proxy
- Hosting — Vercel (free tier)
- Analytics — Google Analytics (G-B08JLZGKTY)

---

## Disclaimer

RegIQ is an educational tool for regulatory affairs and quality assurance professionals and students. It does not constitute regulatory or legal advice and should not be used as the sole basis for regulatory submission or quality system decisions. Always verify outputs against current primary regulatory sources and consult a qualified Regulatory Affairs or Quality Assurance professional before making submission decisions.

---

## Built by

**Yash Gandhi**

LinkedIn: https://www.linkedin.com/in/yash-gandhi26/
Feedback: ygandhi.corpdesk@outlook.com

---

*RegIQ is a personal upskilling project. It is not affiliated with or endorsed by FDA, EMA, ICH, MHRA, PMDA, CDSCO, TGA, Health Canada, or any regulatory authority.*
