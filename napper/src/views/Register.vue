<template>
  <div>
    <navbar></navbar>
    <form class="register-form" action="register">
      <div class="container">
        <h1>Register</h1>
        <label for="email">email</label>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          id="email"
          required
        />
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          id="username"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          id="password"
          required
        />
      </div>
      <button v-on:click="Register">Submit</button>
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
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {


    Register() {
          var username = "test";
          var password = "testpass";
          var email = "testemail";
      axios.post(apiHost + "/register", {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
        {
          data : {
                      "Username": username,
                      "Password": password,  
                      "Email": email       
          }
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
.register-form {
  border: 1px solid rgba(0, 255, 136, 0.029);
  background-color: rgba(0, 255, 136, 0.076);
  border-radius: 5%;
  width: 40%;
  margin-left: 30%;
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