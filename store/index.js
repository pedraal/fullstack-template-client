import cookieparser from "cookieparser";

import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    let user = null;
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      user = (parsed.user && JSON.parse(parsed.user)) || null;
    }
    commit("auth/setUser", user);

    commit("publications/emptyList");
    commit("publications/emptyArchives");

    const response = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
            publications(sort: "createdAt:desc") {
              id
              title
              content
              createdAt
              type
              author
              image {
                url
              }
            }
          }
          `
      }
    });
    response.data.publications.forEach(publication => {
      commit("publications/add", {
        id: publication.id,
        ...publication
      });
    });
    commit("publications/setArchives");
  }
};
