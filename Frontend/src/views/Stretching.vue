<template>
    <b-container id="stretching-wrapper">
        <div class="position-absolute h-100 w-100 avatar-md bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 avatar-sm bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Stretching</h1>
                <p>
                    Стретчинг - растяжка с пользой для здоровья.
                    Стретчинг создан для улучшения связочно-мысшечного аппарата, во многих случаях помогает улучшить самочувствие
                </p>
                <p>
                    Благодаря стретчингу можно:
                </p>
                <ol>
                    <li>Уменьшить боли спины и шеи</li>
                    <li>Повысить свою природную грациозность</li>
                    <li>Вернуть красивую осанку и здоровые ноги</li>
                    <li>Стать супер гибкой</li>
                    <li>Снять стресс</li>
                    <li>Отвлечься от проблем сегодняшнего дня</li>
                    <li>Улучшить настроение и качество сна!</li>
                </ol>
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
        color: #b4a18a;
    }

    #stretching-wrapper .avatar-md, #stretching-wrapper .avatar-sm {
        background-color: #000000;
        min-height: 700px;
        left: 0;
    }
    #stretching-wrapper .avatar-md {
        background-position: right bottom;
        background-image: url("../assets/avatar.jpg");
        background-repeat: no-repeat;
    }

    #stretching-wrapper .avatar-sm {
        background-position: right bottom;
        background-image: url("../assets/avatar-retina.jpg");
        background-repeat: no-repeat;
        background-size: 400px 400px;
    }

    .content {
        height: 500px;
    }

</style>
