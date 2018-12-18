<template>
    <div class="l-article-item">
        <div class="title">
            <h2>
                <router-link class="link" :to="{name:'article',params:{id:article.slug}}">{{article.title}}</router-link>
            </h2>
        </div>
        <div class="date">
            {{$tool.fromNow(article.created)}}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'l-article-item',
        props: {
            article: {
                type: Object,
                default: function (params) {
                    return {
                        title: 'title',
                        created: '2018-11-14'
                    }
                }
            }
        },
        methods: {
            go(slug) {
                this.$router.push({
                    name: 'article',
                    params: {
                        id: slug
                    }
                })
            }
        },
    }
</script>
<style lang="scss">
    .l-article-item {
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