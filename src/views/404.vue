<template>
    <section class="l-404-page">
        <h3 style="margin-bottom:100px;">404，页面开小差了...</h3>
        <router-link to="/" class="back-btn">返回主页</router-link>
    </section>
</template>
<style lang="scss">
    .l-404-page {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .back-btn {
            border: 1px solid #e5e5e5;
            cursor: pointer;
            margin: 0;
            display: inline-block;
            padding: 0 30px;
            vertical-align: middle;
            text-align: center;
            transition: 0.1s ease-in-out all;
            font-size: 14px;
            line-height: 38px;
            color: #2c3e50;
            text-decoration: none;
        }

        .back-btn:hover {
            border-color: #b2b2b2;
            background-color: transparent;
        }
    }
</style>