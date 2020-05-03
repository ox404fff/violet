<template>
    <b-container id="index-wrapper">
        <div class="position-absolute h-100 w-100 avatar-wt-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-wt-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Кабатова Юлия</h1>
                <h5 align="center">Хореограф, педагог</h5>
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
    #index-wrapper {
        color: #151515;
    }

    .content {
        height: 500px;
    }


</style>
