export type BlogTypes = {
    id?: string | number;
    blog_image?: string;
    blog_title?: string;
    blog_date?: string;
    blog_inner_image?: string;
    blog_description?: string;
    blog_gallery_images?: string[]; // Added to support gallery images
};