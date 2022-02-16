module.exports = [
  {
    key: "Content-Security-Policy",
    values: [
      "script-src 'self' 'sha256-I6XOxHID6WSV5+Yw8I4nOPpEa89MTudqup2y4+vYcg0='",
      "connect-src 'self' https://api.rss2json.com/v1/api.json",
      "style-src 'self' 'unsafe-inline'",
      "upgrade-insecure-requests",
      "frame-ancestors 'none'",
      "default-src 'none'",
      "prefetch-src 'self'",
      "manifest-src 'self'",
      "base-uri 'none'",
      "form-action 'none'",
      "object-src 'none'",
      "img-src 'self' https://*.medium.com",
      "font-src 'self'",
    ],
  },
  {
    key: "X-XSS-Protection",
    values: ["1", "mode=block"],
  },
  {
    key: "X-Frame-Options",
    values: ["DENY"],
  },
  {
    key: "Referrer-Policy",
    values: ["strict-origin"],
  },
  {
    key: "X-Content-Type-Options",
    values: ["nosniff"],
  },
  {
    key: "Strict-Transport-Security",
    values: ["max-age=31536000", "includeSubDomains"],
  },
  {
    key: "Expect-CT",
    values: ["enforce, max-age=31536000"],
  },
  {
    key: "Feature-Policy",
    values: [
      "microphone 'none'",
      "camera 'none'",
      "fullscreen 'none'",
      "geolocation 'none'",
    ],
  },
  {
    key: "Permissions-Policy",
    values: ["fullscreen=(), geolocation=()"],
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    values: ["none"],
  },
  {
    key: "Access-Control-Allow-Credentials",
    values: ["false"],
  },
  {
    key: "Access-Control-Allow-Headers",
    values: ["*"],
  },
  {
    key: "Access-Control-Allow-Methods",
    values: ["GET"],
  },
  {
    key: "Access-Control-Allow-Origin",
    values: ["https://neptunemutual.com"],
  },
  {
    key: "Access-Control-Max-Age",
    values: ["600"],
  },
];
