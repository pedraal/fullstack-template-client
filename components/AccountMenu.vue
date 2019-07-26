<template>
  <aside class="menu">
    <p class="menu-label">Votre compte</p>
    <ul class="menu-list">
      <li>
        <ul>
          <li>
            <nuxt-link tag="a" to="/account/" active-class="is-active" exact>Général</nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/account/comments" active-class="is-active">Mes commentaires</nuxt-link>
          </li>
          <li>
            <nuxt-link tag="a" to="/account/events" active-class="is-active">Mes évenements</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  margin: 2rem 0 0 2rem;
}
</style>