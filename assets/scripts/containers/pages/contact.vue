<template lang="pug">
  section.page()
    h2.pageTitle() Contact
    div.pageCoontents()
      address.address()
        |チケットのご予約や、liveの出演依頼などにつきましては
        br()
        |お名前、ご連絡先、ご用件を明記の上、以下よりお問い合わせください。
        br()
        br()
        |twitter：<a href="https://twitter.com/tsuyukusa_rk" >https://twitter.com/tsuyukusa_rk</a>
        br()
        |Eメール：tsuyukusa.contact@gmail.com
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
  .page
    position absolute
    top 110px
    left 6%
    right calc(300px + 5%)
    border-right 1px solid #fff
    margin-right 50px
    margin-bottom 50px
    padding-right 50px
  .pageTitle
    color #fff
    font-size 20px
    &:first-letter
      font-size 36px
  .pageCoontents
    color #fff
    margin 20px 0 0
    line-height 1.6
    height calc(100% - 56px)
  .address
    font-style normal
    & a
      text-decoration underline
      &:link
        color #fff
      &:visited
        color #fff
      &:hover
        color #fff
</style>
