<template>
  <div class="post-item">
    <div class="title">
      <h2>
        <router-link
          class="link"
          :to="{name:'post',params:{slug:slug}}"
        >{{title}}</router-link>
      </h2>
    </div>
    <div class="date">
      {{$day.fromNow(created)}}
    </div>
  </div>
</template>
<script>
export default {
  name: "PostItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    created: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.post-item {
  text-align: left;

  .date {
    padding-top: 10px;
    color: $text-color;
    font-size: 14px;
    border-top: 1px solid rgb(230, 230, 230);
    display: inline-block;
  }

  .title {
    margin-bottom: 10px;
    .link {
      font-size: 22px;
    }
  }
}
</style>