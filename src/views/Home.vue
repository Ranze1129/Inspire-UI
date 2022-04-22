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
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-read"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
  clip-path: ellipse(80% 60% at 50% 38%);
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      @media (max-width: 400px) {
        width: 380px;
        margin: 16px 2px 16px 8px;
      }
      width: 400px;
      margin: 16px 0;
      padding-left: 4px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
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