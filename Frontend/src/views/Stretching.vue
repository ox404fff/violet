<template>
    <b-container id="stretching-wrapper">
        <div class="position-absolute h-100 w-100 avatar-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Stretching</h1>
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
    #stretching-wrapper {
        color: #b4a18a;
    }
    #stretching-wrapper h1 {
        color: #bd133a;
    }
    .content {
        height: 500px;
    }

</style>
