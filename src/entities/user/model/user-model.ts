import type { IAchivement } from "@/entities/achivement/model/achivement-model";
import type { ITask } from "@/entities/tasks/model/task-model";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    registrationDate: Date;
    role: string;
    imageUrl: string;
    email: string;
    achivements: IAchivement[];
    tasks: ITask[];
}
