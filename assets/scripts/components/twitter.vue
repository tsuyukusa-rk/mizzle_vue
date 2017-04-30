<template lang="pug">
  article.twitter()
    a.twitter-timeline(
      href="https://twitter.com/tsuyukusa_rk"
      width="300"
      height="calc(100vh - 160px)"
      data-chrome="noheader nofooter transparent"
    ) @tsuyukusa_rkさんのツイート
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
  .twitter
    position absolute
    right 5%
    top 110px
    bottom 0
    z-index 1
    &:before
      content ''
      display block
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      height calc(100vh - 160px)
      background-color rgba(255, 255, 255, 0.5)
      z-index -1
</style>
