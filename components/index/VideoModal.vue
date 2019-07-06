<template>
  <div class="modal" :class="{'is-active': isOpen}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="video-container">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/9uOETcuFjbE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('closeModal')"></button>
  </div>
</template>

<script>
export default {
  props: ["isOpen"]
};
</script>

<style lang="scss" scoped>
.modal-content {
  width: 80%;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>