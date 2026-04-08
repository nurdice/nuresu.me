/**
 * Jira CORS Proxy — Cloudflare Worker
 *
 * SETUP (one-time, ~2 minutes):
 *  1. Go to https://dash.cloudflare.com → Workers & Pages → Create → "Hello World"
 *  2. Replace the default script with this file.
 *  3. Add two secrets via Settings → Variables → Secret variables:
 *       JIRA_EMAIL   your Atlassian account email
 *       JIRA_TOKEN   an API token from https://id.atlassian.com/manage-profile/security/api-tokens
 *  4. Deploy. Copy the worker URL (e.g. https://jira-proxy.yourname.workers.dev).
 *  5. Paste that URL into the Jira panel inside the Estimation App app.
 *
 * The worker only proxies requests to *.atlassian.net/rest/api/ paths.
 * Your credentials never leave Cloudflare's servers.
 */
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    const { searchParams } = new URL(request.url);
    const target = searchParams.get('url');

    // Strict allowlist: Jira Cloud REST API + attachment content
    const allowed = /^https:\/\/[^/]+\.atlassian\.net\/rest\/api\//.test(target)
                  || /^https:\/\/[^/]+\.atlassian\.net\/rest\/api\/3\/attachment\/content\//.test(target);
    if (!target || !allowed) {
      return new Response('Invalid or disallowed URL', { status: 400 });
    }

    if (!env.JIRA_EMAIL || !env.JIRA_TOKEN) {
      return new Response('Proxy not configured — set JIRA_EMAIL and JIRA_TOKEN secrets', { status: 503 });
    }

    const upstream = await fetch(target, {
      headers: {
        Authorization: 'Basic ' + btoa(env.JIRA_EMAIL + ':' + env.JIRA_TOKEN),
        Accept: 'application/json, image/*, */*',
      },
      redirect: 'manual',
    });

    // Jira attachment endpoints return 302 → signed CDN URL.
    // Follow that redirect WITHOUT auth headers so the CDN accepts it.
    let finalRes = upstream;
    if (upstream.status >= 301 && upstream.status <= 308) {
      const location = upstream.headers.get('location');
      if (location) {
        finalRes = await fetch(location);
      }
    }
    const body = await finalRes.arrayBuffer();
    const contentType = finalRes.headers.get('content-type') || 'application/octet-stream';
    return new Response(body, {
      status: finalRes.status,
      headers: {
        'Content-Type': contentType,
        ...corsHeaders(),
      },
    });
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
