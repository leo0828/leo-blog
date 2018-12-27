<template>
  <section class="l-article-page">
    <transition enter-active-class="animated fadeIn faster" enter-leave-class="animated fadeOut faster">
      <pulse-loader class="loading-style" key="loading" v-if="loading" color="#409eff" :loading="loading" :size="5"
        margin="5px"></pulse-loader>
      <div key="loaded" class="container" v-else="loading">
        <router-link class="link back-btn" to="/"><i class="el-icon-back el-icon--left"></i>Back</router-link>
        <l-article :article="article.data"></l-article>
        <div class="l-pagination">
          <el-button class="nav-btn" @click="prev" v-if="prevPost" plain><i class="el-icon-arrow-left el-icon--left"></i>Prev</el-button>
          <el-button class="nav-btn" @click="next" v-if="nextPost" plain>Next<i class="el-icon-arrow-right el-icon--right"></i></el-button>
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
      lArticle,
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
        this.$router.push({
          name: 'article',
          params: {
            slug: this.prevPost.slug
          }
        })
      },
      next() {
        this.loading = true
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

    //highlight.js reset style
    .hljs {
      font-size: 16px;
    }

    .back-btn {
      display: inline-block;
    }

    .l-pagination {
      display: flex;
      padding-top: 30px;
      justify-content: space-between;
    }

    //prev & next btn style
    .nav-btn {
      border-radius: 0;
      transition: all 0.5s ease;

      &:hover,
      &:focus,
      &:active {
        border-radius: 30px;
      }
    }
  }
</style>