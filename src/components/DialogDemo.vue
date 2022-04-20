<template>
  <div>
    <hi>示例1</hi>
    <Button @click="toggle">toggle</Button>
    <Dialog :visible="x"/>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    return {x, toggle};
  }
};

</script>