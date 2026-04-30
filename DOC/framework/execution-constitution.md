# Execution Constitution for the Framework Documentation Workflow

**Purpose:**
Defines the minimum strict workflow for the full system so AI does not drift between framework rules, role orchestration, project documentation, and later implementation. This file governs both the documentation-generation phase and the later code-execution phase.

---

## 1. The Three Documentation Layers

### Framework Layer
Reusable cross-project assets.

Contains:
- `DOC/framework/roles/`
- `DOC/framework/prompts/`
- `DOC/framework/guide/`
- this constitution

Purpose:
- defines how AI should think, route, and orchestrate work

### Role Layer
The reusable role system that generates documentation.

Purpose:
- converts a master plan into structured project documentation artifacts
- each role owns one documentation domain only

### Project Layer
The generated documentation for one real project.

Contains:
- `DOC/project-plan/ai-context.yaml`
- `DOC/project-plan/README.md`
- root planning artifacts such as `DOC/project-plan/<scope>-e2e-plan.md`
- `DOC/project-plan/shared-contracts/`
- `DOC/project-plan/frontend/`
- `DOC/project-plan/backend/`
- `DOC/project-plan/api-and-data/`
- `DOC/project-plan/security/`
- `DOC/project-plan/devops/`
- `DOC/project-plan/qa/`

Purpose:
- becomes the only valid source for actual implementation work on that project

---

## 2. Canonical Workflow

There are only two execution stages.

### Stage A: Documentation Generation
Input:
- `DOC/framework/prompts/master-orchestration-prompt.md`
- `DOC/master-plan/plan.md`

Internal read order:
1. `DOC/framework/roles/ai-context.yaml`
2. `DOC/framework/roles/documentation-workflow-playbook.md`
3. `DOC/framework/execution-constitution.md`
4. `DOC/master-plan/plan.md`

Output:
- complete project-specific documentation under `DOC/project-plan/`

Clarification:
- `DOC/master-plan/plan.md` is a Stage A input artifact, not the Stage A completion artifact.
- Editing or improving `DOC/master-plan/plan.md` does not satisfy Stage A by itself.
- Stage A is complete only when the required `DOC/project-plan/` root files and downstream role docs exist.

Rule:
- no code implementation is allowed during this stage

### Stage B: Implementation Execution
Input:
- `DOC/project-plan/ai-context.yaml`

Rule:
- once the project-specific documentation exists, all build work must start from the project root ai-context, not from the universal prompt

Additional rule for later fresh, scale, or hybrid planning inside Stage B:
- AI must materialize the plan as a markdown artifact under `DOC/project-plan/` before updating the execution tracker or recommending implementation.
- AI must also materialize the affected downstream role-specific planning docs in their owning folders before updating the execution tracker or recommending implementation.
- chat summaries are secondary and never replace the canonical planning artifact.

Entry-point clarification:
- If the user provides the master plan or orchestration brief directly in chat instead of only through `DOC/master-plan/plan.md`, AI must treat that content as the current Stage A source and still generate the required `DOC/project-plan/` outputs in the same turn.
- If `DOC/project-plan/ai-context.yaml` does not exist yet, the workflow is still in Stage A even if `DOC/master-plan/plan.md` has already been edited.

Purpose:
- keeps implementation grounded in the already-generated project docs instead of re-running orchestration logic

---

## 3. Required Order Inside Stage A

The role workflow must remain sequential:
1. Shared Contracts
2. Frontend
3. Backend
4. API and Data
5. Security
6. DevOps
7. QA
8. Refresh `DOC/project-plan/ai-context.yaml` and `DOC/project-plan/README.md`

Rules:
- every later phase must read earlier artifacts
- if a valid existing folder already exists, reuse and normalize it instead of blindly replacing it
- no phase may silently override shared contracts
- for scale or enhancement planning, AI must audit the current implementation and prefer extension or normalization over replacement
- documentation generation is incomplete if CMS, database ownership, integration boundaries, or operator workflows are left implicit
- planning is incomplete if the new scope does not exist as a concrete project artifact under `DOC/project-plan/` and inside the affected role folders

