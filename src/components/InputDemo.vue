<template>
  <div>
    <Input v-model:value="current" v-model="late"
           placeholder="请输入内容" class="changeInput"></Input>
    <div class="showValue">
      <p>input事件立刻触发：</p>
      <div class="card">{{ current }}</div>
      <p>input事件延后触发：</p>
      <div class="card late">{{ late }}</div>
    </div>
    <Input value="禁用状态" disabled></Input>

    <Input value="只读内容" readonly></Input>
  </div>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import {ref} from 'vue';

export default {
  components: {
    Input,
  },
  setup() {
    const current = ref("我是一个 Input 组件");
    const late = ref("我不是 Input 组件");
    return {current, late};
  },
}
</script>

<style lang="scss" scoped>

.changeInput{
  margin-left: 8px;
}
.showValue {
  > p {
    font-size: 14px;
    padding-left: 8px;
    margin: 4px;
  }
  > .card {
    width: 180px;
    height: 40px;
    color: #2087ee;
    font-size: 14px;
    padding: 10px;
    margin-left: 8px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    &.late{
      color: #0da702;
    }
  }
}
</style>