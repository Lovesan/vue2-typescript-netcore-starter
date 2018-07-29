<template>
    <div class="container-fluid">
        <b-card no-body class="m-5">
            <b-tabs pills card vertical>
                <b-tab title="Hello, world!" active>
                    <hello :name="'World'" :initialEnthusiasm="1"></hello>
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

    @Component
    export default class App extends Vue {

    }
</script>