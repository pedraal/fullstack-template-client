<template>
  <section class>
    <div class="container">
      <div class="wrapper is-flex is-16x9">
        <span class="icon has-text-danger" @click="$emit('openModal')">
          <i class="far fa-play-circle"></i>
        </span>
      </div>

      <div class="has-text-centered">
        <nuxt-link tag="a" class="button is-danger is-medium" to="/about">En apprendre plus</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 640px;
  height: 360px;
  background: black;
  margin: 0 auto 40px auto;
  background-image: url(/images/video-placeholder.png);
  background-repeat: no-repeat;
  background-size: 100%;

  span {
    cursor: pointer;
    font-size: 6rem;
  }
}
@media screen and (max-width: 769px) {
  .wrapper {
    width: 320px;
    height: 180px;
  }
}
</style>