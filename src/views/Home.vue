<template>
  <div class="l-home">
    <lBanner />
    <section class="content">
      <el-row type="flex" justify="center">
        <el-col :sm="12" :xs="24">
          <el-card shadow="hover" class="l-card" v-for="i in 10" :key="i">
            <div slot="header">
              <span>卡片{{i}}</span>
            </div>
            <div class="brief">
              你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。
              你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。
              你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import lBanner from '@/components/banner.vue'

  export default {
    name: 'home',
    components: {
      lBanner
    }
  }
</script>
<style lang="scss">
  .l-home {
    min-height: 100%;

    .content {
      padding: 100px 15px;

      .l-card+.l-card {
        margin-top: 30px;
      }

      .l-card:hover {
        transform: translateY(-15px)
      }
      .l-card{
        .brief{
          text-align: left;
        }
      }
    }
  }
</style>