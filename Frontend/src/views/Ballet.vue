<template>
    <b-container id="ballet-wrapper">
        <div class="position-absolute h-100 w-100 avatar-wt-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-wt-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content">
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

    #ballet-wrapper .content {
        margin-top: 100px;
        height: 500px;
    }


</style>
