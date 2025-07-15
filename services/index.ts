import { config } from "@/config";
import { Category, Post } from "@/types";

export const getPosts = async () => {
    const response = await fetch(`${config.BASE_URL}/posts`);
    const data = await response.json();
    return data as Post[];
};

export const getPost = async (id: string) => {
    const response = await fetch(`${config.BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data as Post;
};

export const getCategories = async () => {
    const response = await fetch(`${config.BASE_URL}/categories`);
    const data = await response.json();
    return data as Category[];
};


export const getPostsByCategoryId = async (categoryId: number) => {
    const response = await fetch(`${config.BASE_URL}/posts?categories=${categoryId}`);
    const data = await response.json();
    console.log("THE POSTS BY CATEGORY ID", data);
    return data as Post[];
};
