# E2E Planning Template

Use this template for all fresh, scale, and hybrid planning work in the current workspace.

Template usage rules:
- Every section is required. If a section does not apply, mark it `Not applicable` and explain why.
- Every major planning decision must name the relevant framework guide files used to justify it.
- If the framework guide does not cover a required decision well enough, create or update the owning project-plan doc before calling the plan complete.
- Do not leave critical platform systems as `TBD` if the scope touches them. Critical systems include auth, permissions, observability, environments, release control, billing, data protection, incident response, and testing gates.

Documentation materialization rule:
- Instantiate this template into a real markdown file under `DOC/project-plan/` before updating `DOC/project-plan/tasks/tasks.md`.
- For cross-role scope, store the artifact at the `DOC/project-plan/` root using a scope-specific name such as `<scope>-e2e-plan.md`.
- Create or update the affected role-specific planning docs in their owning folders before considering the plan complete.
- Chat summaries are secondary and never replace the canonical planning artifact.

## 0. Guide-Backed Decision Map

Use this section before writing the plan body so the planner knows which framework guides govern each decision area.

| Decision Area | Required Framework Guide Files | Minimum Project Outputs |
|---|---|---|
| Product scope, surfaces, roles, and workflows | `DOC/framework/guide/product/product-requirements.md`, `DOC/framework/guide/architecture/system-architecture.md`, `DOC/framework/guide/architecture/module-boundaries.md` | `DOC/project-plan/shared-contracts/`, root `ai-context.yaml`, root `README.md` |
| Shared contracts and sequencing | `DOC/framework/guide/architecture/contract-first-delivery.md`, `DOC/framework/guide/architecture/system-architecture.md`, `DOC/framework/guide/ai/ai-context.yaml` | `DOC/project-plan/shared-contracts/`, active `<scope>-e2e-plan.md` |
| Frontend UX, design system, accessibility, and error UX | `DOC/framework/guide/frontend/frontend-rules-and-design-system.md`, `DOC/framework/guide/frontend/frontend-architecture.md`, `DOC/framework/guide/frontend/component-and-styling-standards.md`, `DOC/framework/guide/frontend/ui-ux-standards.md`, `DOC/framework/guide/frontend/accessibility-and-localization.md`, `DOC/framework/guide/frontend/data-fetching-and-state.md` | `DOC/project-plan/frontend/`, optional `DOC/project-plan/admin-dashboard/` |
| Performance, analytics, search, and indexing behavior | `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`, `DOC/framework/guide/backend/backend-observability-and-reliability.md`, `DOC/framework/guide/api/api-design.md` | `DOC/project-plan/frontend/`, optional `DOC/project-plan/analytics/`, optional `DOC/project-plan/search/` |
| Backend services, jobs, reliability, and file processing | `DOC/framework/guide/backend/backend-architecture.md`, `DOC/framework/guide/backend/service-design-and-domain-rules.md`, `DOC/framework/guide/backend/queue-payments-and-integrations.md`, `DOC/framework/guide/backend/file-delivery-and-storage.md`, `DOC/framework/guide/backend/backend-observability-and-reliability.md` | `DOC/project-plan/backend/`, optional `DOC/project-plan/integrations/`, optional `DOC/project-plan/supabase/` |
| API, data contracts, events, rate limits, and versioning | `DOC/framework/guide/api/api-design.md`, `DOC/framework/guide/data/data-model.md`, `DOC/framework/guide/backend/auth-authorization-and-rls.md` | `DOC/project-plan/api-and-data/`, optional `DOC/project-plan/supabase/` |
| Auth, RBAC, tenancy, privacy, compliance, and abuse protection | `DOC/framework/guide/backend/auth-authorization-and-rls.md`, `DOC/framework/guide/operations/security-and-operations.md`, `DOC/framework/guide/operations/platform-governance-and-controls.md`, `DOC/framework/guide/process/privacy-retention-and-compliance.md` | `DOC/project-plan/security/`, `DOC/project-plan/shared-contracts/` |
| Billing, entitlements, quotas, flags, and kill switches | `DOC/framework/guide/operations/platform-governance-and-controls.md`, `DOC/framework/guide/backend/queue-payments-and-integrations.md`, `DOC/framework/guide/api/api-design.md` | `DOC/project-plan/security/`, `DOC/project-plan/backend/`, optional `DOC/project-plan/integrations/` |
| Environments, CI/CD, rollout, rollback, and recovery | `DOC/framework/guide/process/deployment-and-environments.md`, `DOC/framework/guide/operations/security-and-operations.md`, `DOC/framework/guide/backend/backend-observability-and-reliability.md`, `DOC/framework/guide/process/incident-response.md` | `DOC/project-plan/devops/`, `DOC/project-plan/tasks/` |
| Testing, release gates, and verification evidence | `DOC/framework/guide/quality/testing-strategy.md`, `DOC/framework/guide/quality/qa-and-release-gates.md`, `DOC/framework/guide/quality/enterprise-testing-and-quality-enforcement-v2.md` | `DOC/project-plan/qa/`, `DOC/project-plan/tasks/` |
| CMS, editorial operations, and content governance | `DOC/framework/guide/product/product-requirements.md`, `DOC/framework/guide/frontend/frontend-architecture.md`, `DOC/framework/guide/process/deployment-and-environments.md` | optional `DOC/project-plan/cms-content-operations/`, `DOC/project-plan/frontend/`, `DOC/project-plan/backend/` |
| Incident handling, support operations, and admin controls | `DOC/framework/guide/process/incident-response.md`, `DOC/framework/guide/operations/platform-governance-and-controls.md`, `DOC/framework/guide/operations/security-and-operations.md` | `DOC/project-plan/devops/`, optional `DOC/project-plan/admin-dashboard/` |

