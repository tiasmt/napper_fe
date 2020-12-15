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
        username: null,
        errorMessage: ''
    },
    mutations: {
        authUser(state, userData) {
            state.token = userData.token;
            state.userId = userData.userId;
            state.username = userData.username;
            state.errorMessage = '';
        },
        clearAuth(state) {
            state.token = null;
            state.userId = null;
            state.username = null,
            state.errorMessage = '';
        },
        setError(state, error) {
            state.errorMessage = error.Message
        },
        clearError(state) {
            state.errorMessage = ''
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
                        window.$cookies.set("userId", response.data.id);
                        window.$cookies.set("username", response.data.username);
                        router.replace({ path: '/' });
                        commit('authUser', {
                            token: response.data.token,
                            userId: response.data.id,
                            username: response.data.username
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
            const userId = window.$cookies.get('userId');
            const username = window.$cookies.get('username');
            commit('authUser', {
                token: token,
                userId: userId,
                username: username
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
                            userId: response.data.id,
                            username: response.data.username,
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
        },
        ClearError({commit}) {
            commit('clearError');
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
        },
        username(state) {
            return state.username;
        }
    }

});