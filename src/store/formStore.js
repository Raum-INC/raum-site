import { create } from "zustand";

const useFormStore = create((set) => ({
  name: "",
  email: "",
  userType: "Renter/User",
  location: "",
  phone: "",
  setField: (field, value) => set({ [field]: value }),
  resetForm: () =>
    set({
      name: "",
      email: "",
      userType: "Renter/User",
      location: "",
      phone: "",
    }),
}));

export default useFormStore;
