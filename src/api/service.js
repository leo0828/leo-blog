import { butter } from "@/lib/butter";

export const getPosts = (config)=> butter.post.list(config)
export const getPost = (config)=> butter.post.retrieve(config)