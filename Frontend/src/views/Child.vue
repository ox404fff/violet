<template>
    <b-container id="child-wrapper">
        <div class="position-absolute h-100 w-100 bg d-none d-lg-block"></div>
        <div class="position-absolute h-100 w-100 bg d-sm-block d-md-block d-lg-none"></div>
        <b-row class="content" align-v="center">
            <b-col class="col-md-1 d-none d-md-block"/>
            <b-col class="col-md-7">
                <h1 align="center">Балет для детей</h1>
                <p>
                    <b>Балет для детей</b> - прекрасная возможность развить танцевальность, музыкальность, чувство ритма и творческие способности ребёнка.
                </p>
                <p>
                    <u>Плюсы от занятий:</u> развитие координации, прививается любовь к движению и к танцу, ребёнок учится передавать свои эмоции и чувства, приобрести уверенность и почувствовать себя принцессой или принцем так же поможет балет
                </p>
                <p>
                    Известно, что занятия сложнокоординированным физическим трудом - таким как балет помогают улучшить умственные способности
                </p>
                <p>
                    Ну и конечно главное!
                    Самые способные и желающие попасть на большую сцену - всегда этого добиваются.
                    Я сама начинала с детской хореографии с 6-ти лет !
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

    #child-wrapper {
        color: #151515;
    }

    #child-wrapper .content {
        height: 500px;
    }

</style>
