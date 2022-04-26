<demo>
禁用状态
</demo>
<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
//使用时请 import Button from "inspire-ui-ranze";
export default {
  components: {
    Button
  }
}
</script>