<template lang="pug">
  section.page()
    h2.pageTitle() Songs
    div.pageCoontents()
      ul.songs()
        li()
          h3.title() 雨音
          p() {{ amaotoTime }}
          ul.ctrlList()
            li.playIcon( v-on:click="play(amaoto)" )
            li.pauseIcon( v-on:click="pause(amaoto)" )
              img( src="/images/audioPauseIcon.png" alt="一時停止" )
            li.stopIcon( v-on:click="stop(amaoto, 'amaoto')" )
            li.prevCtrlIcon( v-on:click="prev(amaoto, 'amaoto')" )
              img( src="/images/audioPrevIcon.png" alt="巻き戻す" )
            li.nextCtrlIcon( v-on:click="next(amaoto, 'amaoto')" )
              img( src="/images/audioNextIcon.png" alt="早送り" )
        li()
          h3.title() Movie Star
          p() {{ movieStarTime }}
          ul.ctrlList()
            li.playIcon( v-on:click="play(movieStar)" )
            li.pauseIcon( v-on:click="pause(movieStar)" )
              img( src="/images/audioPauseIcon.png" alt="一時停止" )
            li.stopIcon( v-on:click="stop(movieStar, 'movieStar')" )
            li.prevCtrlIcon( v-on:click="prev(movieStar, 'movieStar')" )
              img( src="/images/audioPrevIcon.png" alt="巻き戻す" )
            li.nextCtrlIcon( v-on:click="next(movieStar, 'movieStar')" )
              img( src="/images/audioNextIcon.png" alt="早送り" )
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        amaoto: null,
        amaotoTime: '0：00',
        movieStar: null,
        movieStarTime: '0：00'
      };
    },
    computed: {},
    watch: {},
    methods: {
      getAudio (url, key) {
        const that = this;
        const song = X.clone();
        song('audio').setup({
          decode: (arrayBuffer) => {
            // decodeAudioDataの実行中に呼び出される
            // 第1引数は, オーディオデータのArrayBuffer
            console.log('decode');
          },
          ready: (buffer) => {
            // decodeAudioDataの終了時に呼び出される
            // 第1引数は, AudioBufferインスタンス
            console.log('ready');
          },
          start: (source, currentTime) => {
            // オーディオ再生直前に呼び出される
            // 第1引数は, AudioBufferSourceNodeインスタンス
            // 第2引数は, 楽曲の再生位置
            console.log('start');
          },
          stop: (source, currentTime) => {
            // オーディオの一時停止時に呼び出される
            // 第1引数は, AudioBufferSourceNodeインスタンス
            // 第2引数は, 楽曲の再生位置
            console.log('stop');
          },
          update: (source, currentTime) => {
            // オーディオ再生中に定期的に呼び出される
            // 第1引数は, AudioBufferSourceNodeインスタンス
            // 第2引数は, 楽曲の再生位置
            console.log('update');
            that[key + 'Time'] = this.formatTime(currentTime);
          },
          ended: (source, currentTime) => {
            // オーディオ停止時に呼び出される
            // 第1引数は, AudioBufferSourceNodeインスタンス
            // 第2引数は, 楽曲の再生位置
            console.log('ended');
          },
          error: (error) => {
            // デコードオーディオデータ失敗時に呼び出される
            // 第1引数は, Errorインスタンスかnull
            console.log('error');
          }
        });
        return new Promise((resolve, reject) => {
          X.ajax({
            url: url,
            timeout: 60000,
            success: (event, arrayBuffer) => {
              // 第1引数は, XMLHttpRequestProgressEventインスタンス
              // 第2引数は, ArrayBuffer
              // ArrayBuffer -> AudioBuffer -> AudioBufferSourceNode
              song('audio').ready.call(song('audio'), arrayBuffer);
              that[key] = song;
            },
            error: (event, textStatus) => {
              // 第1引数は, XMLHttpRequestProgressEvent
              // 第2引数は, 文字列 'error', 'timeout' のどちらか
            },
            progress: (event) => {
              // 第1引数は, XMLHttpRequestProgressEventインスタンス
            }
          });
        });
      },
      play (data) {
        data('audio').start(data('audio').param('currentTime'));
      },
      pause (data) {
        data('audio').stop();
      },
      stop (data, key) {
        data('audio').stop();
        this[key + 'Time'] = this.formatTime(0);
        data('audio').currentTime = 0;
      },
      prev (data, key) {
        let time = data('audio').param('currentTime') - 10;
        time = Math.floor((time < 0) ? 0 : time);
        this[key + 'Time'] = this.formatTime(time);
        data('audio').currentTime =  time;
      },
      next (data, key) {
        let time = data('audio').param('currentTime') + 10;
        time = Math.floor((time < 0) ? 0 : time);
        this[key + 'Time'] = this.formatTime(time);
        data('audio').currentTime = time;
      },
      formatTime (time) {
        time = Math.floor(time);
        const sec = (String(Math.floor(time % 60)).length === 1) ? '0' + Math.floor(time % 60) : Math.floor(time % 60);
        time = Math.floor(time / 60) + '：' + sec;
        return time;
      }
    },
    mounted () {
      const that = this;
      Promise.all([
        that.getAudio('/audio/mp3/amaoto.mp3', 'amaoto'),
        that.getAudio('/audio/mp3/movie_star.mp3', 'movieStar')
      ]).then(() => {
        console.log('完了')
      });
    }
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
  .ctrlList
    display flex
    align-items center
    & > li
      margin-left 10px
      cursor default
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
