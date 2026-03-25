import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CountStoreI {
  count: number,
  addCount: () => void,
  minusCount: () => void,
  resetCount: () => void
}

export const useCountStore = create<CountStoreI>()(
  persist(
    (set, get) => ({
      count: 0,

      addCount: () => {
        const initialCount = get().count
        set({ count: initialCount + 1 })
      },

      minusCount: () => {
        set((state) => ({ count: state.count - 1 }))
      },

      resetCount: () => {
        set({ count: 0 })
      }
    }),
    {
      name: "count-storage"
    }
  )
)