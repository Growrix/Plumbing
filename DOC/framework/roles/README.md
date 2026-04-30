---
document_type: role-index
human_index: true
ai_first_stop: ai-context.yaml
scope: framework-role-system
---

# Framework Roles README

## Purpose

- This folder contains reusable framework roles for planning enterprise-grade site and SaaS documentation.
- These roles are not project-specific.
- They exist to help an AI generate end-to-end documentation before and during implementation.

## AI First-Stop File

- Start with [ai-context.yaml](ai-context.yaml).
- It defines role order, task-to-role routing, and the shared contract artifacts all roles must respect.
- Then read [documentation-workflow-playbook.md](documentation-workflow-playbook.md) for the execution sequence and prompt templates.

## Core Rule

- Do not let frontend, backend, data, security, QA, and DevOps planning drift into separate invented systems.
- The shared system contract must be established first.

## Recommended Role Order

1. [fullstack-contract-orchestrator.md](fullstack-contract-orchestrator.md)
2. [frontend-ui-ux-generator.md](frontend-ui-ux-generator.md)
3. [backend-system-planner.md](backend-system-planner.md)
4. [api-data-contract-architect.md](api-data-contract-architect.md)
5. [security-compliance-trust-architect.md](security-compliance-trust-architect.md)
6. [devops-reliability-release-planner.md](devops-reliability-release-planner.md)
7. [qa-test-release-governor.md](qa-test-release-governor.md)

## Why This Order Exists

- The contract orchestrator creates the shared blueprint.
- Frontend and backend planners should consume the same blueprint instead of creating separate realities.
- API and data architecture lock interface details.
- Security, DevOps, and QA roles then harden and validate the system.

## Shared Required Outputs

Every role that generates a documentation folder should require:

- a compact `ai-context.yaml` as the canonical AI entrypoint
- a `README.md` as the human-readable index
- task-based read paths so an AI can read the minimum required files
- explicit invariants, state models, and ownership boundaries

## Role Selection Shortcuts

- Use [fullstack-contract-orchestrator.md](fullstack-contract-orchestrator.md) when the project has not locked its cross-system blueprint yet.
- Use [frontend-ui-ux-generator.md](frontend-ui-ux-generator.md) for page systems, design systems, component systems, and route-level UX planning.
- Use [backend-system-planner.md](backend-system-planner.md) for services, integrations, auth, storage, jobs, and operational backend rules.
- Use [api-data-contract-architect.md](api-data-contract-architect.md) when API shapes, schemas, events, and status models need to be canonical.
- Use [security-compliance-trust-architect.md](security-compliance-trust-architect.md) for authz, tenant isolation, audit, privacy, abuse protection, and compliance planning.
- Use [devops-reliability-release-planner.md](devops-reliability-release-planner.md) for environments, CI/CD, release strategy, observability, scaling, and recovery planning.
- Use [qa-test-release-governor.md](qa-test-release-governor.md) for test strategy, release gates, contract verification, and end-to-end validation.

## Workflow Guide

- Use [documentation-workflow-playbook.md](documentation-workflow-playbook.md) to decide whether to run roles one by one or through a managed sequential orchestration prompt.
- Default workflow: orchestrator first, specialized roles second, hardening roles after, QA last.

## Exit Condition

- The role system is considered complete when an AI can choose one role, follow the shared routing rules, and generate compatible enterprise documentation without inventing undocumented contracts.