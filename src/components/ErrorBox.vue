<template>
  <div class="error-box">
    <span class="refresh" @click="refresh">{{message}}，刷新试试<i class="el-icon-refresh"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ErrorBox",
  props: {
    message: {
      type: String,
      default: "加载出错了",
    },
  },
  methods: {
    refresh() {
      location.reload();
    },
  },
};
</script>

<style lang="scss">
.error-box {
  width: 100%;
  padding-top: 60px;
  text-align: center;
  .refresh {
    cursor: pointer;
  }
}
</style>