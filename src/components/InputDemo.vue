<template>
  <div>
    <h1>Input 示例</h1>
    <Demo :component="Input1Demo" class="demo1"/>
    <Demo :component="Input2Demo"/>
    <Demo :component="Input3Demo"/>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Input1Demo from './Input/Input1.demo.vue';
import Input2Demo from './Input/Input2.demo.vue';
import Input3Demo from './Input/Input3.demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      Input1Demo,Input2Demo,Input3Demo
    };
  }
};
</script>

<style lang="scss" scoped>
.demo1 :deep(div){
  padding-left: 8px;
  > p {
    font-size: 14px;
    margin: 4px;
  }
  >.card {
    width: 180px;
    height: 40px;
    color: #2087ee;
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &.late {
      color: #0da702;
    }
  }
}
</style>