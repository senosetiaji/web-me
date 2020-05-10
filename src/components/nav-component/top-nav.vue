<template>
  <nav class="top-navigation">
    <router-link to="/">
      <div class="logo-me">
        <img src="../../assets/images/assets/flatme.png" alt="logo-me">
      </div>
    </router-link>
    <div class="top-menu">
      <router-link to="/contact">
        <div class="top-navigation--menu">contact</div>
      </router-link>
      <label class="labels" for="darkmode">
        <div class="rounded"></div>
        <span>darkmode</span>
      </label>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'topNavigation'
}
</script>

<style>

</style>