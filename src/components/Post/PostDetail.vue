<template>
  <div class="post-detail">
    <div class="header">
      <h1 class="title">{{title}}</h1>
      <div
        v-if="created"
        class="date"
      >{{$day.fromNow(created)}}</div>
    </div>
    <div
      v-if="content"
      class="content"
      v-html="content"
      v-highlight
    ></div>
  </div>
</template>
<script>
export default {
  name: "PostDetail",
  props: {
    title: {
      type: String,
      default: "",
    },
    created: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.post-detail {
  padding-bottom: 30px;
  border-bottom: 0.5px solid #e6e6e6;

  .header {
    padding: 30px 0;

    .date {
      color: $text-color;
      font-size: 14px;
      margin: 5px 0;
    }
  }

  .content {
    line-height: 1.8em;
    color: $text-color;

    code {
      letter-spacing: initial;
    }

    img {
      width: 100%;
      // max-width: 100%;
    }

    a {
      color: $link-active-color;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    a:hover {
      text-decoration: underline;
    }

    .caption {
      margin: 15px 0;
    }

    p,
    .image {
      margin: 1em 0;
    }
  }

  @media screen and (max-width: 800px) {
    .header {
      .title {
        font-size: 24px;
      }
    }
  }
}
</style>