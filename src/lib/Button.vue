<template>
  <button class="inspire-button"
          :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="inspire-loadingIndicator"></span>
    <span v-if="loadingEnd" class="inspire-loadingEndIndicator">
      <svg>
        <use xlink:href="#icon-trues"></use>
      </svg>
    </span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingEnd: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`inspire-theme-${theme}`]: theme,
        [`inspire-size-${size}`]: size,
        [`inspire-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 6px;
$danger: rgb(245, 56, 56);
$grey: grey;
$success:rgb(103, 194, 58);
.inspire-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  margin: 2px 4px;
  //& + & {
  //  margin: 4px 8px;
  //}
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.inspire-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.inspire-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover, &:focus {
      background: lighten(white, 5%);;
    }
  }
  &.inspire-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }
  &.inspire-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.inspire-theme-button {
    &.inspire-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: lighten($blue, 10%);
        border-color: lighten($blue, 10%);
      }
    }
    &.inspire-level-danger {
      background: $danger;
      border-color: $danger;
      color: white;
      &:hover,
      &:focus {
        background: lighten($danger, 10%);
        border-color: lighten($danger, 10%);
      }
    }
    &.inspire-level-success {
      background: $success;
      border-color: $success;
      color: white;
      &:hover,
      &:focus {
        background: lighten($success, 10%);
        border-color: lighten($success, 10%);
      }
    }
  }
  &.inspire-theme-link {
    &.inspire-level-danger {
      color: $danger;
      &:hover,
      &:focus {
        color: lighten($danger, 10%);
      }
    }
    &.inspire-level-success {
      color: $success;
      &:hover,
      &:focus {
        color: lighten($success, 10%);
      }
    }
  }
  &.inspire-theme-text {
    &.inspire-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.inspire-level-danger {
      color: $danger;
      &:hover,
      &:focus {
        color: lighten($danger, 10%);
      }
    }
    &.inspire-level-success {
      color: $success;
      &:hover,
      &:focus {
        color: lighten($success, 10%);
      }
    }
  }
  &.inspire-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.inspire-theme-link, &.inspire-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .inspire-loadingIndicator {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: inspire-spin 1s infinite linear;
  }
  >.inspire-loadingEndIndicator {
    display: flex;
    align-items: center;
    >svg{
      width: 14px;
      height: 14px;
      font-size: 18px;
      display: inline-block;
      margin-right: 4px;
    }
  }
}
@keyframes inspire-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>