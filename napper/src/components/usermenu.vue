<template>
  <div class="user-menu">
    <ul>
      <li>
        <router-link class="home" to="/">Profile</router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/portfolio">My Movies</router-link>
      </li>
      <li>
        <router-link class="technology" to="/technology">My Series</router-link>
      </li>
      <li>
        <router-link class="knowledge" to="/knowledge">My Books</router-link>
      </li>
      <li>
        <router-link class="algorithms" to="/algorithms">Settings</router-link>
      </li>
      <li>
        <router-link class="books" to="/books">Dashboard</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-menu {
  position: fixed;
  height: 100vh;
  width: 15%;
  font-size: 25px;
  font-family: 'Open Sans Condensed', sans-serif;
  background-color: rgba(0, 255, 136, 0.042);
}
ul {
  list-style-type: none;
  position: relative;
  top: 15%;
  left: -16%;
  width: 100%;
}
a:link {
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding: 3px 7px;
}
a:visited {
  text-decoration: none;
  color: white;
}
a {
  text-decoration: none;
  transition: 0.7s;
}
li {
  margin-top: 15%;
  transition: 0.7s;
}
li:hover{
  border-radius: 2%;
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 5%;
  background-color: rgba(0, 255, 136, 0.261);
}
</style>