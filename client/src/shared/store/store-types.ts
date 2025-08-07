import type { IUser } from "@/entities/user/model/user-model";

export type usersStore = {
    users: IUser[];
    currentUser: IUser | null;
    getUserByEmail: (id: string) => IUser | undefined;
    setCurrentUser: (user: IUser) => void;
    setUsers: (users: IUser[]) => void;
    updateUser: (updatedUser: IUser) => void;
}

export type authStore = {
    isAuth: boolean;
    setIsAuth: (auth: boolean) => void;
}