---

## 4. Required Order Inside Stage B

Implementation work must remain sequential and contract-led.

Recommended execution order:
1. initialize project shell and repository structure
2. implement shared primitives and configuration
3. implement frontend shell and static marketing surfaces
4. implement backend core services and persistence
5. connect API and data contracts
6. harden auth, permissions, and integrations
7. add CI/CD, observability, and deployment controls
8. enforce QA gates and end-to-end verification

Rule:
- implementation may be vertical-slice by feature, but it may not violate the contracts defined in project-specific docs

---

## 5. Canonical Entrypoints

For generating docs:
- `DOC/framework/prompts/master-orchestration-prompt.md`

For using the generated project docs:
- `DOC/project-plan/ai-context.yaml`

For cross-role authority:
- `DOC/project-plan/shared-contracts/ai-context.yaml`

If AI starts from any other file first, the workflow is off-track.

Editing `DOC/master-plan/plan.md` may improve the source input, but it never replaces the requirement to generate the project layer under `DOC/project-plan/`.

---

## 6. Stack And Tech Constraints

- Frontend: Next.js, TypeScript, Tailwind, `src/` structure
- Backend: as defined in `DOC/project-plan/backend/README.md`
- API: as defined in `DOC/project-plan/api-and-data/README.md`
- Database: as defined in `DOC/project-plan/api-and-data/README.md`
- CMS and content operations: Sanity ownership, authoring flow, and preview or publishing model must be explicit when content-bearing surfaces exist
- Integrations: Stripe, WhatsApp, Email, Calendar, AI, storage, and realtime providers as defined in shared contracts and project-specific docs
- CI/CD and operations: as defined in `DOC/project-plan/devops/README.md`
- Testing and release gates: as defined in `DOC/project-plan/qa/README.md`

If project-specific docs later refine a stack detail, the project-specific layer wins over universal defaults.

---

## 7. Non-Negotiable Rules

Do:
- always read the current phase's `ai-context.yaml` and `README.md`
- always preserve the chain framework -> roles -> project docs -> implementation
- always keep `DOC/project-plan/ai-context.yaml` current as the project root routing file
- always materialize cross-role planning as a concrete markdown artifact under `DOC/project-plan/` and create the affected downstream role docs before touching `tasks/tasks.md`
- always validate implementation against QA and Security docs before considering a feature complete
- always prefer reuse of existing routes, components, schemas, and integrations before proposing net-new architecture on an existing codebase
- always make CMS, data, integration, and operator ownership explicit during planning rather than leaving them as follow-up guesses

Do not:
- do not invent features outside the project plan
- do not skip or reorder the orchestration phases
- do not start implementation before the project-specific docs exist
- do not treat frontend assumptions as backend truth
- do not let implementation bypass project-specific contracts

---

## 8. Context Recovery

If context is lost during documentation generation, re-read:
1. `DOC/framework/roles/ai-context.yaml`
2. `DOC/framework/roles/documentation-workflow-playbook.md`
3. `DOC/framework/execution-constitution.md`
4. `DOC/master-plan/plan.md`

If context is lost during implementation, re-read:
1. `DOC/project-plan/ai-context.yaml`
2. `DOC/project-plan/shared-contracts/ai-context.yaml`
3. the current role folder's `ai-context.yaml`
4. the current role folder's `README.md`

---

## 9. Quality Gates

- no implementation is production-ready until QA gates pass
- all critical workflows must have test coverage
- no P0 or P1 defects are allowed at release
- any contract change must be reflected in affected project-specific docs before more code is added

---

**Concrete decision:**
You do not need another separate constitution file.
You need one corrected master prompt and one strong constitution that explicitly governs the three-layer workflow and the handoff into `DOC/project-plan/ai-context.yaml`.
