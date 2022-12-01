// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("coolin-ui").then((module) => {
      console.log('module')
      console.log(module)
      console.log(module.Button)
      // app.use(module);
      app.use(module.Button);
      app.use(module.Icon);
    });
  },
};