## 1. Artifact Metadata
- Canonical artifact path:
- Affected downstream role docs:
- Planning request source:
- Planning mode:
- Status:
- Last updated:
- Guide files consulted:
- Existing project artifacts audited:
- Owners and reviewers:
- Scope labels or tags:

## 2. Project Folder And File Materialization Contract

### Always Create Or Refresh
- `DOC/project-plan/ai-context.yaml`
- `DOC/project-plan/README.md`
- `DOC/project-plan/tasks/ai-context.yaml`
- `DOC/project-plan/tasks/tasks.md`
- `DOC/project-plan/<scope>-e2e-plan.md`

### Core Project Folders

| Folder | Minimum Files | Required When | Notes |
|---|---|---|---|
| `DOC/project-plan/shared-contracts/` | `ai-context.yaml`, `README.md` | Always | Holds system-wide contracts, invariants, route rules, state models, and decision logs. |
<<<<<<< HEAD
| `DOC/project-plan/frontend/` | `ai-context.yaml`, `README.md` | Always | Public and authenticated UI planning. |
=======
| `DOC/project-plan/frontend/` | `ai-context.yaml`, `README.md`, `frontend-plan.md`, `page-*.md` | Always | Public and authenticated UI planning. Use `frontend-plan.md` as the master architecture file and add separate page docs for each core route and reusable dynamic page template when page planning is in scope. |
>>>>>>> frontend
| `DOC/project-plan/backend/` | `ai-context.yaml`, `README.md` | Always | Services, jobs, integrations, storage, and reliability ownership. |
| `DOC/project-plan/api-and-data/` | `ai-context.yaml`, `README.md` | Always | APIs, schemas, events, migrations, and data contracts. |
| `DOC/project-plan/security/` | `ai-context.yaml`, `README.md` | Always | Auth, authorization, privacy, abuse protection, and compliance rules. |
| `DOC/project-plan/devops/` | `ai-context.yaml`, `README.md` | Always | Environments, deployment, rollout, rollback, observability, and recovery. |
| `DOC/project-plan/qa/` | `ai-context.yaml`, `README.md` | Always | Validation strategy, gates, evidence, and regression coverage. |

### Conditional Project Folders

Create these when the scope requires them, and include at minimum `ai-context.yaml` and `README.md` in each:

| Folder | Create When | Typical Owner |
|---|---|---|
| `DOC/project-plan/admin-dashboard/` | Admin-only UI or operator workflows exist | frontend + shared contracts |
| `DOC/project-plan/supabase/` | Supabase-specific schema, auth, storage, or realtime ownership exists | backend + api-and-data |
| `DOC/project-plan/cms-content-operations/` | CMS, editorial workflow, publishing, preview, or content governance exists | frontend + backend |
| `DOC/project-plan/integrations/` | Multiple external providers or integration runbooks need dedicated docs | backend + devops |
| `DOC/project-plan/analytics/` | Product analytics, instrumentation, KPIs, or event governance are material to scope | frontend + qa |
| `DOC/project-plan/search/` | Search, indexing, discovery, or internal search systems are in scope | api-and-data + backend |
| `DOC/project-plan/mobile/` | Native or mobile-specific planning is in scope | frontend |

