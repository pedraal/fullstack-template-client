<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-full-tablet is-half-widescreen">
          <h2 class="title">Mes évenements à venir</h2>
          <div class="divider large"></div>
          <template v-for="event in upcoming">
            <div :key="event.id" class="wrapper">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item image is-128x128">
                    <img :src="event.event.thumbnail.url" />
                  </div>
                  <div class="level-item">
                    <div>
                      <h3 class="heading">{{event.event.date | fullDateFr}}</h3>
                      <p class="subtitle">{{event.event.title}}</p>
                    </div>
                  </div>
                </div>

                <div class="level-right">
                  <div class="level-item">
                    <div class="has-text-right">
                      <p class="heading">
                        <span class="icon">
                          <i class="fas fa-calendar"></i>
                        </span>
                        {{event.event.date | BasicDateFormatFr}}
                      </p>
                      <p class="heading">
                        <span class="icon">
                          <i class="fas fa-clock"></i>
                        </span>
                        {{event.event.date | HourMinuteFormatFr}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
            </div>
          </template>
        </div>

        <div class="column is-full-tablet is-half-widescreen">
          <h2 class="title">Mes évenements passés</h2>
          <div class="divider large"></div>
          <template v-for="event in passed">
            <div :key="event.id" class="wrapper">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item image is-128x128">
                    <img :src="event.event.thumbnail.url" />
                  </div>
                  <div class="level-item">
                    <div>
                      <h3 class="heading">{{event.event.date | fullDateFr}}</h3>
                      <p class="subtitle">{{event.event.title}}</p>
                    </div>
                  </div>
                </div>

                <div class="level-right">
                  <div class="level-item">
                    <div class="has-text-right">
                      <p class="heading">
                        <span class="icon">
                          <i class="fas fa-calendar"></i>
                        </span>
                        {{event.event.date | BasicDateFormatFr}}
                      </p>
                      <p class="heading">
                        <span class="icon">
                          <i class="fas fa-clock"></i>
                        </span>
                        {{event.event.date | HourMinuteFormatFr}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
            </div>
          </template>
        </div>
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
    user() {
      return this.$store.getters["auth/user"];
    },
    username() {
      return this.$store.getters["auth/username"];
    },
    eventAttempts() {
      return this.$store.getters["account/eventAttempts"];
    },
    upcoming() {
      return this.eventAttempts.filter(eventAttempt => {
        return eventAttempt.event.date > _.now();
      });
    },
    passed() {
      return this.eventAttempts.filter(eventAttempt => {
        return eventAttempt.event.date < _.now();
      });
    }
  },
  async beforeMount() {
    this.$store.commit("account/emptyEventAttempts");

    let userQuery = await strapi.request("get", "/users/me");
    let eventAttempts = userQuery.eventattempts;

    let eventQueryWhereString = "";
    eventAttempts.forEach(eventAttempt => {
      eventQueryWhereString =
        eventQueryWhereString + `"${eventAttempt.event}",`;
    });
    eventQueryWhereString = `[${eventQueryWhereString}]`;

    let eventQuery = await strapi.request("post", "/graphql", {
      data: {
        query: `query {
                      events(where: {_id : ${eventQueryWhereString}}){
                        _id
                        title
                        date
                        location
                        thumbnail{
                          url
                        }
                      }
            }`
      }
    });
    let events = eventQuery.data.events;

    events.forEach(event => {
      event.thumbnail.url = apiUrl + event.thumbnail.url;
      event.date = new Date(event.date);
    });

    eventAttempts.forEach(eventAttempt => {
      let event = _.find(events, function(event) {
        return event._id === eventAttempt.event;
      });
      eventAttempt.event = event;
      this.$store.commit("account/addEventAttempts", {
        ...eventAttempt
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

.title,
.button {
  margin-bottom: 0.75rem;
}
.level {
  margin: 0;
}

.divider {
  display: block;
  width: 100%;
  height: 1px;
  background: #dbdbdb;
  &.large {
    height: 2px;
  }
}
.wrapper {
  &:last-of-type {
    .divider {
      height: 0 !important;
    }
  }
}
</style>