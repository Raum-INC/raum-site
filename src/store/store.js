import { create } from "zustand";

const useBearStore = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  falseNav: () => set((state) => ({ nav: (state.nav = false) })),
}));

export default useBearStore;
