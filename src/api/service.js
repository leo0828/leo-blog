import { butter } from "@/plugins/butter";

export const getArticles = (config)=> butter.post.list(config)
export const getArticle = (config)=> butter.post.retrieve(config)