<template>
  <nav>
    <a href="/"><img class="logo" src="../assets/logo.png" alt="home" /></a>
    <ul class="main-nav">
      <router-link :to="{ path: '/login' }" replace v-if="!auth">
        Log In
      </router-link>
      <router-link :to="{ path: '/register' }" replace v-if="!auth">
        Register
      </router-link>
      <router-link :to="{ path: '/dash' }" replace v-if="auth" class="profile">
        {{username}}
      </router-link>
      <router-link
        :to="{ path: '/' }"
        replace
        v-if="auth"
        v-on:click.native="Logout"
      >
        Log Out
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.ifAuthenticated;
    },
    username() {
      return this.$store.getters.username.charAt(0);
    }
  },
  methods: {
    Logout() {
      this.$store.dispatch("Logout");
    },
  },
};
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
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 5px 15px;
  text-align: center;
  display: block;
  color: white;
}

.main-nav .profile {
  background-color: rgba(0, 255, 136, 0.227);
  border-radius: 50%;
  text-transform: uppercase;
}

.main-nav .profile:hover {
  background-color: rgba(0, 255, 136, 0.426);
  border-radius: 35%;
}

.logo {
  max-width: 35px;
  margin: 10px;
}

.main-nav a {
  color: white;
  margin-left: 30px;
  border: 1px solid rgba(0, 255, 136, 0.124);
  border-radius: 10px;
  transition: 0.7s;
}

.main-nav a:hover {
  color: white;
  background-color: rgba(0, 255, 136, 0.426);
}

.main-nav {
  margin: 10px;
}

.nav {
  display: flex;
}

nav {
  height: 7vh;
}
</style>