<demo>
不同尺寸
</demo>
<template>
  <div>
    <div>
      <Button size="big">大型按钮</Button>
      <Button>默认按钮</Button>
      <Button size="small">小型按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">大型按钮</Button>
      <Button theme="link">默认按钮</Button>
      <Button size="small" theme="link">小型按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">大型按钮</Button>
      <Button theme="text">默认按钮</Button>
      <Button size="small" theme="text">小型按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>