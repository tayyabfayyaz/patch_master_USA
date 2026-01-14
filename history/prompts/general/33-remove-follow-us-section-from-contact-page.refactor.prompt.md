---
id: 33
title: Remove Follow Us Section from Contact Page
stage: refactor
date: 2026-01-15
surface: agent
model: gemini-pro
feature: contact-page
branch: 
user: 
command: 
labels: [["refactor", "contact-page"]]
links:
  spec: {{LINKS_SPEC}}
  ticket: {{LINKS_TICKET}}
  adr: {{LINKS_ADR}}
  pr: {{LINKS_PR}}
files:
- app/contact/page.tsx
tests:

---

## Prompt

Now I want you to remove `Follow Us` section from the contact page.

## Response snapshot



## Outcome

- ✅ Impact: {{OUTCOME_IMPACT}}
- 🧪 Tests: {{TESTS_SUMMARY}}
- 📁 Files: {{FILES_SUMMARY}}
- 🔁 Next prompts: {{NEXT_PROMPTS}}
- 🧠 Reflection: {{REFLECTION_NOTE}}

## Evaluation notes (flywheel)

- Failure modes observed: {{FAILURE_MODES}}
- Graders run and results (PASS/FAIL): {{GRADER_RESULTS}}
- Prompt variant (if applicable): {{PROMPT_VARIANT_ID}}
- Next experiment (smallest change to try): {{NEXT_EXPERIMENT}}
