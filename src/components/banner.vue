<template>
  <div class="l-banner">
    <h3 class="intro">Leo：一个拖延症晚期、懒癌重度患者，但是坚信懒人改变世界。</h3>
  </div>
</template>

<script>
  export default {
    name: 'lBanner',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .l-banner {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/banner.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    .intro {
      padding: 15px;
      font-weight: 400;
      letter-spacing: 2px;
      color: #fff;
      z-index: 2;
    }
  }

  .l-banner:after {
    content: '';
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../assets/banner.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    filter: blur(8px);
    z-index: 1;
  }
</style>