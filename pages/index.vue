<template >
  <div>
    <Hero />
    <div class="divider" />
    <Numbers class="section has-background-grey-dark" data-aos="fade-up" data-aos-once="true" />
    <Objectives class="section is-medium" data-aos="fade-up" data-aos-once="true" />
    <Video
      class="section is-medium has-background-grey-dark bg-parallax"
      data-aos="fade-up"
      data-aos-once="true"
      @openModal="modalIsOpen = true"
    />
    <Partners class="section" data-aos="fade-up" data-aos-once="true" />
    <div class="divider" />
    <FindUs class="section" data-aos="fade-up" data-aos-once="true" />
    <VideoModal :isOpen="modalIsOpen" @closeModal="modalIsOpen=false" />
  </div>
</template>

<script>
import Hero from "~/components/index/Hero.vue";
import Numbers from "~/components/index/Numbers.vue";
import Objectives from "~/components/index/Objectives.vue";
import Video from "~/components/index/Video.vue";
import VideoModal from "~/components/index/VideoModal.vue";
import Partners from "~/components/index/Partners.vue";
import FindUs from "~/components/index/FindUs.vue";

export default {
  data() {
    return {
      modalIsOpen: false
    };
  },
  components: {
    Hero,
    Numbers,
    Objectives,
    Video,
    VideoModal,
    Partners,
    FindUs
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  }
};
</script>

<style lang="scss" scoped>
.divider {
  height: 1px;
  width: 80%;
  background: #dbdbdb;
  margin: 4rem auto;
}

.bg-parallax {
  background-image: url(/images/corporate.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

