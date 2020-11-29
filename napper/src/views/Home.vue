<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-container">
      <header class="header-text-box"></header>
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from "../components/navbar";
export default {
  components: {
    navbar: navbar,
  },
};
</script>

<style lang="scss" scoped>
/* Search */
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/background.jpg");
  background-size: cover;
  height: 100vh;
  width: 60%;
}
</style>
