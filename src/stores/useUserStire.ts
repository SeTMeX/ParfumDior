import { create } from 'zustand'

interface UserStore {
  count: number
  inc: () => void
}

export const useUserStore = create<UserStore>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))
