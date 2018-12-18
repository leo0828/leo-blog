<template>
    <div class="l-author-box">
        <img class="avatar" src="../assets/Leo.jpeg" alt="">
        <h1 class="name">Leo</h1>
        <p class="bref">一个懒人</p>
    </div>
</template>
<style lang="scss">
    .l-author-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
            transition: all ease .2s;
        }

        .avatar:hover {
            transform: scale(1.3);
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
        }

        .bref {
            display: inline-flex;
            align-items: center;
            font-size: 18px;
            color: $text-color;
        }
    }
</style>