### Materialization Rules
- Root `ai-context.yaml` must route to the active E2E artifact, current folder set, read order, and build order.
- Root `README.md` must summarize folder ownership, statuses, and the active planning artifact.
- Every created folder must explain why it exists, what it owns, and which guide files it followed.
- If a folder is intentionally not created, list it in the plan with a reason.
<<<<<<< HEAD
=======
- Frontend planning is incomplete if it stops at one summary markdown file while the scope requires page planning. In that case, `DOC/project-plan/frontend/` must also include separate page-level markdown files for each core page and reusable dynamic template.
- Every frontend page file must define route goal, primary audience intent, section-by-section content or component planning, conversion areas, responsive behavior, and relevant state coverage.
>>>>>>> frontend

## 3. Planning Mode And Objective
- Planning mode: fresh, scale, or hybrid
- Why this mode fits the request:
- Scope boundaries:
- Explicit non-goals:
- Success definition:
- Current implementation compatibility requirements:
- Known constraints from budget, team, timeline, or platform:

## 4. Current-State Audit

### Tracker Status
- Done:
- Partial:
- Blocked:
- Not started:

### Existing Documentation Inventory
- Root routing docs already present:
- Existing project-plan folders already present:
- Existing project docs that must be reused:
- Existing project docs that are stale or conflicting:

### Existing Codebase Inventory
- Reusable routes:
- Reusable layouts and shells:
- Reusable sections and components:
- Reusable data or store modules:
- Existing API handlers and contracts:
- Existing CMS or Studio schemas:
- Existing admin or operator flows:
- Existing integrations already wired:
- Existing observability, analytics, or release tooling:

### Reuse-First Delta Map
- Reuse without changes:
- Extend carefully:
- Refactor in place:
- Net-new additions that are truly required:
- Items rejected to avoid architecture drift:

## 5. Scope, Surfaces, Roles, And Access Model

### Surface Map
- Public surfaces:
- Authenticated end-user surfaces:
- Admin or operator surfaces:
- Internal-only tooling surfaces:
- Mobile-specific surfaces if any:

### Personas And Roles
- Primary user types:
- Operational roles:
- Support or moderation roles:
- Permission boundaries:

### Authentication, Authorization, And Tenancy
- Auth provider and session model:
- RBAC or policy model:
- Protected route strategy:
- Multi-tenancy isolation model:
- Tenant-aware data partitioning rules:
- Entitlements, quotas, or plan enforcement:
- Auditability requirements for privileged actions:

Decision sources:
- `DOC/framework/guide/backend/auth-authorization-and-rls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`

## 6. Product, Content, CMS, And Search Strategy

### Product Scope Summary
- Core user journeys:
- Revenue or conversion journeys:
- Admin or support journeys:

### Content Surfaces
- Blog:
- Services or marketing pages:
- Catalog or shop:
- Case studies or proof:
- FAQ, help, or trust content:

### CMS And Editorial Operations
- CMS decision and justification:
- Document types, field groups, and validation:
- Taxonomies and references:
- Slug, preview, draft, review, and publish workflow:
- Editorial ownership and permissions:
- Revalidation, cache invalidation, or publish propagation rules:
- What belongs in CMS vs admin-dashboard vs code:

### Search And Indexing
- Search surfaces in scope:
- Indexing model:
- Search provider or internal search design:
- Query performance expectations:
- Content discovery and SEO interactions:

