<template>
  <div class="author-box">
    <el-image
      class="avatar"
      :src="require('../assets/Leo.jpeg')"
    >
      <div
        slot="placeholder"
        class="image-slot"
      >
        <i class="el-icon-picture-outline"></i>
      </div>
      <div
        slot="error"
        class="image-slot"
      >
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <h1 class="name">Leo</h1>
    <p class="bref">
      <a
        class="link"
        href="https://github.com/leo0828/"
        target="_blank"
      ><i class="iconfont icon-github"></i></a>
      一个前端魔法师
    </p>
  </div>
</template>

<style lang="scss">
.author-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .image-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: $gray-2;
  }

  .name {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-top: 15px;
    margin-bottom: 30px;
    transition: all ease-in-out 0.2s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);

    &:hover {
      transform: scale(0.96);
      box-shadow: none;
    }
  }

  .bref {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    color: $text-color;
    .link {
      margin-right: 10px;
    }

    .icon-github {
      font-size: 20px;
    }
  }
}
</style>