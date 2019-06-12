module.exports = {
  cache: {
    cacheId: "quick-start-app",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "quick-start-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
