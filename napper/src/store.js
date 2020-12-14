import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { apiHost } from "@/main.js";
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.token = userData.token
            state.userId = userData.userId
        },
    },
    actions: {
        AutoLogin({commit}) {
            const token = window.$cookies.get('token')
            if (!token) {
                return
            }
            const userId = window.$cookies.get('userId')
            commit('authUser', {
                token: token,
                userId: userId
            })
        },
        login({ commit }, authData) {
            var body = { Username: authData.username, Password: authData.password };
            axios
                .post(apiHost + "/login", body, {
                    "Content-Type": "application/json",
                })
                .then((response) => {
                    if (response.status == 200) {
                        window.$cookies.set("token", response.data.token);
                        router.replace({ path: '/' });
                        commit('authUser', {
                            token: response.data.token,
                            userId: response.data.userId
                        });
                    }
                }).catch((e) => {
                    console.log(e);
                    //show exception under register
                });
        }

    },
    getters: {
        ifAuthenticated(state) {
            return state.token !== null
        }
    }

});