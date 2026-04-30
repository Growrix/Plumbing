# Live Deployment Configuration Guide

## Purpose

Use this guide when a frontend application reads content from a CMS or content API and must be deployed to a live domain without carrying project-specific values into the documentation.

## Deployment Principle

If the frontend talks to a hosted content API, the production domain usually does not need special code changes. What changes per project is:

- the production domain
- the hosting provider
- the CMS project or dataset identifiers
- the editorial access model
- the environment variables and CORS allowlists

Treat every concrete value in this guide as a placeholder that must be replaced for the current project.

---

## Common Deployment Models

### Option A: Public Frontend, Local Editorial Studio

```text
Setup:
|- Frontend: https://<production-domain>
|  \- Reads published content from the CMS API
\- Editorial Studio: http://localhost:<studio-port>
   \- Used only by local operators
```

Use this when:

- a single operator or small internal team manages content
- the studio does not need public access
- you want the simplest and lowest-cost setup

Typical workflow:

1. Run the editorial workspace locally.
2. Create or update content.
3. Publish content to the hosted CMS dataset.
4. Verify the live frontend renders the published content.

### Option B: Public Frontend, Hosted Editorial Studio

```text
Setup:
|- Frontend: https://<production-domain>
|  \- Reads published content from the CMS API
\- Editorial Studio: https://<cms-subdomain>
   \- Accessible to authorized editors over the internet
```

Use this when:

- multiple editors need remote access
- the team requires a branded editorial URL
- the organization accepts the extra hosting and maintenance work

Typical workflow:

1. Deploy the frontend application.
2. Deploy the editorial workspace separately.
3. Allow the hosted studio origin in the CMS provider settings.
4. Restrict access with identity and role controls.
5. Verify content publishing and frontend propagation.

---

## Prerequisites

Before deployment, collect the current project's values for:

- frontend production domain: `https://<production-domain>`
- optional staging domain: `https://<staging-domain>`
- studio URL: `http://localhost:<studio-port>` or `https://<cms-subdomain>`
- CMS project identifier: `<cms-project-id>`
- dataset or environment name: `<cms-dataset>`
- API version: `<cms-api-version>`
- required secrets and public environment variables
- allowed origins for API and media access

---

## Quick Start Checklist

### Frontend Deployment

```bash
# Build the frontend application
npm --prefix <frontend-directory> run build

# Start or preview the production build locally if the project supports it
npm --prefix <frontend-directory> run preview
```

### Optional Studio Deployment

```bash
# Run the editorial workspace locally
npm --prefix <studio-directory> run dev

# Or build it for hosted deployment if the project supports it
npm --prefix <studio-directory> run build
```

### Verify Published Content

```bash
# Replace the domain with the live site
curl "https://<production-domain>/<content-route>"

# Replace the URL with the real CMS API endpoint for the project
curl "https://<cms-api-endpoint>"
```

---

## Environment Variable Template

Document only placeholders in shared guides. Fill the real values in the project's environment manager, not in the reusable doc.

### Frontend Example

```env
CMS_PROJECT_ID=<cms-project-id>
CMS_DATASET=<cms-dataset>
CMS_API_VERSION=<cms-api-version>
CMS_API_TOKEN=<set-in-secret-manager-if-required>
PUBLIC_SITE_URL=https://<production-domain>
```

### Editorial Workspace Example

```env
CMS_PROJECT_ID=<cms-project-id>
CMS_DATASET=<cms-dataset>
CMS_STUDIO_HOST=<studio-host-if-applicable>
```

---

## API Endpoint Pattern

The exact CMS API URL depends on the provider, but the structure should be documented generically in reusable guides:

```text
https://<cms-host>/<api-version>/<resource-or-query-path>
```

Document these project-specific details outside the universal guide:

- provider host
- project identifier
- dataset name
- query shape
- auth requirements

---

## Pre-Launch Validation

Run the narrowest commands the current project supports:

```bash
# Static validation
npm --prefix <frontend-directory> run lint

# Unit or integration tests
npm --prefix <frontend-directory> run test

# Production build
npm --prefix <frontend-directory> run build

# End-to-end coverage if available
npm --prefix <frontend-directory> run test:e2e
```

Confirm all of the following:

- the live domain resolves correctly
- TLS is active
- the frontend can read published content
- unpublished content is not exposed unless preview mode is intended
- required CORS or origin rules are configured
- editor access is restricted to authorized users

---

## Troubleshooting

### Content Does Not Appear On The Live Site

Check:

- the content is published, not draft-only
- the frontend points to the correct dataset or environment
- the production environment variables are present
- the content API allows the frontend origin
- caches or revalidation hooks are configured correctly

### Hosted Studio Cannot Connect

Check:

- the studio origin is allowlisted by the CMS provider
- editor authentication is configured correctly
- required tokens or session settings are available in the host environment

### Slow Content Fetching

Check:

- API latency from the deployment region
- cache headers and revalidation strategy
- oversized payloads or overly broad queries

---

## Reuse Rules For This Guide

When copying this document into another project:

1. Keep placeholder values until the project-specific deployment document is created.
2. Move real domains, tokens, IDs, and operator emails into project-local deployment notes or secret managers.
3. Add provider-specific steps only after the project stack is confirmed.
4. Do not store live credentials, API keys, or secret-like values in shared documentation.

---

## One-Line Summary

Deploy the frontend with project-local environment values, keep shared docs placeholder-based, and separate universal deployment guidance from project-specific infrastructure details.
