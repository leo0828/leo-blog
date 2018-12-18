<template>
  <section class="l-article-page">
    <transition enter-active-class="animated fadeIn faster">
      <pulse-loader class="loading-style" key="loading" v-if="loading" color="#409eff" :loading="loading" :size="5" margin="5px"></pulse-loader>
      <div key="loaded" class="container" v-else="loading">
        <router-link class="link back-link" to="/">Back</router-link>
        <l-article :article="article.data"></l-article>
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
        this.getData()
      }
    },
    props: {
      id: {
        default: 1
      }
    },
    components: {
      lArticle
    },
    data() {
      return {
        loading: true,
        article: {}
      }
    },
    created() {
      this.getData()
    },
    methods: {
      go() {
        this.$router.push({
          name: 'article',
          params: {
            id: 2
          }
        })
      },
      async getData() {
        try {
          var res = await getArticle(this.id) || this.$router.push('/')
          this.article = res.data
          this.loading = false
        } catch (error) {
          console.error(error);
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
  }
</style>