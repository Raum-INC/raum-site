import { create } from "zustand";

const useFormStore = create((set) => ({
  fullName: "",
  email: "",
  userType: "Renter/User",
  location: "",
  phone: "",
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      fullName: "",
      email: "",
      userType: "Renter/User",
      location: "",
      phone: "",
    }),
}));

export default useFormStore;
