<template lang="pug">
  <div class="chatDisplay">
    <p class="chatDisplay__title">サンプル</p>
    <ul class="chatDisplay__talklist" v-for="(item,i) in sample">
      <li :class="item.type">
        <dl class="chatDisplay__speakerBox">
          <dt class="chatDisplay__speakerIcon"><img :src="item.icon" alt=""></dt>
          <dd class="chatDisplay__speakerContents">{{item.text}}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['sample']
  };
</script>

<style lang="stylus" scoped>
  @import "../../styles/utility/_all";
  .chatDisplay {}
  .chatDisplay__title {
    border-bottom: 1px solid #000;
  }
  .chatDisplay__talklist {
    @include clearfix();
    > li {
      width: 60%;
      position: relative;
      &.is-left {
        float: left;
      }
      &.is-right {
        float: right;
      }
    }
  }
  .chatDisplay__speakerBox {}
  .chatDisplay__speakerIcon {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 30px;
    > img {
      width: 50px;
      height: 50px;
    }
  }
  .chatDisplay__speakerContents {}
</style>
