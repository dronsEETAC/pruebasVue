<template>
  <div v-if="!connected">
        <b-button style = "margin: 1%; width:90%"  @click = "connected = !connected"  variant="danger">Connect</b-button>
    </div>
     <div v-if="connected">
        <b-button style = "margin: 1%; width:90%" @click = "connected = !connected" block variant="primary">Disconnect</b-button>
  </div>

  <div v-if="connected" style = "height:900px;   border: 1px solid #4CAF50;">
    <top-component></top-component>
    <between-component></between-component>
    <bottom-component></bottom-component>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TopComponent from './components/TopComponent.vue';
import BetweenComponent from './components/BetweenComponent.vue';
import BottomComponent from './components/BottomComponent.vue';



@Options({
  components: {
    TopComponent,BetweenComponent,BottomComponent
  },
})

export default class App extends Vue {
    data() {
        return {
            connected: false,
        }
    }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
