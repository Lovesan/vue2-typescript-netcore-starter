<template>
    <div class="hello">
        <div class="row">
            <div class="col-md-3">
                <b-button size="lg" :block="true" variant="primary" @click="toggle">{{showLabel}} Hello component</b-button>
            </div>
        </div>
        <div class="row my-2" v-show="!hidden">
            <div class="col-md-3">
                <b-alert class="font-weight-bold text-center" variant="success" show>Hello {{name}}{{exclamationMarks}}</b-alert>
            </div>
        </div>
        <div class="row" v-show="!hidden">
            <div class="col-md-3">
                <b-button size="lg" @click="decrement" variant="success">-</b-button>
                <b-button class="float-right" size="lg" @click="increment" variant="success">+</b-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Hello.ts">
</script>

<style lang="scss">
    .hello {
        font-family: "Lato", sans-serif;
    }
</style>