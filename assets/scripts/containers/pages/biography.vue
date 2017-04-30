<template lang="pug">
  section.page()
    h2.pageTitle() Biography
    div.pageCoontents()
      |「侘び・寂び」などの世界観をテーマとした楽曲制作、弾き語りによるライブ活動を行なうソロアーティスト。
      br
      |主に、東京・神奈川にて活動。
      br
      |打ち込みなど交えた音源を制作したり、webの仕事をしているため、本サイトの制作なども行っている。
      br
      |1989年生まれの山羊座。
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
</style>
