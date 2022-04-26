<template>
  <div class="inspire-wrapper">
    <input
        :value="value || value === '' ? value : modelValue"
        type="text"
        :disabled="disabled"
        :readonly="readonly"
        @change="currentInput"
        @input="currentInput"
        @focus="lateInput"
        @blur="lateInput"
        :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder:{
      type: String,
    }
  },
  setup(props, context) {
    const {placeholder} = props
    const currentInput = (e: KeyboardEvent) => {
      context.emit('update:value', (e.target as HTMLInputElement).value);
    };
    const lateInput = (e: FocusEvent) => {
      context.emit('update:modelValue', (e.target as HTMLInputElement).value);
    };
    return {
      currentInput,
      lateInput,
      placeholder
    };
  },
};
</script>
<style lang="scss" scoped>
$height: 40px;
$border-color: #dcdfe6;
$border-color-hover: darken($border-color, 10);
.inspire-wrapper {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    outline: none;
    margin: 4px 0;
    &:hover {
      border-color: $border-color-hover;
    }
    &[readonly] {
      color: #8d8d8e;
    }
    &[disabled]{
      cursor: not-allowed;
      color: #a4a5a7;
    }
  }
}
</style>