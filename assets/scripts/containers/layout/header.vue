<template lang="pug">
  header.header()
    nav.nav()
      ul.navList()
        li()
          router-link( to="/" ) top
        li()
          router-link( to="/biography/" ) biography
        li() discography
        li() live schedule
        li() songs
        li() contact
</template>

<script>
  export default {
    components: {}
  };
</script>

<style lang="stylus" scoped>
  .header
    position absolute
    top 50px
    left 6%
    color #fff
    z-index 1
  .navList
    display flex
    & > li
      border-left 1px solid #fff
      padding 5px 10px
      &:first-child
        border none
        padding-left 0
</style>
