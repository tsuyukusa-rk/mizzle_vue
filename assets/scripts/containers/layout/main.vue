<template lang="pug">
  main.main()
    bgView()
    div.page( ref="page" )
      div.pageBg( ref="pageBg" )
      router-view()
      twitterView( v-show="isBg" )
</template>

<script>
  import bgView from '../../components/bg';
  import twitterView from '../../components/twitter';
  import anime from 'animejs';

  export default {
    components: { bgView, twitterView },
    data () {
      return {
        isBg: false
      };
    },
    computed: {},
    watch: {
      '$route' (to, from) {
        this.isBg = to.path !== '/';
        this.fadePageBg();
        this.fadePage();
      }
    },
    methods: {
      fadePage () {
        const that = this;
        that.$refs.page.style.opacity = 0;
        const fade = anime({
          targets: that.$refs.page,
          opacity: [0, 1],
          easing: 'linear',
          duration: 300
        });
        fade.play();
      },
      fadePageBg () {
        const that = this;
        const fade = anime({
          targets: that.$refs.pageBg,
          opacity: [0, 1],
          easing: 'linear',
          duration: 300,
          begin () {
            if (that.isBg) that.$refs.pageBg.style.display = 'block';
          },
          complete () {
            if (!that.isBg) that.$refs.pageBg.style.display = 'none';
          }
        });
        if (that.isBg) {
          fade.play();
        } else {
          fade.reverse();
        }
      }
    },
    mounted () {
      this.isBg = this.$route.fullPath !== '/';
      this.fadePageBg();
      this.fadePage();
    }
  };
</script>

<style lang="stylus" scoped>
  .main
    width 100%
    height 100%
    position relative
  .page
    position absolute
    top 0
    bottom 0
    left 0
    right 0
  .pageBg
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(255, 255, 255, 0.1)
</style>
