<template>
  <div>
    <navbar></navbar>
    <usermenu v-if="auth"></usermenu>
    <div class="home">
      <div :class="{container: !auth, container_auth: auth}">
        <div class="main gradient" :class="{auth:auth}">
          <img src="../assets/optimized/background.jpg" />
          <searchbar></searchbar>
        </div>
        <div class="movies gradient" :class="{auth_types:auth}">
          <p class="title">Movies</p>
          <img src="../assets/optimized/movies.jpg" />
        </div>
        <div class="series gradient" :class="{auth_types:auth}">
          <p class="title">Series</p>
          <img src="../assets/optimized/series.jpg" />
        </div>
        <div class="books gradient" :class="{auth_types:auth}">
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
    usermenu: usermenu,
  },
  created() {
    this.$store.dispatch("AutoLogin");
  },
  computed: {
    auth() {
      return this.$store.getters.ifAuthenticated;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 33% 33% 33%; /* 3 columns */
  grid-auto-rows: 31vh;
  overflow: hidden;
  width: 100%;
}

.container_auth {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%; /* 4 columns */
  grid-auto-rows: 31vh;
  overflow: hidden;
  width: 100%;
}

.gradient {
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.8));
}

.main {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  width: 100%;
}

.auth {
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 18%;
  width: 82%;
}

.movies,
.series,
.books {
  grid-column-start: 3;
  grid-column-end: 4;
  cursor: pointer;
  width: 120%;
  transition: 0.5s;
  .title {
    transition: 0.7s;
  }
}

.auth_types {
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
  font-family: "Open Sans Condensed", sans-serif;
  position: absolute;
  background-color: rgba(0, 255, 136, 0.056);
  border-radius: 5px;
  padding: 3px 7px;
}

.home {
  height: 93vh;
}
</style>
