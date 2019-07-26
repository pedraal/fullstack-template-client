<template>
  <section class="section">
    <h2 class="title">Mes commentaires</h2>
    <div class="divider"></div>
    <div class="media" v-for="comment in comments" :key="comment.id">
      <div class="media-content">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <small>
                <span class="icon">
                  <i class="fas fa-calendar"></i>
                </span>
                {{comment.createdAt | fullDateFr}}&nbsp;&nbsp;
                <span class="icon">
                  <i class="fas fa-clock"></i>
                </span>
                {{comment.createdAt | HourMinuteFormatFr}}
              </small>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <nuxt-link
                :to="{ name: 'publications-id', params: { id: comment.publication }}"
                class="button is-danger is-inverted"
              >Voir la publication</nuxt-link>
            </div>
          </div>
        </div>
        <div class="content">{{comment.content}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

export default {
  computed: {
    comments() {
      return this.$store.getters["account/comments"];
    }
  },
  async beforeMount() {
    this.$store.commit("account/emptyComments");

    let userQuery = await strapi.request("get", "/users/me");
    let comments = userQuery.comments;

    comments.forEach(comment => {
      this.$store.commit("account/addComment", {
        id: comment._id,
        ...comment
      });
    });
  },
  layout: "account"
};
</script>

<style lang="scss" scoped>
.section {
  min-height: 60vh;
}
.divider {
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 2rem;
  background: #dbdbdb;
}
.level {
  margin-bottom: 1rem;
}
.content {
  padding: 0 1rem;
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 3px;
    height: 100%;
    background: hsl(348, 100%, 61%);
    left: 0;
  }
}
</style>