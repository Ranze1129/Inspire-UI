<template>
  <button @click="toggle"
          class="inspire-switch"
          :class="{'inspire-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.inspire-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #cbcdce;
  border-radius: $h/2;
  position: relative;
  z-index: 0;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: all 250ms;
  }
  &.inspire-checked {
    background: #19ade7;
    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.inspire-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}

</style>

