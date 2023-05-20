import { create } from 'zustand';

type ModalState = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModal = create<ModalState>(set => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useModal;
