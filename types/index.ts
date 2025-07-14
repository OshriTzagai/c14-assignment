export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };

    content: {
        rendered: string;
    };

    date: string;
    link?: string;
    jetpack_featured_media_url?: string;
    meta?: {
        advanced_seo_description?: string;
        jetpack_seo_html_title?: string;

    }
}


export interface Comment {
    id: number;
    author_name: string;
    author_email: string;
    content: string;
    date: string;
    author_image?: string;
}


export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
}