import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LikesStoreI {
  likedIds: string[];
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
  reset: () => void;
}

const useLikesStore = create<LikesStoreI>()(
  persist(
    (set, get) => ({
      likedIds: [],

      toggleLike: (id) => {
        set((state) => ({
          likedIds: state.likedIds.includes(id)
            ? state.likedIds.filter((x) => x !== id)
            : [...state.likedIds, id],
        }));
      },

      isLiked: (id) => get().likedIds.includes(id),

      reset: () => set({ likedIds: [] }),
    }),
    {
      name: "likes-store",
    }
  )
);

export default useLikesStore;