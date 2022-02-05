const nextSafe = require("next-safe");

const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentTypeOptions: "nosniff",
          contentSecurityPolicy: {
            "base-uri": "'none'",
            "child-src": "'none'",
            "connect-src": "'self'",
            "default-src": "'self'",
            "font-src": "'self'",
            "form-action": "'self'",
            "frame-ancestors": "'none'",
            "frame-src": "'none'",
            "img-src": "'self' data:;",
            "manifest-src": "'self'",
            "media-src": "'self'",
            "object-src": "'none'",
            "prefetch-src": "'self'",
            "script-src": "'self'",
            "style-src": "'self' 'unsafe-inline'",
            "worker-src": "'self'",
            reportOnly: false,
          },
          frameOptions: "DENY",
          permissionsPolicy: {},
          permissionsPolicyDirectiveSupport: ["proposed", "standard"],
          isDev: isDev,
          referrerPolicy: "no-referrer",
          xssProtection: "1; mode=block",
        }),
      },
    ];
  },
};
