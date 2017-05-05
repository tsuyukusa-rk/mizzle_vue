<template lang="pug">
  ul.songs()
    li( v-show="isAmaoto" )
      h3.title() 雨音
        span.time() {{ amaotoTime }}
      ul.ctrlList()
        li.playIcon( v-on:click="play(amaoto.obj)" )
        li.pauseIcon( v-on:click="pause(amaoto.obj)" )
          img( src="/images/audioPauseIcon.png" alt="一時停止" )
        li.stopIcon( v-on:click="stop(amaoto.obj, 'AMAOTO_TIME')" )
        li.prevCtrlIcon( v-on:click="prev(amaoto.obj, 'AMAOTO_TIME')" )
          img( src="/images/audioPrevIcon.png" alt="巻き戻す" )
        li.nextCtrlIcon( v-on:click="next(amaoto.obj, 'AMAOTO_TIME')" )
          img( src="/images/audioNextIcon.png" alt="早送り" )
    li( v-show="isMovieStar" )
      h3.title() Movie Star
        span.time() {{ movieStarTime }}
      ul.ctrlList()
        li.playIcon( v-on:click="play(movieStar.obj)" )
        li.pauseIcon( v-on:click="pause(movieStar.obj)" )
          img( src="/images/audioPauseIcon.png" alt="一時停止" )
        li.stopIcon( v-on:click="stop(movieStar.obj, 'MOVIE_STAR_TIME')" )
        li.prevCtrlIcon( v-on:click="prev(movieStar.obj, 'MOVIE_STAR_TIME')" )
          img( src="/images/audioPrevIcon.png" alt="巻き戻す" )
        li.nextCtrlIcon( v-on:click="next(movieStar.obj, 'MOVIE_STAR_TIME')" )
          img( src="/images/audioNextIcon.png" alt="早送り" )
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import {
    AMAOTO,
    AMAOTO_TIME,
    MOVIE_STAR,
    MOVIE_STAR_TIME
  } from '../store/mutationTypes';

  export default {
    components: {},
    data () {
      return {
        isAmaoto: false,
        isMovieStar: false
      };
    },
    computed: {
      ...mapGetters([
        'amaoto',
        'amaotoTime',
        'movieStar',
        'movieStarTime'
      ])
    },
    watch: {
      amaoto (val) {
        const that = this;
        val.obj('audio').setup({
          ready: () => { that.isAmaoto = true; },
          update: (source, currentTime) => { that.update(source, currentTime, that.AMAOTO_TIME); }
        });
        val.obj('audio').ready(val.buf);
      },
      movieStar (val) {
        const that = this;
        val.obj('audio').setup({
          ready: () => { that.isMovieStar = true; },
          update: (source, currentTime) => { that.update(source, currentTime, that.MOVIE_STAR_TIME); }
        });
        val.obj('audio').ready(val.buf);
      }
    },
    methods: {
      ...mapActions([
        AMAOTO,
        AMAOTO_TIME,
        MOVIE_STAR,
        MOVIE_STAR_TIME
      ]),
      update (source, currentTime, fn) {
        fn(currentTime);
      },
      play (data) {
        data('audio').start(data('audio').param('currentTime'));
      },
      pause (data) {
        data('audio').stop();
      },
      stop (data, key) {
        data('audio').stop();
        this[key](0);
        data('audio').currentTime = 0;
      },
      prev (data, key) {
        let time = data('audio').param('currentTime') - 10;
        time = Math.floor((time < 0) ? 0 : time);
        this[key](time);
        data('audio').currentTime = time;
      },
      next (data, key) {
        let time = data('audio').param('currentTime') + 10;
        time = Math.floor((time < 0) ? 0 : time);
        this[key](time);
        data('audio').currentTime = time;
      }
    },
    mounted () {
      if (this.amaoto) {
        this.isAmaoto = true;
      } else {
        this.AMAOTO();
      }
      if (this.movieStar) {
        this.isMovieStar = true;
      } else {
        this.MOVIE_STAR();
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .songs
    height 100%
    overflow scroll
    > li
      padding 15px
      &:nth-child(odd)
        background-color rgba(255, 255, 255, 0.15)
      &:nth-child(even)
        background-color rgba(170, 170, 170, 0.15)
  .title
    font-size 12px
    font-weight bold
    margin-bottom 5px
    & .time
      font-weight normal
      padding-left 10px
  .ctrlList
    display flex
    align-items center
    & > li
      margin-left 15px
      cursor pointer
      &:first-child
        margin-left 0
  .playIcon
    width 0
    height 0
    border 8px solid transparent
    border-left 12px solid #777
    border-right: none;
  .pauseIcon
    width 20px
    height 20px
    & img
      width 100%
  .stopIcon
    width 15px
    height 15px
    &:before
      content ""
      width 15px
      height 15px
      background-color #777
      display inline-block
  .prevCtrlIcon
    width 20px
    height 20px
    & img
      width 100%
  .nextCtrlIcon
    width 20px
    height 20px
    & img
      width 100%
</style>
