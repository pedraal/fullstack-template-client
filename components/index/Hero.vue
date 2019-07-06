<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-head"></div>

      <div class="hero-body">
        <div
          class="image init-hidden"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <img src="/images/Ecorplogo.png" />
        </div>
        <div class="container">
          <div
            class="title-box has-background-grey-dark init-hidden"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="700"
          >
            <h1 class="subtitle has-text-white is-size-6-mobile">
              <span class="icon has-text-danger">
                <i class="fas fa-quote-left"></i>
              </span>&nbsp;Together we can change the world, with E Corp&nbsp;
              <span
                class="icon has-text-danger"
              >
                <i class="fas fa-quote-right"></i>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div class="hero-foot"></div>
    </section>
    <section
      id="publications"
      class="init-hidden"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="1000"
    >
      <div class="container">
        <div class="columns">
          <nuxt-link
            tag="article"
            :to="{ name: 'publication-id', params: { id: publication.id }}"
            v-for="publication in publications.slice(0,3)"
            :key="publication.id"
            class="column is-4"
          >
            <div class="wrapper shadowbox has-background-white-dark">
              <div class="image">
                <img :src="publication.image.url" />
              </div>
              <div class="title-box">
                <p
                  class="title is-size-5 is-size-6-tablet is-size-6-mobile has-text-centered"
                >{{publication.title}}</p>
              </div>
              <p class="subtitle is-size-7 has-text-justified">{{publication.content | summarize}}</p>
              <p class="has-text-centered"></p>
            </div>
          </nuxt-link>
        </div>
        <p class="has-text-centered" style="margin-top:-40px">
          <nuxt-link tag="a" class="has-text-danger" to="/publications">Voir nos autres publications</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    publications() {
      return this.$store.getters["publications/list"];
    }
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url(/images/skyline.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .hero-body {
    .image {
      width: 200px;
      margin: 0 auto 2rem auto;
    }
    .container {
      display: flex;
      align-self: center;
      justify-content: center;
      .title-box {
        display: inline-block;
        padding: 2rem;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .hero {
    .hero-body {
      .image {
        width: 130px;
      }
    }
  }
}

#publications {
  article {
    position: relative;
    top: -80px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    // &:hover {
    //   top: -100px;
    // }
    .wrapper {
      width: 80%;
      margin: 0 auto;
      border-radius: 5px;
      overflow: hidden;

      .title-box {
        margin-top: 10px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        display: block;
        padding: 0 1rem 0.5rem 1rem;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  #publications article {
    top: -20px;
    &:hover {
      top: -20px;
    }
    .wrapper {
      width: 60%;
    }
  }
}

@media screen and (max-width: 540px) {
  #publications article {
    .wrapper {
      width: 80%;
    }
  }
}

.init-hidden {
  opacity: 0;
  animation-fill-mode: forwards;
}
</style>