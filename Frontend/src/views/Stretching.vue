<template>
    <b-container>
        <div class="position-absolute h-100 w-100 avatar-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Stretching</h1>
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

    .content {
        height: 500px;
    }

    .avatar-md {
        background-position: right bottom;
        background-image: url("../assets/avatar.jpg");
        background-repeat: no-repeat;
        min-height: 800px;
        left: 0;
    }

    .avatar-sm {
        background-position: right bottom;
        background-image: url("../assets/avatar-retina.jpg");
        background-repeat: no-repeat;
        background-size: 400px 400px;
        min-height: 850px;
        left: 0;
        bottom: 0;
    }

</style>
