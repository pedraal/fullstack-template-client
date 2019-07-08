<template>
  <section class="section">
    <div class="container">
      <br />
      <a @click="goBack">Back</a>
      <br />
      <br />
      <div class="level">
        <div class="level-left">
          <div>
            <span class="subtitle">{{publication.createdAt | fullDateFr | capitalizeFirstLetter}}</span>
            <br />
            <h3 class="title">{{publication.title}}</h3>
            <br />
            <div class="tags has-addons" @click="fav">
              <span class="tag icon">
                <i class="far fa-star"></i>
              </span>
              <span class="tag is-warning">Ajouter à mes favoris</span>
            </div>
            <small>
              <span class="tag is-danger">{{publication.type}}</span>
              by {{publication.author}}
            </small>
          </div>
        </div>
        <br />
      </div>
      <p class="content has-text-justified">
        <img :src="publication.image.url" align="right" />
        {{publication.content}}
      </p>
    </div>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    publication() {
      return this.$store.getters["publication/article"];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fav() {
      if (!this.username) {
        return this.$toast.error(
          "Vous devez vous connecter pour accèder à cette fonctionnalité"
        );
      }
      return this.$toast.global.comingSoon();
    }
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  },
  async fetch({ store, params }) {
    store.commit("publication/emptyArticle");
    const response = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
            publication(id: "${params.id}") {
              id
              title
              content
              createdAt
              author
              type
              image{
                url
              }
            }
          }
          `
      }
    });
    store.commit("publication/select", {
      id: response.data.publication.id,
      ...response.data.publication
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-left: 10px;
  min-height: 80vh;
}

.title {
  margin-bottom: 0.25rem;
}

.tags {
  cursor: pointer;
}

.content {
  margin-top: 2rem;
  padding: 0 1rem;
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 3px;
    height: 100%;
    background: #444;
    left: 0;
  }

  img {
    margin: 6px 10px;
    width: 400px;
  }

  @media screen and (max-width: 769px) {
    img {
      margin: 6px 10px;
      width: 100%;
    }
  }
}
</style>