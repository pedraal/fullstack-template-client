<template>
  <footer>
    <div class="scrollTop has-text-centered">
      <span class="icon is-size-3 has-text-white" @click="scrollTop">
        <i class="fas fa-chevron-up"></i>
      </span>
    </div>
    <div class="columns">
      <div class="column is-4 newsletter">
        <h2 class="title">Être tenu au courant</h2>
        <p
          class="content has-text-grey-light"
        >Rejoignez notre newsletter pour être tenu au courant des dernières actualités de E Corp</p>
        <div class="field has-text-centered is-flex">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="tel" placeholder="Votre email" />
            </p>
            <p class="control">
              <button class="button is-danger">Envoyer</button>
            </p>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <h2 class="title">Liens pratiques</h2>

        <p class="has-text-centered">
          <nuxt-link tag="a" to="/about">À propos</nuxt-link>
        </p>
        <p class="has-text-centered">
          <nuxt-link tag="a" to="/legal">Termes d'utilisation</nuxt-link>
        </p>
        <p class="has-text-centered">
          <nuxt-link tag="a" to="/legal#data">Confidentialité</nuxt-link>
        </p>
        <p class="has-text-centered">
          <nuxt-link tag="a" to="/legal#mentions">Mentions légales</nuxt-link>
        </p>
      </div>
      <div class="column is-4">
        <h2 class="title">Nous suivre</h2>
        <div class="socialbox">
          <span class="icon is-size-2">
            <i class="fab fa-instagram"></i>
          </span>
          <span class="icon is-size-2">
            <i class="fab fa-twitter-square"></i>
          </span>
          <br />
          <span class="icon is-size-2">
            <i class="fab fa-facebook-square"></i>
          </span>
          <span class="icon is-size-2">
            <i class="fab fa-linkedin"></i>
          </span>
        </div>
      </div>
    </div>
    <p class="has-text-centered has-text-white">© 2019 Evil Corp. Tous droits réservés</p>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #222;
  position: relative;
  padding: 2rem;

  .scrollTop {
    position: relative;
    z-index: 3;
  }
  &::after {
    content: "";
    background-image: url(/images/footer-bg.png);
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }
  .icon {
    cursor: pointer;
  }
  .columns {
    margin: 0;
    position: relative;
    z-index: 3;
    .title {
      color: #dbdbdb;
      text-align: center;
    }

    a {
      color: #aaa;

      &:hover {
        color: white;
      }
    }
  }
  .newsletter {
    .content {
      text-align: center;
    }
    .field {
      margin: 0 auto;
    }
  }
  .socialbox {
    margin: 0 auto;
    text-align: center;
    span {
      margin: 1rem;
      color: #ababab;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }
}
</style>