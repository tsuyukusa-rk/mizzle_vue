<template lang="pug">
  main.main()
    topView()
    contentsView()
    contentsView()
</template>

<script>
  import topView from '../../components/top';
  import contentsView from '../../components/contents';

  export default {
    components: { topView, contentsView },
    data () {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>

<style lang="stylus" scoped>
  .main
    width 100%
    height 100%
    position relative
</style>
