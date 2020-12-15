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
        user: null,
        errorMessage: ''
    },
    mutations: {
        authUser(state, userData) {
            state.token = userData.token
            state.userId = userData.userId
            state.errorMessage = ''
        },
        clearAuth(state) {
            state.token = null
            state.userId = null
            state.errorMessage = ''
        },
        setError(state, error) {
            state.errorMessage = error.Message
        }
    },
    actions: {
        Register({ commit }, data) {
            var body = {
                Username: data.username,
                Email: data.email,
                Password: data.password,
            };
            axios
                .post(apiHost + "/register", body, {
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
                })
                .catch((e) => {
                    commit('setError', {
                        error: e.response.data.error
                    });
                });
        },
        AutoLogin({ commit }) {
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
        Login({ commit }, authData) {
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
                })
                .catch((e) => {
                    commit('setError', {
                        Message: e.response.data.error
                    });
                });
        },
        Logout({ commit }) {
            commit('clearAuth');
            window.$cookies.remove('token');
            window.$cookies.remove('userId');
            router.replace('/');
        }
    },
    getters: {
        ifAuthenticated(state) {
            return state.token !== null
        },
        errorMessage(state) {
            return state.errorMessage;
        },
        ifError(state) {
            return state.errorMessage !== '';
        }
    }

});