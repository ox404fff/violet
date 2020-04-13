<template>
    <b-container fluid class="h-100" id="app">
        <div class="row">
            <div class="position-absolute h-100 w-100 avatar-md bg d-none d-md-block"></div>
            <div class="position-absolute h-100 w-100 avatar-sm bg d-sm-block d-md-none"></div>

            <div class="nav h-100 d-none d-md-block">
                <div class="social">
                    <a href="https://www.instagram.com/"><img src="./assets/instagram.svg" alt="Instagram"/></a>
                    <a href="https://www.facebook.com/"><img src="./assets/fb.svg" alt="Facebook"/></a>
                    <a href="https://vk.com/"><img src="./assets/vk.svg" alt="Vkontakte"/></a>
                </div>
            </div>
            <div class="nav-sm d-sm-block d-md-none d-lg-none">
                <b-icon-list class="nav-menu" @click="menuToggle"/>
            </div>
            <b-container>
                <b-row align-v="start">
                    <b-col cols="12" class="links" align="right">
                        <div style="padding: 10px">
                            <span>Ballet</span>
                            <span>About</span>
                            <span class="e-mail">julia@violet.run</span>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="center" align-v="center">
                    <b-col class="col-md-8">
                        <h1 align="center">Кабатова Юлия</h1>
                        <h2 align="center">Самая прекрастная</h2>
                        <h3 align="center">Суперзвезда и супермодель</h3>
                        <h4 align="center">Мирового уровня</h4>
                        <h4 align="center">
                            <b-icon-star-fill/>
                            <b-icon-star-fill/>
                            <b-icon-star-fill/>
                            <b-icon-star-fill/>
                            <b-icon-star-fill/>
                        </h4>
                    </b-col>
                </b-row>
            </b-container>
            <div class="menu h-100 w-75" v-if="menu.opened">
                <b-icon-list class="nav-menu" @click="menuToggle"/>
            </div>
        </div>
    </b-container>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import NavBar from './components/NavBar.vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
    name: 'App',
    data() {
        return {
            menu: {
                opened: false
            }
        }
    },
    components: {
        // NavBar
    },
    methods: {
        menuToggle() {
            this.menu.opened = !this.menu.opened;
        }
    }
}
</script>

<style>
    #app {
        min-width: 400px;
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: #000000;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #b4a18a;
        text-align: left;
    }

    .center {
        height: 500px;
    }

    .nav {
        position: absolute;
        width: 80px;
        background-color: #242424;
        min-height: 800px;
    }

    .nav img {
        margin: 0 15px 15px 15px;
    }

    .nav .social {
        height: 200px;
        bottom: 0;
        position: absolute;
    }
    .nav-sm {
        position: absolute;
        width: 60px;
        height: 60px;
    }

    .menu {
        position: absolute;
        background-color: grey;
        opacity: 50%;
    }

    .nav-menu {
        width: 40px;
        height: 40px;
        margin: 10px;
    }

    .avatar-md {
        background-position: right bottom;
        background-image: url("./assets/avatar.jpg");
        background-repeat: no-repeat;
        min-height: 800px;
    }

    .avatar-sm {
        background-position: right bottom;
        background-image: url("./assets/avatar-retina.jpg");
        background-repeat: no-repeat;
        background-size: 400px 400px;
        min-height: 850px;
    }

    .links {
        text-decoration: underline;
    }

    .links span {
        padding: 0 15px;
    }

    .e-mail {
        color: #e9d842;
    }
</style>
