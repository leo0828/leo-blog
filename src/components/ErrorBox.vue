<template>
  <div class="error-box">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "ErrorBox",
  props: {
    message: {
      type: String,
      default: "加载出错了，刷新试试",
    },
  },
};
</script>

<style lang="scss">
.error-box {
  width: 100%;
  padding-top: 60px;
  text-align: center;
}
</style>