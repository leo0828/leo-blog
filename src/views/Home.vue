<template>
  <section class="home-page">
    <div>
      <transition
        appear
        appear-active-class="animated pulse faster"
      >
        <author-box></author-box>
      </transition>
    </div>
    <div
      class="posts"
      v-loading="loading"
    >
      <transition-group
        mode="out-in"
        enter-active-class="animated fadeInUp faster"
        leave-active-class="animated fadeOut faster"
      >
        <post-item
          v-for="post in posts"
          :key="post.slug"
          :title="post.title"
          :created="post.created"
          :slug="post.slug"
          class="item"
        ></post-item>
      </transition-group>
    </div>
    <div v-if="error">
      <h3 style="margin-bottom:100px;">加载出错了哦...</h3>
    </div>
  </section>
</template>

<script>
import { getPosts } from "@/api/service";
import PostItem from "@/components/Post/PostItem";
import AuthorBox from "@/components/AuthorBox";

export default {
  name: "HomePage",
  components: {
    PostItem,
    AuthorBox,
  },
  data() {
    return {
      posts: [],
      loading: false,
      error: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        let { data } = await getPosts({
          page: 1,
          page_size: 10,
        });
        this.posts = data.data;
        this.error = false;
      } catch (error) {
        console.error(error);
        this.$message.error("获取文章列表失败");
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss">
.home-page {
  min-height: 100vh;
  .posts {
    min-height: 30vh;
    padding-top: 30px;
    .item {
      padding: 15px 0;
    }
  }
}
</style>