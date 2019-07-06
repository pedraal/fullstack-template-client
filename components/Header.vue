<template>
  <header>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" href="/">
          <span class="has-text-danger" style="transform: rotate(-45deg) translateY(-1px)">E&nbsp;</span> Corp
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="myNavbar"
          @click="isActive = !isActive"
          :class="{'is-active': isActive}"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="myNavbar" class="navbar-menu" :class="{'is-active': isActive}">
        <div class="navbar-start">
          <nuxt-link tag="a" class="navbar-item" to="/" active-class="is-active" exact>Acceuil</nuxt-link>
          <nuxt-link
            tag="a"
            class="navbar-item"
            to="/publications"
            active-class="is-active"
          >Publications</nuxt-link>
          <nuxt-link tag="a" class="navbar-item" to="/events" active-class="is-active">Évenements</nuxt-link>
          <nuxt-link tag="a" class="navbar-item" to="/about" active-class="is-active">À propos</nuxt-link>
          <nuxt-link tag="a" class="navbar-item" to="/contact" active-class="is-active">Contact</nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item" v-if="!username">
            <div class="buttons">
              <nuxt-link to="signup" tag="a" class="button is-success">
                <strong>Sign up</strong>
              </nuxt-link>
              <nuxt-link to="login" tag="a" class="button is-light">Log in</nuxt-link>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable" v-else>
            <a class="navbar-link">Welcome {{username}}</a>

            <div class="navbar-dropdown">
              <a class="navbar-item" @click="toastComingSoon">Articles favories</a>
              <a class="navbar-item" @click="toastComingSoon">Évenements</a>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    username() {
      return this.$store.getters["auth/username"];
    }
  },
  methods: {
    toastComingSoon() {
      this.$toast.global.comingSoon();
    },
    ...mapMutations({
      logout: "auth/logout"
    })
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.6s ease-in-out;
  width: 100%;

  .navbar-brand {
    a {
      &:hover,
      &:link,
      &:visited {
        color: white !important;
      }
    }
  }

  a.navbar-burger:hover {
    color: rgba(255, 255, 255, 1);
  }

  .is-hoverable:hover .navbar-link {
    color: hsl(348, 100%, 61%);
  }
}
</style>