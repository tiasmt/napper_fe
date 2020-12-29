<template>
  <div>
    <navbar></navbar>
    <div class="best">
      <h3>Best</h3>
    </div>
    <div class="popular">
      <h3>Popular</h3>
    </div>
    <div class="trending">
      <h3>Trending</h3>
    </div>
    <div class="new">
      <h3>New</h3>
    </div>
  </div>
</template>

<script>
import navbar from "../components/navbar";
export default {
  components: {
    navbar: navbar,
  },
};
</script>

<style lang="scss" scoped>
h3{
    font-family: "Open Sans Condensed", sans-serif;
    margin-left: 10%;
    font-size: 200%;
}

h3::before {
    position: absolute;
    display: inline flex;
    height: 55px;
    width: 2px;
    background-color: rgba(0, 255, 136, 0.118);
    content: " ";
    margin: 0 -10px;
}
</style>