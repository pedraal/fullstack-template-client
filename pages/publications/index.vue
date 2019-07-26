<template>
  <section class="section">
    <div class="container">
      <br />
      <a @click="goBack">Back</a>
      <br />
      <br />
      <div class="columns">
        <div class="column is-8">
          <article v-for="publication in filteredList" :key="publication.id">
            <img :src="publication.image.url" />
            <div class="level">
              <div class="level-left">
                <p>
                  <span
                    class="subtitle is-size-7"
                  >{{publication.createdAt | fullDateFr| capitalizeFirstLetter}}</span>
                  <br />
                  <strong>{{publication.title}}</strong>
                  <br />
                  <small>
                    <span class="tag is-danger">{{publication.publicationtype.type}}</span>
                    by {{publication.author}}
                  </small>
                </p>
              </div>
            </div>
            <div class="content has-text-justified">
              <p>{{publication.content | summarizeLonger}}</p>

              <p class="has-text-centered">
                <nuxt-link
                  tag="a"
                  class="is-size-6"
                  :to="{ name: 'publications-id', params: { id: publication.id }}"
                >Lire plus...</nuxt-link>
              </p>
            </div>
          </article>
        </div>
        <div class="column is-4">
          <div class="panel">
            <p class="panel-heading">Publications</p>
            <div class="panel-block">
              <p class="control has-icons-left has-icons-right">
                <input class="input is-small" type="text" placeholder="search" v-model="query" />
                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
              <span
                class="icon"
                :class="[{'has-text-danger': query.length>0}, {'has-text-grey-light': !query}]"
                @click="resetQuery"
              >
                <i class="far fa-times-circle" aria-hidden="true"></i>
              </span>
            </div>
            <div class="panel-block">
              <ul>
                Publications récentes
                <li v-for="publication in publications" :key="publication.id">
                  <nuxt-link
                    tag="a"
                    class="is-size-7"
                    :to="{ name: 'publications-id', params: { id: publication.id }}"
                  >{{publication.title}}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="panel-block">
              <ul>
                Archives
                <span
                  class="icon"
                  :class="[{'has-text-danger': archiveQuery.length>0}, {'has-text-grey-light': !archiveQuery}]"
                  @click="resetArchiveQuery"
                >
                  <i class="far fa-times-circle" aria-hidden="true"></i>
                </span>
                <li v-for="(archive,id) in archives" :key="id" @click="archiveQuery=id">
                  <a class="is-size-7">{{id |MonthYearFormatFr| capitalizeFirstLetter}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      archiveQuery: ""
    };
  },
  computed: {
    filteredList() {
      if (this.archiveQuery.length > 0) {
        return this.archives[this.archiveQuery];
      }
      return this.publications.filter(publication => {
        return publication.title
          .toLowerCase()
          .includes(this.query.toLowerCase());
      });
    },
    publications() {
      return this.$store.getters["publications/list"];
    },
    archives() {
      return this.$store.getters["publications/archives"];
    },
    username() {
      return this.$store.getters["auth/username"];
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
    },
    resetQuery() {
      this.query = "";
    },
    resetArchiveQuery() {
      this.archiveQuery = "";
    }
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  }
};
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  .icon.has-text-danger {
    cursor: pointer !important;
  }
  .panel-block a {
    padding-left: 1rem;
  }
}

.column {
  padding: 10px;
  &.is-8 {
    min-height: 70vh;
  }
}

article {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  img {
    width: 100%;
  }
  .tags {
    cursor: pointer;
  }
}
</style>