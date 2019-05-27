module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{css,png,js,json,html}"
  ],
  templatedURLs: {
    '/': ['../**/*.pug']
  },
  "swDest": "public/service-worker.js",
  "swSrc": "pre-sw.js"
};
