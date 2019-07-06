<template>
  <section class="section is-flex">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <h2 class="title has-text-centered">S'enregistrer sur E Corp</h2>
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
                  type="name"
                  v-model="username"
                  placeholder="Votre nom d'utilisateur"
                  autofocus="true"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
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
            Vous avez déjà un compte?
            <nuxt-link :to="{ name: 'login'}" tag="a">Connexion</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      loading: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await strapi.register(
          this.username,
          this.email,
          this.password
        );
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
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
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