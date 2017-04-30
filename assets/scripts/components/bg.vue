<template lang="pug">
  div.bg()
    div.bg1()
      video.video(autoplay="autoplay" loop="loop")
        source(src="/movie/filmnoize.mp4")
      div.bg2()
</template>

<script>
  export default {
    components: {},
    data () {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style lang="stylus" scoped>
  .bg1
    background url(/images/top.jpg) no-repeat calc(100% - 15%) center #080808
    background-size auto 100%
    width 100%
    height 100vh
    position relative
    overflow hidden
    filter brightness(150%)
    &:before
      content ''
      display block
      background url(/images/top.jpg) no-repeat calc(100% - 15%) center #000
      background-size auto 100%
      width 100%
      height 100vh
      filter blur(0px) contrast(250%) brightness(130%)
      opacity 0.6
  .video
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto -100%
    opacity 0.4
    filter invert(100%)
  .bg2
    background-color rgba(0, 0, 0, 0.7)
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    margin auto
    box-shadow 0px 0px 150px -40px #fff inset
    &:before
      content ''
      display block
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      box-shadow 0px 0px 150px -40px #fff inset
    &:after
      content ''
      display block
      background url(/images/bg1.jpg) no-repeat center center #000
      background-size cover
      filter blur(50px) contrast(300%) brightness(100%)
      opacity 0.15
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto -100%
</style>
