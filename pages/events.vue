<template>
  <section class="section">
    <div class="container">
      <br />
      <a @click="goBack">Back</a>
      <br />
      <br />
      <div class="columns is-multiline">
        <div class="column is-6-tablet is-4-desktop" v-for="event in events" :key="event.id">
          <div class="wrapper shadowbox">
            <div class="thumbnail" :style="[{backgroundImage: `url(${event.thumbnail.url})`}]">
              <div class="date">
                <p class="has-background-danger has-text-white">{{event.date | DayMonthFormatFr}}</p>
              </div>
            </div>
            <div class="content">
              <p class="heading is-size-4 has-text-centered">{{event.title}}</p>
              <p>
                <small>{{event.users.length}} participant.e.s</small>
              </p>
            </div>
            <div class="hovered-content is-flex">
              <div class="has-text-white">
                <p class="date is-size-7 has-text-centered">
                  <span class="icon">
                    <i class="fas fa-calendar"></i>
                  </span>
                  {{event.date | BasicDateFormatFr}}
                </p>
                <p class="time is-size-7 has-text-centered">
                  <span class="icon">
                    <i class="fas fa-clock"></i>
                  </span>
                  {{event.date | HourMinuteFormatFr}}
                </p>
                <p class="content has-text-justified">{{event.description}}</p>

                <p class="has-text-centered">
                  <button class="button is-danger is-inverted" @click="attempt">Participer</button>
                </p>
              </div>
            </div>
          </div>
        </div>
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
      query: ""
    };
  },
  computed: {
    filteredList() {
      return this.events.filter(post => {
        return post.name.toLowerCase().includes(this.query.toLowerCase());
      });
    },
    events() {
      return this.$store.getters["events/list"];
    },
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    attempt() {
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
  async fetch({ store }) {
    store.commit("events/emptyList");
    const response = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
            events (sort: "date:asc") {
              id
              title
              description
              date
              location
              users{username}
              thumbnail {
                url
              }
            }
          }
          `
      }
    });
    response.data.events.forEach(event => {
      store.commit("events/add", {
        id: event.id,
        ...event
      });
    });
  }
};
</script>

<style lang="scss" scoped>
section {
  min-height: 70vh;
}
.wrapper {
  height: 300px;
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto;
  .thumbnail {
    position: relative;
    height: 75%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .date {
      position: absolute;
      top: 0;
      right: 0;
      p {
        font-size: 1rem;
        padding: 10px 1rem;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }
  }
  .content {
    height: 25%;
    position: relative;
    margin: 0;
    .heading {
      padding-top: 5px;
    }
    p:last-of-type {
      small {
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }
  .hovered-content {
    position: relative;
    height: 100%;
    transition: all 0.6s ease-in-out;
    top: 0%;
    background: linear-gradient(45deg, #e66465, #ff3860);
    .content {
      padding: 1rem;
    }
  }
  &:hover {
    .hovered-content {
      top: -100%;
    }
  }
}
</style>

