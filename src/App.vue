<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut">
      <router-view class="animated faster" style="flex:1;" />
    </transition>
    <footer>
      <span>
        Copyright © 2018 | Powered by
      </span>
      <a href="https://buttercms.com" target="_blank">
        <img class="butter-logo" src="./assets/butter-b.png" alt="">
      </a>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'App',
  }
</script>


<style lang="scss">
  @import url('./styles/animate.min.css');

  #app {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #2c3e50;
    min-height: 100%;

    footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding: 30px;
      font-size: 14px;
      color: $text-color;

      .butter-logo {
        margin-left: 15px;
        width: 130px;
        display: inline-block;
      }
    }

  }
</style>