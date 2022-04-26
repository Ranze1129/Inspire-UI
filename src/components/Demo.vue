<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"/>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>
    <div class="demo-actions">
      <Button v-if="codeVisible" @click="hideCode" theme="text">▲ 隐藏代码</Button>
      <Button v-else @click="showCode" theme="text">▼ 显示代码</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;
export default {
  props: {
    component: Object
  },
  components: {
    Button
  },
  setup(props) {
    const html = computed(() => {
      // @ts-ignore
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const codeVisible = ref(false);
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    return {Prism, html, codeVisible, showCode,hideCode};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    border-top: 1px dashed $border-color;
    display: flex;
    justify-content: center;
    align-items: center;
    > Button {
      padding: 22px 16px;
      color: #b6b4b4;
      flex-grow: 1;
      background: transparent;
      &:hover {
        color: #40a9ff;
        background: #f9fafc;
      }
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      background: #f1eeee;
    }
  }
}
</style>