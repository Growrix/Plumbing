# Master Orchestration Prompt (Reusable)

**Purpose:**
This is the single canonical, reusable prompt for generating a complete documentation set for any project using the framework role orchestration system. It always includes the frontend phase. It does not implement product code. It orchestrates the role files in sequence so AI creates or updates the correct files under `DOC/project-plan/`.

---

## How To Use

Use this prompt with your project plan source (e.g., `DOC/master-plan/plan.md`).

If the project plan or planning brief was pasted directly into chat, treat that content as the current source input and still generate the canonical `DOC/project-plan/` outputs in the same turn.

The AI must read the framework orchestration system, follow the strict role sequence, and generate the full documentation set for any project, always including frontend.

---

## Canonical Prompt Body

```text
Start with DOC/framework/roles/ai-context.yaml.

Before generating anything, read these files in order:
1. DOC/framework/roles/ai-context.yaml
2. DOC/framework/roles/documentation-workflow-playbook.md
3. DOC/framework/execution-constitution.md
4. DOC/master-plan/plan.md

If the latest master-plan content was pasted directly in chat, first normalize it into DOC/master-plan/plan.md or treat the pasted content as the current equivalent source, then continue the workflow in the same turn.

Your job is to generate or update the full documentation set in DOC/project-plan/ by orchestrating the framework roles in strict sequence, always including the frontend phase.

You are not implementing the website or product code yet.
You are creating the implementation-ready documentation that later execution will follow.

Execution model:
1. Inspect DOC/project-plan/ to see what already exists.
2. Create or refresh DOC/project-plan/ai-context.yaml and DOC/project-plan/README.md as the project root entrypoint.
3. If DOC/project-plan/ai-context.yaml does not exist yet, treat the task as Stage A documentation generation and do not stop after editing DOC/master-plan/plan.md.
4. Create or refresh a scope-specific root planning artifact such as DOC/project-plan/<scope>-e2e-plan.md when the scope is fresh, hybrid, or scaled planning.
5. Run the role workflow sequentially, never in parallel.
6. Every later phase must read the artifacts created by earlier phases.
7. If a valid existing folder already exists, reuse and normalize it instead of blindly replacing it.
8. Create or refresh DOC/project-plan/tasks/ai-context.yaml and DOC/project-plan/tasks/tasks.md after the root artifact and downstream role docs exist.

Role sequence (always include frontend):
1. Fullstack Contract Orchestrator
   - Output: DOC/project-plan/shared-contracts/
2. Frontend UI/UX Generator
   - Output: DOC/project-plan/frontend/
   - Required frontend file set when page planning is in scope: DOC/project-plan/frontend/frontend-plan.md plus separate page-level markdown files for each core route and reusable dynamic template.
3. Backend System Planner
   - Output: DOC/project-plan/backend/
4. API Data Contract Architect
   - Output: DOC/project-plan/api-and-data/
5. Security Compliance Trust Architect
   - Output: DOC/project-plan/security/
6. DevOps Reliability Release Planner
   - Output: DOC/project-plan/devops/
7. QA Test Release Governor
   - Output: DOC/project-plan/qa/

For each role output folder, generate at minimum:
- ai-context.yaml
- README.md
- any additional role-specific markdown files required by that role

Frontend-specific output rule:
- If the project includes page planning for a website, application, dashboard, or mixed surface, generate a master frontend architecture file and separate `.md` files for each page or reusable page template inside DOC/project-plan/frontend/.
- Each frontend page file must define the page goal, primary audience intent, section-by-section structure, conversion areas, responsive behavior, and relevant state coverage.

Strict orchestration rules:
- Do not invent requirements outside DOC/master-plan/plan.md unless clearly marked as assumptions.
- Editing DOC/master-plan/plan.md alone is never a valid completion state for this workflow.
- Do not skip, reorder, or merge phases.
- Do not let one role write another role's documentation type.
- Do not start code implementation.
- If context becomes unclear, re-read the framework files and the project root ai-context.yaml before continuing.
- Keep DOC/project-plan/ai-context.yaml updated so it remains the canonical AI entrypoint after generation is complete.
```

---

## Canonical Inputs

- `DOC/master-plan/plan.md`
- `DOC/framework/roles/ai-context.yaml`
- `DOC/framework/roles/documentation-workflow-playbook.md`
- `DOC/framework/execution-constitution.md`

## Canonical Outputs

- `DOC/project-plan/ai-context.yaml`
- `DOC/project-plan/README.md`
- `DOC/project-plan/shared-contracts/`
- `DOC/project-plan/frontend/`
- `DOC/project-plan/<scope>-e2e-plan.md`
- `DOC/project-plan/tasks/ai-context.yaml`
- `DOC/project-plan/tasks/tasks.md`
- `DOC/project-plan/backend/`
- `DOC/project-plan/api-and-data/`
- `DOC/project-plan/security/`
- `DOC/project-plan/devops/`
- `DOC/project-plan/qa/`

## Important Decision

This file is the only prompt you should hand to AI for the full documentation-generation phase (always includes frontend).
After the documentation exists, later implementation should start from `DOC/project-plan/ai-context.yaml`, not from this prompt again.
