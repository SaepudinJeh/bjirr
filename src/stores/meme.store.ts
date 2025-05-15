// stores/memeStore.ts
import { create } from 'zustand';
import memeData from '@/datas/memes/meme.json'; // Adjust the path to your JSON file

interface Meme {
  slug: string;
  media: string;
  title: string;
  date: string;
}

interface MemeStore {
  memes: Meme[];
  currentMeme: Meme | null;
  setCurrentMemeBySlug: (slug: string) => void;
  getNextMeme: () => Meme | null;
  getPreviousMeme: () => Meme | null;
  goToNextMeme: () => string | null;
  goToPreviousMeme: () => string | null;
}

const useMemeStore = create<MemeStore>((set, get) => ({
  memes: memeData.data, // Directly use imported data
  currentMeme: null,

  setCurrentMemeBySlug: (slug) => {
    const { memes } = get();
    const foundMeme = memes.find(meme => meme.slug === slug) || null;
    set({ currentMeme: foundMeme });
  },

  getNextMeme: () => {
    const { memes, currentMeme } = get();
    if (!currentMeme) return null;
    
    const currentIndex = memes.findIndex(m => m.slug === currentMeme.slug);
    if (currentIndex === -1 || currentIndex === memes.length - 1) return null;
    
    return memes[currentIndex + 1];
  },

  getPreviousMeme: () => {
    const { memes, currentMeme } = get();
    if (!currentMeme) return null;
    
    const currentIndex = memes.findIndex(m => m.slug === currentMeme.slug);
    if (currentIndex <= 0) return null;
    
    return memes[currentIndex - 1];
  },

  goToNextMeme: () => {
    const nextMeme = get().getNextMeme();
    if (nextMeme) {
      set({ currentMeme: nextMeme });
      return nextMeme.slug;
    }
    return null;
  },

  goToPreviousMeme: () => {
    const prevMeme = get().getPreviousMeme();
    if (prevMeme) {
      set({ currentMeme: prevMeme });
      return prevMeme.slug;
    }
    return null;
  }
}));

export default useMemeStore;