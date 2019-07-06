<template class="anchor">
  <div>
    <section id="numbers" class>
      <h3 class="title has-text-centered has-text-white">E Corp en quelques chiffres</h3>
      <div class="level">
        <div class="level-item has-text-centered">
          <div data-aos="fade-right">
            <p class="heading has-text-white-bis">Employés à travers le globe</p>
            <p class="title has-text-danger has-text-weight-bold">{{employes}}K</p>
          </div>
          <span class="icon">
            <i class="fas fa-users"></i>
          </span>
        </div>
        <div class="level-item has-text-centered">
          <div data-aos="fade-right" data-aos-delay="100">
            <p class="heading has-text-white-bis">Actions humanitaires</p>
            <p class="title has-text-danger has-text-weight-bold">{{humanitaires}}</p>
          </div>
          <span class="icon">
            <i class="fas fa-hand-holding-heart"></i>
          </span>
        </div>
        <div class="level-item has-text-centered">
          <div data-aos="fade-right" data-aos-delay="200">
            <p class="heading has-text-white-bis">Capital</p>
            <p class="title has-text-danger has-text-weight-bold">{{capital}}M</p>
          </div>
          <span class="icon">
            <i class="fas fa-dollar-sign"></i>
          </span>
        </div>
        <div class="level-item has-text-centered">
          <div data-aos="fade-right" data-aos-delay="300">
            <p class="heading has-text-white-bis">Croissance</p>
            <p class="title has-text-danger has-text-weight-bold">{{croissance}}%</p>
          </div>
          <span class="icon">
            <i class="fas fa-chart-line"></i>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employes: 50,
      croissance: 21,
      capital: 793,
      humanitaires: 148
    };
  },
  beforeMount() {},
  methods: {
    test() {
      console.log("test");
    }
  }
};
</script>

<style lang="scss" scoped>
.level-item {
  margin-top: 2rem;
  .icon {
    position: absolute;
    color: rgba(200, 200, 200, 0.2);
    z-index: -1;
    font-size: 6rem;
  }
}

@media screen and (max-width: 769px) {
  .level-item {
    margin-top: 5rem;
  }
}
</style>