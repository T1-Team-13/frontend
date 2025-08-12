import type { IAchivementCategory } from "./category-model";
import type { IRequirement } from "./requirement-model";

export interface IAchivement {
    id: string;
    title: string;
    description: string;
    compleatedAt: Date;
    categories: IAchivementCategory[];
    requirements: IRequirement[];
    imageUrl: string;
    completed: boolean;
}
