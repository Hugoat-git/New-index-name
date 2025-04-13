import { create } from 'zustand';

type EmailPopupStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useEmailPopup = create<EmailPopupStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));