<template lang="pug">
  <div>
    <form>
      <textarea rows='1' wrap='hard' v-model='message' placeholder='edit me'></textarea>
      <input type='button' value='送信' v-on:click='send'>
      <p>{{windowHeight}}</p>
    </form>
  </div>
</template>

<script>
  import { TALKLIST } from '../store/mutationTypes';
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    data () {
      return {
        message: '初期値',
        windowHeight: window.innerHeight
      };
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([
        TALKLIST
      ]),
      send () {
        this.TALKLIST({
          id: new Date().getTime(),
          type: 'is-right',
          icon: 'https://placehold.jp/150x150.png',
          text: this.$data.message
        });
        this.windowHeight = window.innerHeight;
      }
    }
  };
</script>

<style lang='stylus' scoped>
  p
    position absolute
    top 385px
</style>
