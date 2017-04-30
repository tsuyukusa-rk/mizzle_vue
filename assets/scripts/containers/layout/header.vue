<template lang="pug">
  header.header()
    nav.nav()
      ul.navList()
        li()
          router-link.hvr-shadow-radial( to="/" ) top
        li()
          router-link.hvr-shadow-radial( to="/biography/" ) biography
        li()
          router-link.hvr-shadow-radial( to="/discography/" ) discography
        li()
          router-link.hvr-shadow-radial( to="/schedule/" ) schedule
        li()
          router-link.hvr-shadow-radial( to="/songs/" ) songs
        li()
          router-link.hvr-shadow-radial( to="/contact/" ) contact
</template>

<script>
  export default {
    components: {},
    data () {
      return {};
    },
    watch: {},
    methods: {}
  };
</script>

<style lang="stylus" scoped>
  .header
    position absolute
    top 35px
    left 6%
    right 5%
    z-index 1
  .nav
    color #fff
  .navList
    display flex
    justify-content space-between
    border-right 1px solid #fff
    & > li
      border-left 1px solid #fff
      width calc(100% / 6)
      & > a
        display block
        text-align center
        padding 10px
        color #fff
        &:link
          color #fff
        &:visited
          color #fff
        &:hover
          color #fff
        &.hvr-shadow-radial
          vertical-align middle
          transform perspective(1px) translateZ(0)
          box-shadow 0 0 1px transparent
          position relative
          &:before
          &:after
            pointer-events none
            position absolute
            content ''
            left 0
            width 100%
            box-sizing border-box
            background-repeat no-repeat
            height 7px
            opacity 0
            transition-duration .2s
            transition-property opacity
          &:before
            bottom 100%
            background radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.9) 0%, transparent 80%)
          &:after
            top 100%
            background radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.9) 0%, transparent 80%)
          &:hover:before
          &:hover:after
          &.router-link-exact-active:before
          &.router-link-exact-active:after
            opacity 1
</style>
