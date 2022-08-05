<template>
<div class = 'flex-container'>
    <left-component></left-component>
    <right-component></right-component>
</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LeftComponent from './LeftComponent.vue';
import RightComponent from './RightComponent.vue';

@Options({
  components: {
    LeftComponent,RightComponent
  },
})
export default class Between extends Vue {
}
</script>
<style scoped>
.flex-container {
    display: flex;
    height: 30%
}
</style>