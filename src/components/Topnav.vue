<template>
  <div class="topnav">
    <div class="top">
      <svg v-if="toggleMenuButtonVisible"
           class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-inspire"></use>
        </svg>
        <p>灵感 UI</p>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
}
</script>

<style lang="scss" scoped>
$color: #e44a09;
.topnav {
  color: $color;
  display: flex;
  padding: 12px 26px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  justify-content: space-between;
  align-items: center;
  > .top{
    display: flex;
    align-items: center;
    justify-content: center;
    >a:hover {
      text-decoration: none;
    }
    >.logo {
      max-width: 6em;
      display: flex;
      align-items: center;
      >svg{
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }
    }
    > .toggleAside {
      width: 32px;
      height: 32px;
      transform: translateY(-2px);
      display: none;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      >a:hover {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 12px 16px;
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }

    >.top{
      flex-grow: 0.4;
      justify-content: space-between;
      >.toggleAside{ display: inline-block;}
    }
  }
}
</style>