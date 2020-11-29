<template>
<div>
  <navbar></navbar>
  <div class="home">
    <div class="container">
      <div class="main gradient">
        <img src="../assets/optimized/background.jpg" />
      </div>
      <div class="movies gradient">
        <img src="../assets/optimized/movies.jpg" />
      </div>
      <div class="series gradient">
        <img src="../assets/optimized/series.jpg" />
      </div>
      <div class="books gradient">
        <img src="../assets/optimized/books.jpg" />
      </div>
    </div>
    <div class="header-container">
      <header class="header-text-box"></header>
    </div>
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
.container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%; /* 4 columns */
  grid-auto-rows: 30vh;
  overflow: hidden;
}

.gradient {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.8));
}

.main {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  width: 100%;
}

.movies,
.series,
.books {
  grid-column-start: 4;
  grid-column-end: 5;
}

.movies {
  grid-row-start: 1;
  grid-row-end: 2;
}

.series {
  grid-row-start: 2;
  grid-row-end: 3;
}

.books {
  grid-row-start: 3;
  grid-row-end: 4;
}

img {
  position: relative;
  z-index: -1;
  display: block;
  width: 100%;
}
</style>
