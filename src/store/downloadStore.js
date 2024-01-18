import { create } from "zustand";

const useDownloadStore = create((set) => ({
  download: "guests",
  toggleGuest: () => set((state) => ({ download: "guests" })),
  toggleHosts: () => set((state) => ({ download: "hosts" })),
}));

export default useDownloadStore;
