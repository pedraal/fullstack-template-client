<template>
  <div>
    <section class id="findUs">
      <div class="columns is-centered">
        <div class="column is-3">
          <h3 class="title has-text-centered" data-aos="fade-right">Où nous trouver</h3>
          <article class="media" data-aos="flip-up">
            <div class="media-content is-flex">
              <figure>
                <p class="icone is-size-1 has-text-danger">
                  <i class="fas fa-phone"></i>
                </p>
              </figure>
              <div class="content">
                <p class="heading">Nous appeler</p>
                <p class="subtitle">001-1234-88888</p>
              </div>
            </div>
          </article>
          <article class="media address" data-aos="flip-up">
            <div class="media-content is-flex">
              <figure>
                <p class="icone is-size-1 has-text-danger">
                  <i class="fas fa-location-arrow"></i>
                </p>
              </figure>
              <div class="content">
                <p class="heading">Addresse</p>
                <p class="subtitle">256 Broadway</p>
                <p class="subtitle">New York, NY 10007, USA</p>
              </div>
            </div>
          </article>
          <article class="media" data-aos="flip-up">
            <div class="media-content is-flex">
              <figure>
                <p class="icone is-size-1 has-text-danger">
                  <i class="fas fa-clock"></i>
                </p>
              </figure>
              <div class="content">
                <p class="heading">Heures d'ouverture</p>
                <p class="subtitle">Lun-Ven: 8:00 - 18:00</p>
                <p class="subtitle">Sam - Dim: Fermé</p>
              </div>
            </div>
          </article>
          <article class="media is-flex" data-aos="flip-up">
            <nuxt-link tag="a" to="/contact" class="button is-danger">Nous contacter</nuxt-link>
          </article>
        </div>
        <div class="column is-6" data-aos="fade-left" data-aos-offset="400">
          <Map :interactive="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Map from "~/components/Map.vue";
export default {
  components: {
    Map
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 4rem;
}

.media-content {
  figure {
    position: absolute;
    transform: translateX(-8rem);
  }
  .content {
    .heading,
    .subtitle {
      text-align: center;
    }
    .subtitle {
      margin-bottom: 5px;
      font-size: 1rem;
    }
  }
}
</style>