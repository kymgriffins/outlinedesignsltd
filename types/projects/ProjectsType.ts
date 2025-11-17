
export type ProjectsTypes = {
    id?: string | number;
    project_image?: string;
    project_title?:string;
    tag1?: string;
    tag2?: string;
    industry?:string;
    raised?:string;
    description?:string;
    detail_img_1?:string;
    detail_img_2?:string;
    detail_img_3?:string;
    project_images?: string[];
    additional_details?: {
        client?: string;
        duration?: string;
        team_size?: string;
        technologies?: string[];
        challenge?: string;
        solution?: string;
        results?: string[];
    };
};
