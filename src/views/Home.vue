<template>
  <section class="l-home-page">
    <div class="container">
      <transition appear appear-active-class="animated pulse faster">
        <l-author-box></l-author-box>
      </transition>
    </div>
    <div class="container">
      <transition mode="out-in" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <pulse-loader v-if="loading" key="loading" class="loading-style" color="#409eff" :loading="loading" :size="5"
          margin="5px"></pulse-loader>
        <div v-else key="loaded">
          <l-article-item :article="item" class="item" v-for="item in articles" :key="item.slug"></l-article-item>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
  import {
    getArticles
  } from "@/api/service";
  import lArticleItem from '@/components/Article/ArticleItem.vue';
  import lAuthorBox from '@/components/authorBox.vue';

  export default {
    name: "l-home-page",
    components: {
      lArticleItem,
      lAuthorBox
    },
    data() {
      return {
        articles: [],
        loading: true
      }
    },
    created() {
      this.getData()
    },
    methods: {
      async getData() {
        try {
          var res = await getArticles({
            page: 1,
            page_size: 10,
          })
          this.articles = res.data.data
          this.loading = false
        } catch (error) {
          console.error(error);
          this.$message.error('获取文章列表失败')

        }

      },
    },
  };
</script>
<style lang="scss">
  .l-home-page {
    min-height: 100%;

    .item {
      padding: 15px 0;
    }

  }
</style>