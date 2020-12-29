<template>
  <div class="user-menu">
    <ul class="account">
      <h3>Account</h3>
      <li>
        <router-link class="home" to="/">Profile</router-link>
      </li>
      <li>
        <router-link class="portfolio" to="/">Movies</router-link>
      </li>
      <li>
        <router-link class="technology" to="/">Series</router-link>
      </li>
      <li>
        <router-link class="knowledge" to="/">Books</router-link>
      </li>
      <li>
        <router-link class="algorithms" to="/">Settings</router-link>
      </li>
      <li>
        <router-link class="books" to="/">Dashboard</router-link>
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
  width: 13%;
  font-size: 17px;
  font-family: 'Lato', sans-serif;
  background-color: rgba(0, 107, 57, 0.048);
}
ul {
  list-style-type: none;
  position: relative;
  top: 15%;
  left: -20%;
  width: 85%;
}
a:link {
  text-decoration: none;
  color: white;
  border-radius: 5px;
  padding-left: 25%;

}
a:visited {
  text-decoration: none;
  color: white;
}
a {
  text-decoration: none;
  transition: 0.5s;
  display:block;
  margin-top: 2%;
  padding-top: 3%;
  padding-bottom: 3%;
}
a:focus {
  background-color: rgba(0, 255, 136, 0.131);
}

a:hover{
  border-radius: 5%;
  padding-left: 35%;
}

h3{
  font-size: 18px;
  font-weight: 300;
  margin-left: 9%;
  margin-bottom: 8%;
  color: rgba(61, 96, 61, 0.83);
}


</style>