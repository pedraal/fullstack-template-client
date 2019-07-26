<template>
  <section>
    <div class="container">
      <p
        class="heading has-text-centered"
        data-aos="fade-right"
      >Nous travaillons ensemble avec pour objectif commun</p>
      <h3 class="title has-text-centered" data-aos="fade-up">rendre le monde meilleur!</h3>
      <div class="level">
        <div class="level-item" data-aos="flip-left">
          <div class="image">
            <img src="@/static/images/partners/ingen.png" />
          </div>
        </div>
        <div class="level-item" data-aos="flip-left" data-aos-delay="100">
          <div class="image">
            <img src="@/static/images/partners/vaulttec.jpg" />
          </div>
        </div>
        <div class="level-item" data-aos="flip-left" data-aos-delay="200">
          <div class="image">
            <img src="@/static/images/partners/abstergo.jpg" />
          </div>
        </div>
        <div class="level-item" data-aos="flip-left" data-aos-delay="300">
          <div class="image">
            <img src="@/static/images/partners/dundermifflin.jpg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  padding-top: 4rem;
}
.title {
  margin-bottom: 3rem;
}
.image {
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
}
</style>