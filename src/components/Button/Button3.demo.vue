<demo>
不同等级
</demo>
<template>
  <div>
    <div>
      <Button>默认按钮</Button>
      <Button level="main">主要按钮</Button>
      <Button level="success">成功按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link" level="success">成功链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text" level="success">危险文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
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
