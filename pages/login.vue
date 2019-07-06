<template>
  <section class="section is-flex">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <h2 class="title has-text-centered">Se connecter à E Corp</h2>
          <form autocomplete="off" @submit.stop.prevent="handleSubmit">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="email"
                  v-model="email"
                  placeholder="Votre email"
                  autofocus="true"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="password"
                  v-model="password"
                  placeholder="Votre mot de passe"
                  autofocus="true"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-key"></i>
                </span>
              </p>
            </div>
            <div class="field is-flex">
              <div class="field">
                <div class="control">
                  <input type="submit" class="button is-danger" value="Envoyer" />
                </div>
              </div>
            </div>
          </form>
          <p class="has-text-centered">
            Vous n'avez pas encore de compte?
            <nuxt-link :to="{ name: 'signup'}" tag="a">S'enregistrer</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "h1337ttp://localhost:";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.login(this.email, this.password);
        this.loading = false;
        this.setUser(response.user);
        this.$router.push("/");
      } catch (err) {
        this.loading = false;
        alert(err.message || "An error occurred.");
      }
    },
    ...mapMutations({
      setUser: "auth/setUser"
    })
  }
};
</script>

<style lang="scss" scoped>
.section {
  height: 70vh;
}

form {
  margin-bottom: 2rem;
}
</style>