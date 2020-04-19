<template>
    <b-container fluid class="h-100" id="app" @click="menuHide">
        <div class="row">
            <div class="position-absolute h-100 w-100 avatar-md bg d-none d-md-block"></div>
            <div class="position-absolute h-100 w-100 avatar-sm bg d-sm-block d-md-none"></div>

            <div class="nav h-100 d-none d-md-block">
                <div class="social">
                    <a href="https://instagram.com/juliya_kabatova"><img src="./assets/instagram.svg" alt="Instagram"/></a>
                    <a href="https://www.facebook.com/ykabatova"><img src="./assets/fb.svg" alt="Facebook"/></a>
                    <a href="https://vk.com/juliyakabatova"><img src="./assets/vk.svg" alt="Vkontakte"/></a>
                </div>
            </div>
            <b-container>
                <b-row align-v="start" class="d-none d-md-block">
                    <b-col cols="12" class="links" align="right">
                        <div class="menu-items">
                            <span>Ballet</span>
                            <span>About</span>
                            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GHLNUKH7TEJMQ&source=url">
                                Donate
                            </a>
                            <span class="e-mail">julia@violet.run</span>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="center" align-v="center">
                    <b-col class="col-md-1 d-none d-md-block" style="background-color: red"/>
                    <b-col class="col-md-7">
                        <h1 align="center">Кабатова Юлия</h1>
                        <h5 align="center">Я профессиональная балерина.</h5>
                        <div align="center">Работала и работаю в ведущих театрах Санкт-Петербурга:</div>
                        <div align="center">Мариинский театр, театр имени Л. Якобсона</div>
                        <div align="center">театр имени Л. Якобсона</div>
                        <div align="center">Санкт-Петербургский Фестиваль балета.</div>
                        <div align="center">Давала мастер-классы по балету + развитию данных в Испании.</div>
                        <div align="center">За 3 недели мы подготовили и показали гала-концерт.</div>
                    </b-col>
                </b-row>
            </b-container>
            <div class="menu-b h-100 w-75 bg-dark" v-if="menu.opened" @click="$event.stopPropagation()"></div>
            <div class="menu h-100 w-75" v-if="menu.opened" @click="$event.stopPropagation()">
                <div class="menu-items">
                    <div>Ballet</div>
                    <div>About</div>
                    <div>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GHLNUKH7TEJMQ&source=url">
                            Donate
                        </a>
                    </div>
                </div>
                <div class="social w-100">
                    <a href="https://instagram.com/juliya_kabatova"><img src="./assets/instagram.svg" alt="Instagram"/></a>
                    <a href="https://www.facebook.com/ykabatova"><img src="./assets/fb.svg" alt="Facebook"/></a>
                    <a href="https://vk.com/juliyakabatova"><img src="./assets/vk.svg" alt="Vkontakte"/></a>
                    <div class="e-mail">julia@violet.run</div>
                </div>
            </div>
            <div class="nav-sm d-sm-block d-md-none d-lg-none">
                <b-icon-list class="nav-menu-open" v-if="!menu.opened" @click="menuToggle($event)"/>
                <b-icon-x class="nav-menu-close" v-if="menu.opened" @click="menuToggle($event)"/>
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
        menuToggle(event) {
            event.stopPropagation();
            this.menu.opened = !this.menu.opened;
        },
        menuHide() {
            this.menu.opened = false;
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


    .nav-sm {
        position: absolute;
        width: 60px;
        height: 60px;
    }

    .menu-b {
        position: absolute;
        opacity: 0.9;
    }

    .menu {
        position: absolute;
        padding-top: 50px;
    }

    .nav-menu-open, .nav-menu-close {
        width: 40px;
        height: 40px;
        margin: 10px;
    }

    .nav-menu-close {
    }

    .menu-items {
        margin: 10px;
    }
    .menu .menu-items {
        margin: 10px 0;
        border-bottom: 1px solid #b4a18a;
    }

    .menu .menu-items div {
        padding: 15px;
        text-align: center;
        font-size: xx-large;
        border-style: solid;
        border-color: #b4a18a;
        border-width: 1px 0 0;
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

    .nav .social {
        height: 200px;
        bottom: 0;
        position: absolute;
    }

    .menu .social {
        height: 100px;
        bottom: 0;
        position: absolute;
        text-align: center;
    }

    .menu .social img {
        width: 40px;
        height: 40px;
        margin: 15px 0 0 15px;
    }

    .nav img {
        margin: 0 15px 15px 15px;
    }

    .links span, .links a {
        padding: 0 15px;
    }

    .e-mail {
        color: #e9d842;
    }

    .menu .e-mail {
        padding-top: 10px;
        color: white;
    }
</style>
