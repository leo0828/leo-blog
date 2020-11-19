<template>
  <div id="app">
    <el-backtop ref="backtop"><i class="el-icon-top"></i></el-backtop>
    <el-container direction="vertical">
      <el-main>
        <transition
          mode="out-in"
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
        >
          <router-view class="animated faster container" />
        </transition>
      </el-main>
      <el-footer class="footer">
        <span>
          Copyright © 2018 | Powered by
        </span>
        <a
          href="https://buttercms.com"
          target="_blank"
        >
          <img
            class="butter-logo"
            src="./assets/butter-b.png"
            alt="buttercms"
          >
        </a>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>


<style lang="scss">
@import url("./styles/index.css");
@import url("./styles/animate.min.css");
@import url("./assets/icon/iconfont.css");

.el-message {
  min-width: 300px !important;
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $black;
  min-height: 100vh;

  .link {
    text-decoration: none;
    transition: all ease 0.2s;
    color: $link-color;
  }

  .link:hover {
    color: $link-active-color !important;
  }

  .el-main {
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
  }

  .container {
    flex: 1;
    width: 768px;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
    }
  }

  .footer {
    box-sizing: content-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 14px;
    color: $text-color;

    .butter-logo {
      display: flex;
      height: 30px;
    }
  }
}
</style>