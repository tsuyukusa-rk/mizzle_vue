<template lang="pug">
  main.main
    talkListView( v-bind:sample="talklist" )
    sendFormView()
</template>

<script>
  import talkListView from '../../components/talkList';
  import sendFormView from '../../components/sendForm';
  import { TALKLIST } from '../../store/mutationTypes';
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    components: {
      talkListView: talkListView,
      sendFormView: sendFormView
    },
    data () {
      return {};
    },
    computed: {
      ...mapGetters([
        'talklist'
      ])
    },
    methods: {
      ...mapActions([
        TALKLIST
      ])
    },
    mounted () {
      this.TALKLIST();
    }
  };
</script>

<style lang="stylus" scoped>
  .main
    border-bottom 1px solid #000
</style>
