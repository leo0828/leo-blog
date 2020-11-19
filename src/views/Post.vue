<template>
  <div class="post-page">
    <div class="header-actions">
      <el-link
        class="home-link"
        icon="el-icon-arrow-left"
        href="#/"
      >首页</el-link>
    </div>
    <div
      class="post-content"
      v-loading="loading"
    >
      <error-box v-if="error"></error-box>
      <post-detail
        :title="post.title"
        :created="post.created"
        :content="post.body"
      ></post-detail>
      <div
        v-if="!error"
        class="footer-actions"
      >
        <el-link
          v-if="prevPost"
          @click="toPrev"
          icon="el-icon-arrow-left"
        >上一篇</el-link>
        <el-link
          @click="toNext"
          v-if="nextPost"
        >下一篇<i class="el-icon-arrow-right el-icon--right"></i> </el-link>
      </div>
    </div>
  </div>
</template>
<script>
import { getPost } from "@/api/service";
import PostDetail from "@/components/Post/PostDetail";
import ErrorBox from "@/components/ErrorBox";

export default {
  name: "Post",
  async beforeRouteUpdate(to, from, next) {
    await this.getData(to.params.slug);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    next();
  },
  props: {
    slug: {
      type: String,
      default: "",
    },
  },
  components: {
    PostDetail,
    ErrorBox,
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
    toPrev() {
      this.$router.push({
        name: "post",
        params: {
          slug: this.prevPost.slug,
        },
      });
    },
    toNext() {
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
        this.post = {};
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
  min-height: 100%;
  display: flex;
  flex-direction: column;

  .header-actions {
    margin-bottom: 15px;
  }

  .post-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer-actions {
    display: flex;
    padding-top: 30px;
    justify-content: center;
    border-top: 0.5px solid #e6e6e6;
    .el-link + .el-link {
      margin-left: 30px;
    }
  }

  //highlight.js reset style
  .hljs {
    font-size: 16px;
  }
}
</style>