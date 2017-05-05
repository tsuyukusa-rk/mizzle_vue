<template lang="pug">
  div#app()
    headerView()
    mainView()
    footerView()
</template>

<script>
  import headerView from './layout/header';
  import footerView from './layout/footer';
  import mainView from './layout/main';

  export default {
    components: {
      headerView: headerView,
      footerView: footerView,
      mainView: mainView
    },
    data () {
      return {};
    },
    methods: {}
  };
</script>

<style lang="stylus">
  // ファンデーション
  @import '../../styles/foundation/_all'
</style>
