<template>
  <div class="error-page">
    <h3 style="margin-bottom:100px;">404，页面开小差了...</h3>
    <el-link href="#/">返回主页</el-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss">
.error-page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>