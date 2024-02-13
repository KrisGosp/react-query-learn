import { create } from "zustand";

type UserStore = {
  email: string;
  set: (email: string) => void;
  reset: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  email: "",
  set: (email) => set(() => ({ email: email })),
  reset: () => set(() => ({ email: "" })),
}));

export default useUserStore;
