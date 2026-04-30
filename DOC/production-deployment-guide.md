# Production Deployment Guide

## Purpose

Use this document as a reusable production deployment template. Replace all placeholder values with project-local configuration before using it for a real release.

## Deployment Snapshot

- Production domain: `https://<production-domain>`
- Application type: `<frontend-framework-or-runtime>`
- Primary hosting platform: `<hosting-platform>`
- Content or data providers: `<cms-or-data-services>`
- Deployment status: `replace-with-current-status`

---

## Pre-Deployment Checklist

- [ ] Confirm the production domain and any redirect domains.
- [ ] Verify environment variables are defined in the hosting secret manager.
- [ ] Verify external providers are configured for the production domain.
- [ ] Run lint, tests, and production build locally or in CI.
- [ ] Confirm TLS, DNS, and rollback ownership.

---

## Hosting Options

### Option 1: Managed Frontend Platform

Typical examples: Vercel, Netlify, Cloudflare, or another managed frontend host.

Common steps:

1. Connect the repository to the host.
2. Set the application root directory, build command, and output path.
3. Add production environment variables in the hosting dashboard.
4. Configure the custom domain and TLS.
5. Trigger the deployment and verify logs.

Template values to capture:

```text
Repository: <repository-name>
Root directory: <app-directory>
Install command: <install-command>
Build command: <build-command>
Output directory: <output-directory>
```

### Option 2: Self-Hosted Runtime

Common steps:

1. Build the application artifact.
2. Provision environment variables on the target server.
3. Start the runtime behind a reverse proxy.
4. Configure TLS and health checks.
5. Verify logs, restart behavior, and rollback steps.

---

## Environment Variable Template

Do not store real values in the reusable guide. Keep secrets in the hosting platform or secret manager.

```env
PUBLIC_SITE_URL=https://<production-domain>
API_BASE_URL=https://<api-domain-if-applicable>
CMS_PROJECT_ID=<cms-project-id-if-applicable>
CMS_DATASET=<cms-dataset-if-applicable>
CMS_API_VERSION=<cms-api-version-if-applicable>
EMAIL_PROVIDER_KEY=<set-in-secret-manager>
PAYMENT_PROVIDER_KEY=<set-in-secret-manager>
AUTH_SECRET=<set-in-secret-manager>
DATABASE_URL=<set-in-secret-manager>
```

Add only the variables that the current project actually uses.

---

## Build And Deploy Commands

Adjust the commands to the active project layout:

```bash
# Install dependencies
npm install

# Run static checks
npm run lint

# Run automated tests
npm run test

# Create a production build
npm run build
```

If the application lives in a subdirectory, use the project's actual path:

```bash
npm --prefix <app-directory> run build
```

---

## DNS And Domain Setup

Record the final provider-specific values in a project-local deployment note, not in the universal template.

Minimum checklist:

- primary production domain: `https://<production-domain>`
- optional staging domain: `https://<staging-domain>`
- DNS record type: `<A-or-CNAME>`
- DNS target: `<provider-target>`
- TLS owner: `<provider-or-team>`

---

## Post-Deployment Verification

Run the narrowest checks supported by the current stack:

```bash
# Homepage responds
curl -I https://<production-domain>

# Primary application route responds
curl https://<production-domain>/<primary-route>

# Optional API or content endpoint responds
curl https://<production-domain>/<health-or-content-endpoint>
```

Confirm all of the following:

- the app loads on the production domain
- static assets resolve correctly
- required APIs and content providers are reachable
- auth and role-protected areas behave correctly
- no secret values are exposed in the client bundle

---

## Monitoring And Maintenance

### Daily

- confirm the site is reachable
- check deployment or runtime errors
- verify core user flows or health checks

### Weekly

- review logs and alerts
- verify provider connectivity
- recheck form, payment, or content flows if applicable

### Monthly

- review dependency updates
- review security advisories
- review performance metrics
- verify backups and recovery notes

---

## Troubleshooting

### Site Does Not Load

Check:

- domain DNS propagation
- TLS provisioning
- build or runtime logs
- missing production environment variables

### Content Or API Data Does Not Appear

Check:

- provider credentials and allowlists
- dataset or environment selection
- publish status and cache invalidation
- API reachability from the deployment environment

### Slow Responses

Check:

- origin latency
- caching configuration
- oversized bundles or queries
- cold-start or region mismatch issues

---

## Rollback Template

Document the real rollback mechanism for the current host:

1. identify the last known good release
2. restore or promote that release
3. verify the primary routes and critical flows
4. capture the incident and root cause

---

## Security Checklist

- [ ] HTTPS is enabled.
- [ ] Secrets live only in approved secret stores.
- [ ] Security headers are configured where required.
- [ ] Admin or internal credentials are not stored in source control.
- [ ] Public bundles expose only intended public environment variables.

---

## Summary

Keep this guide reusable by storing only placeholders here and moving project-specific domains, providers, credentials, and rollout notes into project-local deployment documentation.