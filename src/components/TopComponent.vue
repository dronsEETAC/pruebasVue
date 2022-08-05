<template>
<div class = 'myStyle'>
    <div>
        <b-button @click="showParametersPopUp = !showParametersPopUp" style = "margin: 1%; width:30%" variant="danger">Parameters</b-button>
        <parameters-component v-if="showParametersPopUp" @close="closeParameters">
        </parameters-component>
        <b-button style = "margin: 1%; width:30%" variant="success">Get value</b-button>
        <b-button style = "margin: 1%; width:30%" variant="warning">Yellow</b-button>
    </div>
</div>
</template>
<script>
import ParametersComponent from "./ParametersComponent.vue"

export default {
    components: {ParametersComponent},
    data() {
        return {
            showParametersPopUp: false,
        }
    },
    methods: {
        closeParameters() {
           this.showParametersPopUp= false
        }
    }
}
</script>
<style scoped>
.myStyle {
    background-color: orange;
    color: black;
    margin:1%;
    height:30%;
    padding: 1%
}
.b-button {
    margin: 10%
}
</style>