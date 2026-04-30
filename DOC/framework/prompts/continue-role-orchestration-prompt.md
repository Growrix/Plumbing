# Continue Role Orchestration Prompt (Frontend Already Done)

**Purpose:**
Use this prompt when the frontend documentation is already complete and approved. This will generate the rest of the project-specific documentation in strict, sequential order, without overwriting the frontend planning set.

---

## Canonical Usage

Use this prompt together with your project plan:
- `DOC/master-plan/plan.md`

The AI must read the framework orchestration system, treat the existing frontend docs as source material, and generate the remaining project documentation in order.

---

## Canonical Prompt Body

```text
Start with DOC/framework/roles/ai-context.yaml.

Before generating anything, read these files in order:
1. DOC/framework/roles/ai-context.yaml
2. DOC/framework/roles/documentation-workflow-playbook.md
3. DOC/framework/execution-constitution.md
4. DOC/master-plan/plan.md
5. DOC/project-plan/frontend/ai-context.yaml

Your job is to generate or update the remaining project documentation set in DOC/project-plan/ by orchestrating the framework roles in strict sequence, skipping the frontend phase.

You are not implementing the website yet.
You are creating the implementation-ready project documentation that later execution will follow.

Execution model:
1. Inspect DOC/project-plan/ to see what already exists.
2. Do not overwrite or regenerate DOC/project-plan/frontend/ unless a cross-contract dependency requires it.
3. Run the role workflow sequentially, never in parallel.
4. Every later phase must read the artifacts created by earlier phases.
5. If a valid existing folder already exists, reuse and normalize it instead of blindly replacing it.

Role sequence (skip frontend):
1. Fullstack Contract Orchestrator
	- Output: DOC/project-plan/shared-contracts/
2. Backend System Planner
	- Output: DOC/project-plan/backend/
3. API Data Contract Architect
	- Output: DOC/project-plan/api-and-data/
4. Security Compliance Trust Architect
	- Output: DOC/project-plan/security/
5. DevOps Reliability Release Planner
	- Output: DOC/project-plan/devops/
6. QA Test Release Governor
	- Output: DOC/project-plan/qa/

For each role output folder, generate at minimum:
- ai-context.yaml
- README.md
- any additional role-specific markdown files required by that role

Strict orchestration rules:
- Do not invent requirements outside DOC/master-plan/plan.md unless clearly marked as assumptions.
- Do not skip, reorder, or merge phases.
- Do not let one role write another role's documentation type.
- Do not start code implementation.
- If context becomes unclear, re-read the framework files and the project root ai-context.yaml before continuing.
- Keep DOC/project-plan/ai-context.yaml updated so it remains the canonical AI entrypoint after generation is complete.
- All new documentation must align with the already-existing frontend docs in DOC/project-plan/frontend/.

Final outcome:
Produce a complete, implementation-ready, project-specific documentation system under DOC/project-plan/ that is internally consistent, sequentially generated, and ready for the later build phase, with the approved frontend docs preserved.
```

---

## Canonical Inputs

- `DOC/master-plan/plan.md`
- `DOC/framework/roles/ai-context.yaml`
- `DOC/framework/roles/documentation-workflow-playbook.md`
- `DOC/framework/execution-constitution.md`
- `DOC/project-plan/frontend/ai-context.yaml`

## Canonical Outputs

- `DOC/project-plan/shared-contracts/`
- `DOC/project-plan/backend/`
- `DOC/project-plan/api-and-data/`
- `DOC/project-plan/security/`
- `DOC/project-plan/devops/`
- `DOC/project-plan/qa/`

## Important Decision

This file is the only prompt you should hand to AI for the continuation documentation-generation phase (frontend already done).
After the project-specific documentation exists, later implementation should start from `DOC/project-plan/ai-context.yaml`, not from this prompt again.
