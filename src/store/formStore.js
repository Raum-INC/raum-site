import { create } from "zustand";

const useFormStore = create((set) => ({
  fullName: "",
  email: "",
  category: "Renter/User",
  location: "",
  whatsappNumber: "",
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      fullName: "",
      email: "",
      category: "Renter/User",
      location: "",
      whatsappNumber: "",
    }),
}));

export default useFormStore;
