<template>
  <nav>
    <a href="/"><img class="logo" src="../assets/logo.png" alt="home" /></a>
    <ul class="main-nav">
      <li><a href="#">Login</a></li>
      <li><a  href="#">Register</a></li>
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
  padding: 0;
  list-style: none;
}

button {
  margin-left: 30%;
}

.nav-bar {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  color: white;
}

.main-nav a,
.main-nav button {
  font-family: "Amatic SC", cursive;
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: white;
}

.logo {
  width: 4%;
  margin: 1%;
}

.main-nav {
  margin-top: 2%;
}

.main-nav a {
  color: white;
  margin-left: 30px;
  border: 1px solid rgba(0, 255, 136, 0.124);
  border-radius: 10px;
  transition: 0.3s ease;
}

.main-nav a:hover {
  color: white;
  background-color: rgba(0, 255, 136, 0.426);
}

.nav {
  display: flex;
}

</style>