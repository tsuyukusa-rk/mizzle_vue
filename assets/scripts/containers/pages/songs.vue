<template lang="pug">
  section.page()
    h2.pageTitle() Songs
    div.pageCoontents()
      songsListView()
</template>

<script>
  import songsListView from '../../components/songsList';

  export default {
    components: { songsListView },
    data () {
      return {};
    },
    computed: {},
    watch: {},
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
</style>
