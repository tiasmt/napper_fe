<template>
  <div>
    <navbar></navbar>
    <usermenu></usermenu>
    <div class="home">
      <div class="container">
        <div class="main gradient">
          <img src="../assets/optimized/background.jpg" />
          <searchbar></searchbar>
        </div>
        <div class="movies gradient">
          <p class="title">Movies</p>
          <img src="../assets/optimized/movies.jpg" />
        </div>
        <div class="series gradient">
          <p class="title">Series</p>
          <img src="../assets/optimized/series.jpg" />
        </div>
        <div class="books gradient">
          <p class="title">Books</p>
          <img src="../assets/optimized/books.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import searchbar from "../components/searchbar";
import usermenu from "../components/usermenu";
export default {
  components: {
    navbar: navbar,
    searchbar: searchbar,
    usermenu: usermenu
  },
  created() {
    this.$store.dispatch("AutoLogin");
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
  width: 82%;
  margin-left: 18%;
}

.movies,
.series,
.books {
  grid-column-start: 4;
  grid-column-end: 5;
  cursor: pointer;
  width: 120%;
  transition: 0.5s;
  .title {
    transition: 0.7s;
  }
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

.movies:hover,
.series:hover,
.books:hover {
  width: 115%;
  .title {
    background-color: rgba(0, 255, 136, 0.172);
    border-radius: 5px;
    padding: 3px 25px;
  }
}

.title {
  font-family: 'Open Sans Condensed', sans-serif;
  position: absolute;
  background-color: rgba(0, 255, 136, 0.056);
  border-radius: 5px;
  padding: 3px 7px;
  // text-transform: uppercase;
}
</style>
