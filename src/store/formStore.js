import { create } from "zustand";

const useFormStore = create((set) => ({
  name: "",
  email: "",
  userType: "RENTER_OR_USER",
  location: "",
  phone: "",
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      name: "",
      email: "",
      userType: "RENTER_OR_USER",
      location: "",
      phone: "",
    }),
}));

export default useFormStore;
