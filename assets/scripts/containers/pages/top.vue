<template lang="pug">
  section.page()
    h1.logo()
      img( src="/images/logo.png" )
    p.caption()
      |東京都・神奈川で活動するシンガーソングライター
      br
      |mizzleのオフィシャルサイト
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
  @import "../../../styles/lib/_animate"

  .page
    position absolute
    top 0
    bottom 0
    left 18%
    right 22%
    height calc(100% - 90%)
    color #fff
    width 320px
    margin auto 0
    &:before
      content ''
      background url(/images/pic1.jpg) no-repeat 0 0
      display block
      position absolute
      top 0
      bottom 0
      right 0
      margin auto
      transform rotate(15deg)
      background-size calc(100% - 25%)
      max-width 200px
      min-width 160px
      height 200px
      filter blur(0px) sepia(100%) opacity(40%) contrast(150%)
  .logo
    position relative
    z-index 1
    & > img
      max-width 170px
  .caption
    position relative
    z-index 1
    margin 20px 0 0
    line-height 1.5
</style>
