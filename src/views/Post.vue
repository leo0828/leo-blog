<template>
  <section
    v-loading.fullscreen.lock="loading"
    class="post-page"
  >
    <transition
      enter-active-class="animated fadeIn faster"
      enter-leave-class="animated fadeOut faster"
    >
      <div>
        <el-link
          icon="el-icon-arrow-left"
          href="#/"
        >首页</el-link>
        <post-detail
          :title="post.title"
          :created="post.created"
          :content="post.body"
        ></post-detail>
        <div class="pagination">
          <el-link
            v-if="prevPost"
            @click="prev"
            icon="el-icon-arrow-left"
          >上一篇</el-link>
          <el-link
            @click="next"
            v-if="nextPost"
          >下一篇<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
import { getPost } from "@/api/service";
import PostDetail from "@/components/Post/PostDetail";

export default {
  name: "Post",
  watch: {
    $route(to, from) {
      this.getData(this.slug);
    },
  },
  props: {
    slug: {
      type: String,
      default: "",
    },
  },
  components: {
    PostDetail,
  },
  data() {
    return {
      loading: false,
      error: false,
      post: {},
      nextPost: {},
      prevPost: {},
    };
  },
  created() {
    this.getData(this.slug);
  },
  methods: {
    prev() {
      this.$router.push({
        name: "post",
        params: {
          slug: this.prevPost.slug,
        },
      });
    },
    next() {
      this.$router.push({
        name: "post",
        params: {
          slug: this.nextPost.slug,
        },
      });
    },
    async getData(slug) {
      this.loading = true;
      try {
        let { data } = (await getPost(slug)) || this.$router.push("/");
        this.post = data.data;
        this.prevPost = data.meta.previous_post;
        this.nextPost = data.meta.next_post;
        this.error = false;
      } catch (error) {
        console.error(error);
        this.$message.error("获取文章内容失败");
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.post-page {
  min-height: 100vh;

  .pagination {
    display: flex;
    padding-top: 30px;
    justify-content: center;
  }

  //highlight.js reset style
  .hljs {
    font-size: 16px;
  }

  .el-link + .el-link {
    margin-left: 30px;
  }
}
</style>