Decision sources:
- `DOC/framework/guide/product/product-requirements.md`
- `DOC/framework/guide/frontend/frontend-architecture.md`
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`
- `DOC/framework/guide/process/deployment-and-environments.md`

## 7. Platform Decision Matrix

| Capability | Current State | Decision | Required Now / Later / Excluded | Notes |
|---|---|---|---|---|
| Next.js |  |  |  |  |
| React |  |  |  |  |
| TypeScript |  |  |  |  |
| Sanity CMS |  |  |  |  |
| Supabase |  |  |  |  |
| PostgreSQL |  |  |  |  |
| Prisma |  |  |  |  |
| Lark |  |  |  |  |
| Resend |  |  |  |  |
| Pusher |  |  |  |  |
| S3 |  |  |  |  |
| Search provider |  |  |  |  |
| Analytics provider |  |  |  |  |
| Error monitoring |  |  |  |  |
| Feature flag system |  |  |  |  |

## 8. Data, API, Events, And Storage Plan
- Source of truth per domain:
- Database ownership and schema impact:
- Migration or backfill needs:
- API boundaries and endpoint groups:
- Versioning and backward-compatibility strategy:
- Event model, webhooks, and async side effects:
- Rate limiting and throttling strategy:
- File or asset storage classes:
- File lifecycle and retention rules:
- File or media processing pipeline:
- Restore or replay considerations:

Decision sources:
- `DOC/framework/guide/data/data-model.md`
- `DOC/framework/guide/api/api-design.md`
- `DOC/framework/guide/backend/file-delivery-and-storage.md`
- `DOC/framework/guide/backend/queue-payments-and-integrations.md`

## 9. Integrations, Billing, And Background Processing

### Integration Plan

| Integration | Purpose | Trigger Points | Owner Surface | Failure / Fallback | Notes |
|---|---|---|---|---|---|
| Lark |  |  |  |  |  |
| Resend |  |  |  |  |  |
| Pusher |  |  |  |  |  |
| S3 |  |  |  |  |  |
| Payments |  |  |  |  |  |
| Calendar |  |  |  |  |  |
| Search provider |  |  |  |  |  |
| Analytics provider |  |  |  |  |  |

### Billing And Subscription
- Payment provider:
- Plans, pricing, or monetization model:
- Subscription lifecycle or purchase states:
- Entitlement enforcement points:
- Webhook ownership and idempotency:
- Finance and reconciliation visibility:

### Background Jobs And Async Processing
- Queue or job system:
- Async jobs in scope:
- Retry strategy:
- Dead-letter or failure handling:
- Operational ownership:

Decision sources:
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/backend/queue-payments-and-integrations.md`
- `DOC/framework/guide/backend/backend-observability-and-reliability.md`

## 10. Frontend Governance, UX, Analytics, And Error Strategy
- Route and IA plan:
- Layout and shell ownership:
- Design system governance and component standards:
- Accessibility baseline:
- Localization needs:
- Error, empty, loading, retry, and fallback UX:
- Analytics instrumentation and event taxonomy:
- Funnel and product insight requirements:
- Sensitive-data exclusions for analytics:

Decision sources:
- `DOC/framework/guide/frontend/frontend-rules-and-design-system.md`
- `DOC/framework/guide/frontend/component-and-styling-standards.md`
- `DOC/framework/guide/frontend/ui-ux-standards.md`
- `DOC/framework/guide/frontend/data-fetching-and-state.md`
- `DOC/framework/guide/frontend/accessibility-and-localization.md`
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`

## 11. Performance, Caching, Observability, And Reliability
- Performance budgets or targets:
- Rendering strategy and cache plan:
- CDN and edge caching strategy:
- Cache invalidation rules:
- Query and payload performance expectations:
- Error monitoring platform:
- Structured logging strategy:
- Metrics and dashboards:
- Alerting and escalation triggers:
- Session replay or client diagnostics if applicable:
- Reliability objectives or service indicators:

Decision sources:
- `DOC/framework/guide/frontend/frontend-performance-and-analytics.md`
- `DOC/framework/guide/backend/backend-observability-and-reliability.md`
- `DOC/framework/guide/operations/security-and-operations.md`

## 12. Security, Privacy, Compliance, Abuse Protection, And Recovery
- Security boundary summary:
- RLS or policy expectations:
- Secret handling and rotation:
- Privacy and retention requirements:
- Compliance obligations:
- Abuse protection and rate limits:
- Moderation or safety controls:
- Backup strategy:
- Disaster recovery or restoration plan:
- Incident severity model and response expectations:

Decision sources:
- `DOC/framework/guide/backend/auth-authorization-and-rls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/process/privacy-retention-and-compliance.md`
- `DOC/framework/guide/process/incident-response.md`

## 13. Environment, CI/CD, Release Control, And Rollback
- Environment model:
- Secrets and config isolation:
- Build pipeline steps:
- Test enforcement in CI:
- Preview deployment strategy:
- Release triggers and approvals:
- Feature flags and kill switches:
- Gradual rollout or staged release plan:
- Rollback strategy:
- Post-deploy validation steps:

Decision sources:
- `DOC/framework/guide/process/deployment-and-environments.md`
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/operations/security-and-operations.md`
- `DOC/framework/guide/quality/enterprise-testing-and-quality-enforcement-v2.md`

