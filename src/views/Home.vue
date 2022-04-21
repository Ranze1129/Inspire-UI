<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav class="topnav"/>
      <div class="banner">
        <h1>灵感 UI</h1>
        <h2>一个好看的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-read"></use>
      </svg>
    </div>

  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default{
    components:{Topnav },
}
</script>

<style lang="scss" scoped>
$red: #fd5d08;
$border-radius: 22px;
$color: #e44a09;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(245, 189, 155, 1) 0%, rgba(247, 170, 130, 1) 52%, rgba(247, 159, 106, 1) 100%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      color: white;
      margin: 0 8px;
      background: $red;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
::v-deep(.topnav){
    box-shadow:none;
}
</style>