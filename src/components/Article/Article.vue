<template>
    <div class="l-article">
        <div class="header">
            <h1 class="title">{{article.title}}</h1>
            <div class="date">{{$tool.fromNow(article.created)}}</div>
        </div>
        <div class="content" v-html="article.body" v-hljs></div>
    </div>
</template>
<script>
    export default {
        name: 'l-article',
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
    }
</script>

<style lang="scss">
    .l-article {
        padding-bottom: 30px;
        border-bottom: 1px solid #e6e6e6;

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
            color: $main-text-color;

            code{
                letter-spacing: initial;
            }

            img {
                width: 100%;
                // max-width: 100%;
            }

            a {
                color: $link-active-color;
                text-decoration: none;
                transition: all .2s ease;
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

            .text {
                text-indent: 2em;
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