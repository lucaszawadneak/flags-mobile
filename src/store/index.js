import create from "zustand";

const useScoreStore = create((set) => ({
  name: "",
  gameFinished: false,
  score: 0,
  setName: (name) => set(() => ({ name })),
  setGameFinished: (gameFinished) => set(() => ({ gameFinished })),
  setScore: (score) => set(() => ({ score })),
}));

export default function useStore() {
  const state = useScoreStore((state) => state);

  return state;
}
