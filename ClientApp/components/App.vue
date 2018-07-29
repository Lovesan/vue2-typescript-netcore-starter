<template>
    <div class="container-fluid">
        <b-card no-body class="m-5">
            <b-tabs pills card vertical>
                <b-tab title="Hello, world!" active>
                    <Hello :name="'World'" :initialEnthusiasm="1"></Hello>
                </b-tab>
                <b-tab title="TODO">

                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Hello from "./Hello/Hello.vue";

    @Component({ components: {Hello} })
    export default class App extends Vue {

    }
</script>