import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserDto } from "@/api/types";

interface UserStoreI {
  user: UserDto | null;
  setUser: (user: UserDto) => void;
  reset: () => void;
}

const useUserStore = create<UserStoreI>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user) => {
        set(() => ({ user }));
      },

      reset: () => {
        localStorage.removeItem("accessToken");
        set(() => ({ user: null }));
      },
    }),
    {
      name: "user-store",
    },
  ),
);

export default useUserStore;
