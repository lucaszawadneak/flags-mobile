import create from "zustand";

const useScoreStore = create((set) => ({
  name: "",
  currentStage: 1,
  score: 0,
  setName: (name) => set(() => ({ name })),
  setScore: (score) => set(() => ({ score })),
  setCurrentStage: (currentStage) => set(() => ({ currentStage })),
}));

export default function useStore() {
  const state = useScoreStore((state) => state);

  return state;
}
