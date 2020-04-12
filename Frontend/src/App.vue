<template>
    <div class="h-100 min-vw-100">
        <div class="position-absolute h-100 w-100 avatar-md d-none d-md-block"></div>
        <div class="position-absolute h-100 w-100 avatar-sm d-md-none d-sm-block"></div>
        <div class="nav h-100 d-none d-md-block"></div>
        <b-container fluid id="app" class="h-100">
            <b-row align-v="start" class="links">
                <b-col/>
                <b-col cols="2" class="p-5">
                    Balet
                </b-col>
                <b-col cols="2" class="p-5">
                    About
                </b-col>
                <b-col cols="2" class="p-5 e-mali">
                    julia@violet.run
                </b-col>
                <b-col cols="1" class="p-5 e-mali">
                    )
                </b-col>
            </b-row>
            <b-row class="center" align-v="center">
                <b-col cols="12" md="8">
                    <h1 align="center">Основной текст</h1>
                    <h2 align="center">Какое - то описание</h2>
                    <h3 align="center">еще меньше буквы</h3>
                    <h4 align="center">еще меньше буквы</h4>
                    <h5 align="center">еще меньше буквы</h5>
                </b-col>
                <b-col cols="12" md="4">

                </b-col>
            </b-row>
        </b-container>
    </div>
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
  components: {
    // NavBar
  }
}
</script>

<style>
    #app {
        min-width: 478px;
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
        color: rgba(255, 255, 255, 0.5);
        text-align: left;
    }

    .center {
        height: 600px;
    }

    .nav {
        position: absolute;
        width: 80px;
        background-color: #242424;
    }

    .avatar-md {
        background-position: right bottom;
        background-image: url("./assets/avatar.jpg");
        background-repeat: no-repeat;
    }

    .avatar-sm {
        background-position: center bottom;
        background-image: url("./assets/avatar-small.jpg");
        background-repeat: no-repeat;
    }

    .links {
        text-decoration: underline;
    }

    .e-mali {
        color: #e9d842;
    }
</style>
