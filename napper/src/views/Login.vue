<template>
  <div>
    <navbar></navbar>
    <form class="login-form" method="POST" action="#">
      <div class="container">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter username"
          name="username"
          id="username"
          required
        />
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          name="password"
          id="password"
          required
        />
      </div>
      <button @click="Login">Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar";
import axios from "axios";
import { apiHost } from "@/main.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    Login(e) {
      e.preventDefault();
      var body = { Username: this.username, Password: this.password };
      axios
        .post(apiHost + "/login", body, {
          "Content-Type": "application/json",
        })
        .then((response) => {
          if (response.status == 200) {
            this.$store.state.isAuthenticated = true;
            this.$cookies.set("jwt", response.data.token, 1);
            this.$router.replace({ path: '/' });
          }
        }).catch((e) => {
          console.log(e);
          //show exception under register
        });
    },
  },
  components: {
    navbar: navbar,
  },
};
</script>

<style lang="scss" scoped>
form,
form button,
form input {
  font-family: "Amatic SC", cursive;
}

h1 {
  margin-left: 40%;
  display: block;
}
.login-form {
  border: 1px solid rgba(0, 255, 136, 0.029);
  background-color: rgba(0, 255, 136, 0.076);
  border-radius: 3%;
  width: 30%;
  margin-left: 35%;
  margin-top: 10%;
}

input {
  margin: 2%;
  margin-left: 5%;
  width: 40%;
  height: 22px;
  font-size: 105%;
}

input:last-child {
  margin-bottom: 5%;
  font-size: 100%;
}

label {
  display: inline-block;
  width: 35%;
  text-align: right;
}

button {
  border: 1px solid rgba(0, 255, 136, 0.029);
  border-radius: 5%;
  background-color: rgba(0, 255, 136, 0.213);
  padding: 1% 5%;
  margin-left: 40%;
  color: white;
  transition: 0.5s;
  margin-bottom: 5%;
  cursor: pointer;
  font-size: 105%;
}

button:hover {
  background-color: rgba(0, 255, 136, 0.604);
}
</style>