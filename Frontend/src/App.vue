<template>
    <b-container fluid class="h-100" id="app" @click="menuHide">
        <div class="row">

            <router-view></router-view>

            <div class="nav h-100 d-none d-md-block">
                <div class="big-menu">
                    <div class="menu-items">
                        <router-link :to="{ name: 'index' }"><div class="light"><img src="./assets/food.svg" alt="Главная"/></div></router-link>
                        <router-link :to="{ name: 'ballet' }"><div class="light"><img src="./assets/ballet.svg" alt="Боди-балет"/></div></router-link>
                        <router-link :to="{ name: 'stretching' }"><div class="dark"><img src="./assets/dancer.svg" alt="Стретчинг"/></div></router-link>
                        <router-link :to="{ name: 'child' }"><div class="light"><img src="./assets/child.svg" alt="Балет для детей"/></div></router-link>
                    </div>
                </div>
                <div class="social">
                    <a href="https://instagram.com/juliya_kabatova"><img src="./assets/instagram.svg" alt="Instagram"/></a>
                    <a href="https://www.facebook.com/ykabatova"><img src="./assets/fb.svg" alt="Facebook"/></a>
<!--                    <a href="https://vk.com/juliyakabatova"><img src="./assets/vk.svg" alt="Vkontakte"/></a>-->
                </div>
            </div>

            <div class="menu-b h-100 w-75 bg-dark" v-if="menu.opened" @click="$event.stopPropagation()"></div>
            <div class="menu h-100 w-75" v-if="menu.opened" @click="$event.stopPropagation()">
                <div class="menu-items" @click="menuHide">
                    <router-link :to="{ name: 'index' }">Главная</router-link>
                    <router-link :to="{ name: 'ballet' }">Боди-балет</router-link>
                    <router-link :to="{ name: 'stretching' }">Стретчинг</router-link>
                    <router-link :to="{ name: 'child' }">Балет для детей</router-link>
                </div>
                <div class="social w-100">
                    <a href="https://instagram.com/juliya_kabatova"><img src="./assets/instagram.svg" alt="Instagram"/></a>
                    <a href="https://www.facebook.com/ykabatova"><img src="./assets/fb.svg" alt="Facebook"/></a>
<!--                    <a href="https://vk.com/juliyakabatova"><img src="./assets/vk.svg" alt="Vkontakte"/></a>-->
                    <div class="e-mail">ykabatova@yandex.ru</div>
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
    export default {
        name: 'app',
        data() {
            return {
                menu: {
                    opened: false
                }
            }
        },
        components: {
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
    /**
     * Backgrounds
     */
    .avatar-wt-md, .avatar-wt-sm {
        background-color: lightgrey;
        min-height: 700px;
        left: 0;
    }

    .avatar-wt-md {
        background-position: right bottom;
        background-image: url("./assets/avatar-retina-white.jpg");
        background-repeat: no-repeat;
    }

    .avatar-wt-sm {
        background-position: right bottom;
        background-image: url("./assets/avatar-retina-white.jpg");
        background-repeat: no-repeat;
        background-size: 282px 401px;
    }

    /**
     * Styles
     */
    #app {
        min-width: 400px;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
    }

    .nav {
        position: absolute;
        width: 80px;
        background-color: #242424;
        min-height: 700px;
    }

    .nav-sm {
        position: absolute;
        width: 60px;
        height: 60px;
    }

    .menu-b {
        position: absolute;
    }

    .menu {
        position: absolute;
        padding-top: 70px;
    }

    .nav-menu-open, .nav-menu-close {
        width: 60px;
        height: 60px;
        margin: 10px;
    }

    .nav-menu-open {
        color: #422827;
    }

    .nav-menu-close {
        color: #b4a18a;
    }

    .menu .menu-items {
        margin: 10px;
    }

    .menu .menu-items {
        margin: 10px 0;
        border-bottom: 1px solid #b4a18a;
    }

    .nav .menu-items img{
        margin: 15px;
    }

    .nav a.router-link-exact-active div.light {
        background-color: lightgrey;
    }

    .nav a.router-link-exact-active div.dark {
        background-color: #000000;
    }

    .menu .menu-items a {
        display: block;
        padding: 15px;
        text-align: center;
        font-size: x-large;
        border-style: solid;
        border-color: #b4a18a;
        border-width: 1px 0 0;
        color: #b4a18a;
    }

    .menu .menu-items a:hover, .menu .menu-items a.router-link-exact-active {
        color: white;
        background-color: #151515;
        text-decoration: none;
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

    .big-menu {
        padding-top: 15px;
    }
</style>
