<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
        <div class="content">
          <aside v-if="menuVisible">
            <h2>文档</h2>
            <ol>
              <li><router-link to="/doc/intro">介绍</router-link></li>
              <li><router-link to="/doc/install">安装</router-link></li>
              <li><router-link to="/doc/get-started">开始使用</router-link></li>
            </ol>
            <h2>组件</h2>
            <ol>
              <li>
                <router-link to="/doc/switch">Switch 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/button">Button 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/dialog">Dialog 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/tabs">Tabs 组件</router-link>
              </li>
              <li>
                <router-link to="/doc/input">Input 组件</router-link>
              </li>
            </ol>
          </aside>
            <main>
            <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';
export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return {menuVisible}
  }
}
</script>

<style lang="scss" scoped>
$color: #e44a09;
$red: #fd5d08;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background: linear-gradient(45deg, rgba(246, 239, 228, 1) 0%, rgba(246, 216, 193, 1) 58%, rgba(246, 212, 173, 1) 100%);
    border-bottom: 1px solid lightgrey;
    box-shadow: lightgrey 0 1px 8px;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  background: rgba(246, 239, 228, 1);
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    background: rgba(255, 255, 255, 0.9);
    padding: 28px 18px 16px;
  }
}
aside {
  background: rgba(255, 255, 255, 0.9);
  border-right: 1px solid #e5e3e3;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 82px 0 16px;
  height: 100%;
  z-index: 10;
  @media (max-width: 500px) {
    background: white;
  }
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-weight: 700;
  }
  > ol {
    > li {
      &:hover {
        color: $color;
      }
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        flex-grow: 1;
        border-right: 4px solid $red;
        background: lighten($red,40);
        box-shadow: 1px 0 0 lighten($red,40) ;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>