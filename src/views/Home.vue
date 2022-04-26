<template>
  <div class="background">
    <div class="topnavAndBanner">
      <Topnav class="topnav"/>
      <div class="banner">
        <h1>灵感 UI</h1>
        <h2>发挥你的灵感，展现不一样的世界</h2>
        <p class="actions">
          <a href="https://github.com/Ranze1129/Inspire-UI">GitHub</a>
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
          <p>源代码采用 TypeScript 书写</p>
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
.topnavAndBanner{
  background: linear-gradient(145deg, rgba(246,239,228,1) 0%, rgba(246,216,193,1) 58%, rgba(246,212,173,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
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
        grid-area: text;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 100px  0 38px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >h2{
    padding: 10px 0 0 0;
    margin: 0 10px;
    color: #ff7c46;
  }
  > .actions {
    padding:56px 8px  0;
    a {
      color: white;
      margin: 0 8px;
      background: $red;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
        background: #f54a07;
      }
    }
  }
}
:deep(.topnav){
    box-shadow:none;
}
</style>