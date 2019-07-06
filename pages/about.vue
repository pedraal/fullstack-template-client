<template>
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-8">
          <h2 class="title">Qui sommes nous</h2>
          <div class="content has-text-justified">
            <p class>
              Ut eget eros ante. Donec nec consequat ligula. Etiam a elit elit. Morbi sit amet tempus nisl. Phasellus pretium ipsum ut bibendum faucibus. Phasellus rutrum ligula sit amet eros tincidunt consectetur.
              Sed a orci sem. Pellentesque tincidunt tortor quam. Proin vel faucibus eros.
              Quisque varius turpis iaculis nulla tincidunt, in aliquam massa rhoncus. Proin viverra, diam sit amet auctor consectetur, nisl tellus cursus mi, eget aliquet dui orci at enim. Nam feugiat laoreet lobortis.
              Morbi hendrerit vulputate nisi. Nam placerat eu quam rutrum sollicitudin. Ut suscipit est ac mauris fringilla semper.
            </p>
            <ul>
              <li>Quisque varius turpis iaculis.</li>
              <li>Phasellus pretium ipsum ut bibendum faucibus.</li>
              <li>Proin viverra, diam sit amet auctor consectetur.</li>
            </ul>
            <div class="image">
              <img src="@/static/images/signature.png" alt />
            </div>
          </div>
        </div>
        <div class="column is-4 shadowbox"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  pageTransition: {
    name: "page",
    mode: "out-in"
  }
};
</script>

<style lang="scss" scoped>
.column.is-8 {
  .image {
    width: 200px;
  }
  .content {
    padding: 1rem;
  }
}
.column.is-4 {
  height: 70vh;
  background-image: url(/images/about-picture.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
}

@media screen and (max-width: 769px) {
  .column.is-4 {
    height: 400px;
    background-image: url(/images/about-picture-mobile.jpg);
  }
}
</style>

