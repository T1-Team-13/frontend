import type { IAchivement } from "@/entities/achivement/model/achivement-model";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    jobTitle: string;
    achivementsCount: number;
    achivements: IAchivement[];
    avatar: string;
    department: string;
}

// Временно сделал вот такую структуру для пользователей и ачивок, в будущем, мы, конечно, изменим стркутуру для пользователей и ачивок. 