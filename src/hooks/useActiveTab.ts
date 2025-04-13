import { create } from 'zustand';

type ActiveTabStore = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useActiveTab = create<ActiveTabStore>((set) => ({
  activeTab: '',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));