import type { IUser } from '@/entities/user/model/user-model'
import { create } from 'zustand'
import type { authStore, tasksStore, usersStore } from './store-types';
import { devtools } from 'zustand/middleware/devtools';
import type { ITask } from '@/entities/tasks/model/task-model';

const useUsersStore = create<usersStore>()(devtools((set, get) => ({
    users: [],
    currentUser: null,
    authUser: null,
    getUserByEmail: (email: string) => {
        const { users } = get();
        return users.find(user => user.email === email);
    },

    setCurrentUser: (user: IUser) => set(() => ({ currentUser: user })),

    setAuthUser: (user: IUser) => set(() => ({ authUser: user })),

    setUsers: (users: IUser[]) => set(() => ({ users: users })),

    updateUser: (updatedUser: IUser) => {
        const { users, setUsers, setCurrentUser, setAuthUser } = get();
        const updatedUsers = users.map(user => 
            user.id === updatedUser.id ? updatedUser : user
        );

        setUsers(updatedUsers);

        if (get().currentUser?.id === updatedUser.id) {
            setCurrentUser(updatedUser);
        }

        if (get().authUser?.id === updatedUser.id) {
            setAuthUser(updatedUser);
        }
    },
})));

const useAuthStore = create<authStore>()(devtools((set) => ({
    isAuth: false,
    setIsAuth: (auth: boolean) => set(() => ({ isAuth: auth })),
})));

const useTaskStore = create<tasksStore>()(devtools((set, get) => ({
    tasks: [],
    selectedTask: null,

    setTasks: (tasks: ITask[]) => set(() => ({ tasks: tasks })),

    setSelectedTask: (task: ITask) => set(() => ({ selectedTask: task })),

    updateTask: (updatedTask: ITask) => {
        const { tasks, setTasks, setSelectedTask } = get();
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );

        setTasks(updatedTasks);

        if (get().selectedTask?.id === updatedTask.id) {
            setSelectedTask(updatedTask);
        }
    },
})));

export default {
  useUsersStore,
  useTaskStore,
  useAuthStore,
};