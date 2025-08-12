import type { IUser } from '@/entities/user/model/user-model'
import { create } from 'zustand'
import type { authStore, usersStore } from './store-types';
import { devtools } from 'zustand/middleware/devtools';

const useUsersStore = create<usersStore>()(devtools((set, get) => ({
    users: [],
    currentUser: null,
    getUserByEmail: (email: string) => {
        const { users } = get();
        return users.find(user => user.email === email);
    },

    setCurrentUser: (user: IUser) => set(() => ({ currentUser: user })),

    setUsers: (users: IUser[]) => set(() => ({ users: users })),

    updateUser: (updatedUser: IUser) => {
        const { users, setUsers, setCurrentUser } = get();
        const updatedUsers = users.map(user => 
            user.id === updatedUser.id ? updatedUser : user
        );

        setUsers(updatedUsers);

        if (get().currentUser?.id === updatedUser.id) {
            setCurrentUser(updatedUser);
        }
    },
})));

const useAuthStore = create<authStore>()(devtools((set) => ({
    isAuth: false,
    setIsAuth: (auth: boolean) => set(() => ({ isAuth: auth })),
}))); 

export default {
  useUsersStore,
  useAuthStore,
};