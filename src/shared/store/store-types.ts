import type { ITask } from "@/entities/tasks/model/task-model";
import type { IUser } from "@/entities/user/model/user-model";

export type usersStore = {
    users: IUser[];
    currentUser: IUser | null;
    authUser: IUser | null;
    getUserByEmail: (id: string) => IUser | undefined;
    setCurrentUser: (user: IUser) => void;
    setAuthUser: (user: IUser) => void;
    setUsers: (users: IUser[]) => void;
    updateUser: (updatedUser: IUser) => void;
}

export type authStore = {
    isAuth: boolean;
    setIsAuth: (auth: boolean) => void;
}

export type tasksStore = {
    tasks: ITask[];
    selectedTask: ITask | null;
    setTasks: (tasks: ITask[]) => void;
    setSelectedTask: (task: ITask) => void;
    updateTask: (updatedTask: ITask) => void;
    getTaskById: (id: string) => ITask | undefined;
}