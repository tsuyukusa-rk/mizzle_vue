<template lang="pug">
  section.page()
    h2.pageTitle() Schedule
    div.pageCoontents()
      ul.schedule()
        li( v-for="item in schedule" )
          p.scheduleTittle() {{ item.date }}
            a( v-bind:href="item.url" target="_blank" ) {{ item.place }}
          ul.scheduleTime()
            li() open {{ item.time[0].open }}
            li() start {{ item.time[0].start }}
          p.scheduleTicket() ticket {{ item.ticket }}
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    components: {},
    data () {
      return {};
    },
    computed: {
      ...mapGetters([
        'schedule'
      ])
    },
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
  .schedule
    height 100%
    overflow scroll
    > li
      padding 15px
      &:nth-child(odd)
        background-color rgba(255, 255, 255, 0.15)
      &:nth-child(even)
        background-color rgba(170, 170, 170, 0.15)
  .scheduleTittle
    font-size 12px
    font-weight bold
    margin-bottom 5px
    > a
      text-decoration underline
      &:link
        color #fff
      &:visited
        color #fff
      &:hover
        color #fff
  .scheduleTime
    display flex
    flex-wrap wrap
    > li
      margin 0 0 0 10px
      &:first-child
        margin 0
</style>