## 14. Admin, Internal Operations, And Support Controls
- Admin dashboard scope:
- Moderation or support tooling:
- Internal override rules:
- Operator workflows and ownership:
- Escalation and support responsibilities:
- Audit requirements for internal actions:

Decision sources:
- `DOC/framework/guide/operations/platform-governance-and-controls.md`
- `DOC/framework/guide/process/incident-response.md`
- `DOC/framework/guide/product/product-requirements.md`

## 15. Global Site And Platform Invariants
- Reuse existing design system, layouts, primitives, and interaction patterns before adding new UI.
- Prefer extending current routes, schemas, and data modules over introducing parallel systems.
- Define the canonical footer, legal, trust, and attribution rules explicitly if required.
- Define invariants for SEO, analytics naming, auth boundaries, and privileged route exposure.
- Define which platform controls are always server-authoritative.

## 16. E2E Phase Plan

For each phase below, complete every field and list the exact project-plan folders or files that will be created or updated.

### Shared Contracts
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Reuse targets:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### CMS And Content Operations
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Reuse targets:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### Frontend And Admin Surfaces
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Reuse targets:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

<<<<<<< HEAD
=======
Frontend surface completeness rule:
- List the exact frontend page files that will be created or updated.
- Include separate markdown files for each core route and reusable dynamic template in scope.
- Do not mark this phase complete if the page inventory is missing or if section-level planning still lives only in a summary file.

>>>>>>> frontend
### Backend, Jobs, And Integrations
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Reuse targets:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### API, Data, And Storage
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Reuse targets:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### Security, Privacy, And Abuse Protection
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### DevOps, Release Control, And Observability
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

### QA And Validation Governance
- Guide decision sources:
- Folders or files to create or update:
- Inputs:
- Required decisions:
- Deliverables:
- Entry criteria:
- Exit criteria:
- Risks and fallback:

## 17. Execution Backlog

Each task must include owner hint, dependencies, target folders or files, and the validation evidence required to close it.

1. Task, owner hint, dependency, target docs or files, validation evidence
2. Task, owner hint, dependency, target docs or files, validation evidence
3. Task, owner hint, dependency, target docs or files, validation evidence

## 18. Release-Gate And Validation Matrix

| Gate | Scope | Blocking? | Owner | Evidence Required |
|---|---|---|---|---|
| Static validation |  |  |  |  |
| Unit tests |  |  |  |  |
| Integration tests |  |  |  |  |
| UI component tests |  |  |  |  |
| Responsive and mobile validation |  |  |  |  |
| End-to-end tests |  |  |  |  |
| SEO validation |  |  |  |  |
| Accessibility validation |  |  |  |  |
| Performance validation |  |  |  |  |
| Security validation |  |  |  |  |
| Observability readiness |  |  |  |  |
| Rollback readiness |  |  |  |  |
| Backup or recovery readiness |  |  |  |  |
| Regression validation |  |  |  |  |

## 19. Risks, Assumptions, Open Decisions, And Explicit N/A Items
- Risks:
- Assumptions:
- Open decisions:
- Blockers:
- Explicitly not applicable sections and why:

## 20. Tracker And Documentation Updates
- Files updated:
- New planning artifacts created:
- Downstream role docs updated:
- New folders created:
- Root routing updates:
- Task tracker deltas:
- Remaining follow-up docs required before implementation:

## 21. Completion Checklist
- Every required section is completed or explicitly marked `Not applicable` with a reason.
- Guide sources are named for each major decision area.
- Root project-plan routing docs are updated.
- Core project-plan folders exist with `ai-context.yaml` and `README.md`.
- Scope-required conditional folders are created or intentionally excluded with reasons.
<<<<<<< HEAD
=======
- Frontend scope includes `frontend-plan.md` plus separate page-level docs for each core page and reusable dynamic template when page planning is in scope.
>>>>>>> frontend
- Observability, release control, environments, auth, billing, compliance, abuse protection, recovery, and QA gates are explicitly resolved.
- No major planning ambiguity remains that would force implementation-time guessing.