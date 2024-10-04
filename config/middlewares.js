module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET}.s3.ap-southeast-1.amazonaws.com`,
            "https://market-assets.strapi.io",
            "https://tile.openstreetmap.org",
            "https://a.tile.openstreetmap.org",
            "https://b.tile.openstreetmap.org",
            "https://c.tile.openstreetmap.org",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET}.s3.ap-southeast-1.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::poweredBy",
  {
    name: "strapi::cors",
    config: {
      headers: "*",
      origin: [
        "http://localhost:3000",
        "http://localhost:1337",
        "https://dev.fetti.love",
        "https://creatives.fetti.love",
        "https://creative.fetti.love",
        "https://fetti.love",
        "https://dev.api.fetti.love",
        "https://api.fetti.love",
      ],
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
