export interface IAchivement {
    id: string;
    title: string;
    description: string;
    picture: string;
    received: boolean;
    type: string  | string[];
}

// Временно сделал вот такую структуру для пользователей и ачивок, в будущем, мы, конечно, изменим стркутуру для пользователей и ачивок. 