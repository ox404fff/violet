<template>
    <b-container id="child-wrapper">
        <div class="position-absolute h-100 w-100 avatar-wt-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-wt-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Ballet</h1>
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

    #child-wrapper {
        color: #151515;
    }

    .content {
        height: 500px;
    }

    .avatar-wt-md, .avatar-wt-sm {
        background-color: #a2a2a2;
        min-height: 850px;
        left: 0;
    }

    .avatar-wt-md {
        background-position: right bottom;
        background-image: url("../assets/avatar-white.jpg");
        background-repeat: no-repeat;
    }

    .avatar-wt-sm {
        background-position: right bottom;
        background-image: url("../assets/avatar-retina-white.jpg");
        background-repeat: no-repeat;
        background-size: 401px 294px;
    }

</style>
