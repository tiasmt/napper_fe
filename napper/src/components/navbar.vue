<template>
  <nav>
    <a href="/"><img class="logo" src="../assets/logo.png" alt="home" /></a>
    <ul class="main-nav">
      <router-link :to='{path:"/login"}' replace> Login </router-link>
      <router-link :to='{path:"/register"}' replace> Register </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

a {
  text-decoration: none;
}

ul {
  float: right;
  margin-right: 2%;
  display: inline-flex;
  list-style: none;
}


.nav-bar {
  flex-direction: row;
  justify-content: space-between;
  color: white;
}

.main-nav a,
.main-nav button {
  font-family: "Amatic SC", cursive;
  padding: 5px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: white;
}

.logo {
  max-width: 35px;
  margin: 1%;
}

.main-nav a {
  color: white;
  margin-left: 30px;
  border: 1px solid rgba(0, 255, 136, 0.124);
  border-radius: 10px;
  transition: 1s;
}

.main-nav a:hover {
  color: white;
  background-color: rgba(0, 255, 136, 0.426);
}

.nav {
  display: flex;
}

nav {
  height: 10vh;
  }

</style>