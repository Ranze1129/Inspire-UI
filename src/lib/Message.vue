<template>
  <template v-if="messageVisible">
    <Teleport to="body">
      <div>
        <transition name="inspire-message">
          <div class="inspire-message" :class="classes">
            <svg v-if="types='main'">
              <use xlink:href="#icon-tips"></use>
            </svg>
            {{ message }}
          </div>
        </transition>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import {computed, onMounted, ref} from 'vue';
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    types: {
      type: String,
      default: 'normal'
    },
    message: {
      type: String,
      default: '这是一条消息提示'
    },
    messageVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {types, message,messageVisible} = props;
    const close = () => {
      context.emit('update:messageVisible', false);
    };
    const classes = computed(() => {
      return {
        [`inspire-types-${types}`]: types,
      };
    });

    return {classes, open, close, message, types};
  }
};
</script>

<style lang="scss">
.inspire-message {
  padding: 10px 14px;
  width: 380px;
  position: fixed;
  left: 50%;
  top: 20px;
  background: #edf2fc;
  color: #909399;
  z-index: 100;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  transition: opacity .3s, transform .4s, top .4s;
  &.inspire-types-normal {
    background: #edf2fc;
    color: #909399;
  }
  &.inspire-types-success {
    background: #f0f9eb;
    color: #67c26d;
  }
  > svg {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 6px;
  }
}
.inspire-message-enter-active, .inspire-message-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%)
}

</style>