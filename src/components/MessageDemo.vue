<template>
  <div>
    <h1>Message 组件示例 </h1>
    <Button @click="open">MessageDemo</Button>
    <Message types="success" :message="message"
             v-model:messageVisible="messageVisible">
    </Message>

    <Button @click="open2">MessageDemo</Button>

  </div>
</template>
<script lang="ts">
import Message from '../lib/Message.vue';
import {ref} from 'vue';
import Button from '../lib/Button.vue';
import {openMessage} from '../lib/openMessage';

export default {
  components: {Button, Message},
  setup() {
    const message = '这是一条消息提示';
    const messageVisible = ref(false);
    const open = () => {
      messageVisible.value = true;
      setTimeout(() => {
        messageVisible.value = false;
      }, 2000);
    };
    const open2 = ()=>{
      openMessage({
        message: '这是一段信息',
        types:'success',
      })
      setTimeout(() => {
        messageVisible.value = false;
      }, 2000);
    }
    return {message, open,open2, messageVisible};
  }
};
</script>