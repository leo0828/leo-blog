<template>
  <section class="l-article-page">
    <transition enter-active-class="animated fadeIn faster" enter-leave-class="animated fadeOut faster">
      <pulse-loader class="loading-style" key="loading" v-if="loading" color="#409eff" :loading="loading" :size="5"
        margin="5px"></pulse-loader>
      <div key="loaded" class="container" v-else="loading">
        <router-link class="link back-link" to="/">Back</router-link>
        <l-article :article="article.data"></l-article>
        <div class="l-pagination">
          <el-button @click="prev" :loading="prevLoading" icon="el-icon-arrow-left" v-if="prevPost" plain>Prev</el-button>
          <el-button @click="next" :loading="nextLoading" v-if="nextPost" plain>Next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
  import {
    getArticle
  } from "@/api/service";
  import lArticle from "@/components/Article/Article";

  export default {
    name: 'l-article-page',
    watch: {
      $route(to, from) {
        this.getData(this.slug)
      }
    },
    props: {
      slug: {
        default: 'example-post'
      }
    },
    components: {
      lArticle
    },
    data() {
      return {
        loading: true,
        prevLoading: false,
        nextLoading: false,
        article: {},
        nextPost: {},
        prevPost: {}
      }
    },
    created() {
      this.getData(this.slug)
    },
    methods: {
      prev() {
        this.loading = true
        this.prevLoading = true
        this.$router.push({
          name: 'article',
          params: {
            slug: this.prevPost.slug
          }
        })
      },
      next() {
        this.loading = true
        this.nextLoading = true
        this.$router.push({
          name: 'article',
          params: {
            slug: this.nextPost.slug
          }
        })
      },
      async getData(slug) {
        try {
          var res = await getArticle(slug) || this.$router.push('/')
          this.article = res.data
          this.prevPost = res.data.meta.previous_post
          this.nextPost = res.data.meta.next_post
          this.loading = false
          this.prevLoading = false
          this.nextLoading = false
        } catch (error) {
          console.error(error);
          this.$message.error('获取文章信息失败')
        }
      },
    }
  }
</script>

<style lang="scss">
  .l-article-page {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .back-link {
      display: block;
      color: $text-color;
    }

    .back-link:before {
      content: "←";
      display: inline-block;
      position: relative;
      margin-right: 8px;
    }

    .l-pagination {
      display: flex;
      padding-top: 30px;
      justify-content: space-between;
    }
  }
</style>