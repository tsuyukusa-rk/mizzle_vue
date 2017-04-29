<template lang="pug">
  div.top()
    div.bg1()
      video.video(autoplay="autoplay" loop="loop")
        source(src="/movie/filmnoize.mp4")
      div.bg2()
    div.contents()
      div.title()
        h1.logo()
          img( src="/images/logo.png" )
        p.caption()
          |東京都・神奈川県で音楽活動を行なうシンガーソングライター
          br
          |mizzleのオフィシャルサイト
    div.goNextPage( v-on:click="nextPage" )
</template>

<script>
  import anime from 'animejs';

  export default {
    components: {},
    data () {
      return {};
    },
    computed: {},
    methods: {
      nextPage () {
        const windowHeight = window.innerHeight;
        anime({
          targets: 'body',
          scrollTop: windowHeight,
          duration: 600,
          easing: 'easeOutCubic'
        });
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import "../../styles/lib/_animate"

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
  .contents
    position absolute
    top 0
    bottom 0
    left 18%
    right 22%
    margin auto
    color #fff
    &:before
      content ''
      background url(/images/pic1.jpg) no-repeat 0 0
      display block
      position absolute
      top 42%
      bottom 10%
      left 0
      right 250px
      margin auto
      transform rotate(15deg)
      background-size calc(100% - 25%)
      max-width 200px
      min-width 160px
      filter blur(0px) sepia(100%) opacity(40%) contrast(150%)
  .title
    position absolute
    top -130px
    bottom 0
    left 0
    right 0
    margin auto
    height calc(100% - 90%)
  .logo
    & > img
      max-width 170px
  .caption
    margin 20px 0 0
    line-height 1.5
  .goNextPage
    position absolute
    bottom 60px
    right 0
    left 0
    margin auto
    width 40px
    height 25px
    @extend .slideInDown
    @extend .animated
    animation-duration 1s
    &:hover
      &:before
        background-color #7e509c
      &:after
        border-color #fff
    &:before
      content ''
      display block
      position absolute
      top 0
      left calc(50% - 19px)
      width 40px
      height 25px
      background-color #fff
      border-radius 3px
      cursor pointer
      transition background-color .3s linear
    &:after
      content ''
      display block
      position absolute
      top 0
      left calc(50% - 7px)
      width 13px
      height 13px
      border-top 3px solid #333
      border-right 3px solid #333
      transform rotate(135deg)
      cursor pointer
      transition border-color .3s linear
</style>
