import { create } from "zustand";

const useBearStore = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleFalse: () => set((state) => ({ isOpen: false })),

  isAdminOpen: false,
  toggleAdminOpen: () => set((state) => ({ isAdminOpen: !state.isAdminOpen })),
  toggleFalseAdminOpen: () => set((state) => ({ isAdminOpen: false })),

  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  falseNav: () => set((state) => ({ nav: (state.nav = false) })),
  userType: "user",
  toggleUser: () => set({ userType: "user" }),
  toggleHost: () => set({ userType: "host" }),
}));

export default useBearStore;
