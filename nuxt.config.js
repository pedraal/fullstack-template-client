import Strapi from "strapi-sdk-javascript/build/main";
import { cpus } from "os";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

let dynamicRoutes = async () => {
  const response = await strapi.request("post", "/graphql", {
    data: {
      query: `query {
            publications {
              id
            }
          }
          `
    }
  });
  let routes = [];
  response.data.publications.forEach(publication => {
    routes.push("/publications/" + publication.id);
  });
  return routes;
};

module.exports = {
  mode: "universal",
  server: {
    port: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "ECorp",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Site web démonstration basé sur une entreprise fictive tirée de la série Mr Robot, Ecorp."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "/images/Ecorplogo-black.png"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "ECorp"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Site web démonstration basé sur une entreprise fictive tirée de la série Mr Robot, Ecorp."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      },
      {
        rel: "stylesheet",
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        body: true
      }
    ]
  },
  env: {
    API_URL: process.env.API_URL
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: ["@/assets/main.scss"],
  plugins: [
    "~plugins/filter.js",
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/mapbox", mode: "client" },
    { src: "@/plugins/showdown", mode: "client" },
    { src: "@/plugins/validator", mode: "client" }
  ],
  modules: ["@nuxtjs/toast"],
  toast: {
    position: "bottom-right",
    duration: 2000,
    register: [
      {
        name: "comingSoon",
        message: "Coming Soon",
        options: {
          type: "info"
        }
      }
    ]
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return new Promise(resolve => {
          window.$nuxt.$once("triggerScroll", () => {
            resolve(savedPosition);
          });
        });
      } else if (to.hash) {
        return new Promise(resolve => {
          window.$nuxt.$once("triggerScroll", () => {
            resolve({ selector: to.hash, offset: { x: 0, y: 70 } });
          });
        });
      }
      return new Promise(resolve => {
        window.$nuxt.$once("triggerScroll", () => {
          resolve({ x: 0, y: 0 });
        });
      });
    }
  },
  generate: {
    routes: dynamicRoutes
  }
};
