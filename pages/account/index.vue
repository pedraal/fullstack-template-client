<template>
  <section class="section is-flex">
    <h2 class="title">Coming soon</h2>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    }
  },
  created() {
    if (!this.user) {
      return this.$router.push("/login");
    }
  },
  layout: "account"
};
</script>

<style lang="scss" scoped>
.section {
  min-height: 60vh;
}
</style>