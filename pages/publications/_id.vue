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
            <small>
              <span class="tag is-danger">{{publication.publicationtype.type}}</span>
              écrit par {{publication.author}}
            </small>
          </div>
        </div>
      </div>
      <p class="content has-text-justified">
        <img :src="publication.image.url" align="right" />
        {{publication.content}}
      </p>
      <div class="comment-box">
        <div class="comment-list">
          <div class="media" v-for="comment in publication.comments" :key="comment.id">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{comment.username | capitalizeFirstLetter}}</strong>
                  <small>posté le {{comment.createdAt |fullDateFr}} à {{comment.createdAt |HourMinuteFormatFr}}</small>
                  <br />
                  {{comment.content | capitalizeFirstLetter}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent>
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Votre commentaire..." v-model="comment"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input type="submit" class="button is-danger" value="Poster!" @click="sendComment" />
            </div>
          </div>
          <div v-if="!user" class="overlay is-flex">
            <span>
              Merci de vous
              <nuxt-link to="/login" class="has-text-danger">&nbsp;connecter&nbsp;</nuxt-link>afin de commenter les publications
            </span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default {
  data() {
    return {
      comment: ""
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    publication() {
      return this.$store.getters["publication/article"];
    },
    user() {
      return this.$store.getters["auth/user"];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async sendComment() {
      if (!this.user) {
        return this.$toast.error(
          "Vous devez vous connecter pour accèder à cette fonctionnalité"
        );
      }
      try {
        let response = await strapi.request("post", "/graphql", {
          data: {
            query: `mutation {
                      createComment(
                        input: {
                          data: {
                            user: "${this.user._id}"
                            username: "${this.user.username}"
                            publication: "${this.id}"
                            content: "${this.comment}"
                            }
                          }
                        ){
                          comment {
                            user {
                              username
                              email
                            }
                            username
                            publication {
                              title
                              content
                              createdAt
                              author
                              publicationtype{
                                type
                              }
                              image{
                                url
                              }
                            }
                            content
                          }
                        }
                      }`
          }
        });
        if (response.errors) {
          throw new Error();
        }
        this.comment = "";
        return this.$toast.success(`Votre commentaire a bien été envoyé!`);
      } catch (e) {
        console.log(e);
        return this.$toast.error(
          "Oups...une erreur a eu lieu. Veuillez réessayer ultérieurement."
        );
      }
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
              publicationtype{
                type
              }
              image{
                url
              }
              comments(sort: "createdAt:desc"){
                content
                username
                createdAt
              }
            }
          }
          `
      }
    });
    response.data.publication.image.url =
      apiUrl + response.data.publication.image.url;
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

.comment-box {
  margin-top: 4rem;
  max-width: 700px;
  margin: 0 auto;

  .comment-list {
    .content {
      &:before {
        background: hsl(348, 100%, 61%);
      }
    }
  }
  form {
    margin-top: 40px;
    position: relative;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>