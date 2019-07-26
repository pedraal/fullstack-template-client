<template>
  <div class="hasnavtop">
    <Header />
    <div class="columns">
      <div class="column is-narrow">
        <AccountMenu />
      </div>
      <div class="column">
        <nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import AccountMenu from "~/components/AccountMenu.vue";

export default {
  components: {
    Header,
    Footer,
    AccountMenu
  }
};
</script>

<style lang="scss">
</style>



