<template>
    <section class="l-404-page">
        <h3 style="margin-bottom:100px;">404，页面开小差了...</h3>
        <el-button @click="backHome" plain>返回主页</el-button>
    </section>
</template>
<script>
export default {
    name:'l-404-page',
    methods:{
        backHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss">
    .l-404-page {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>