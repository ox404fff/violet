<template>
    <b-container id="ballet-wriper">
        <div class="position-absolute h-100 w-100 avatar-wt-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-wt-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Боди - балет.</h1>
                <p>
                     Это балет, адаптированный для любителей балета. Да теперь балет доступен для всех. Вы можете, благодаря этим занятиям обрести красивую осанку, стройные ноги и уверенность в себе. Боди балет - это Новый вид фитнеса. Прорабатываются мышцы всего тела!
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
    name: 'Index',
}
</script>

<style>
    #ballet-wrapper {
        color: #151515;
    }
    h1 {
        color: #bd133a;
    }
    .content {
        height: 500px;
    }

    .avatar-wt-md, .avatar-wt-sm {
        background-color: #a2a2a2;
    }

    .avatar-wt-md {
        background-position: right bottom;
        background-image: url("../assets/avatar-white.jpg");
        background-repeat: no-repeat;
        min-height: 800px;
        left: 0;
    }

    .avatar-wt-sm {
        background-position: right bottom;
        background-image: url("../assets/avatar-retina-white.jpg");
        background-repeat: no-repeat;
        background-size: 401px 294px;
        min-height: 850px;
        left: 0;
        bottom: 0;
    }

</style>
