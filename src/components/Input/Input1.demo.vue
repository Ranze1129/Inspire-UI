<demo>
常规使用
</demo>
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
  </div>
</template>

<script lang="ts">
import Input from '../../lib/Input.vue'
import {ref} from 'vue'
// 使用时请 import Input from "inspire-ui-ranze";
export default {
  components: {Input},
  setup() {
    const current = ref("我是一个 Input 组件");
    const late = ref("我不是 Input 组件");
    return {current, late};
  },
}
</script>
