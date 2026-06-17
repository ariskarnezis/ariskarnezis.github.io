import { createContext, useContext, useState, ReactNode } from 'react';

interface HomePageResetContextType {
  resetKey: number;
  resetHomePage: () => void;
  initializeHomePage: () => void;
}

const HomePageResetContext = createContext<HomePageResetContextType | undefined>(undefined);

export function HomePageResetProvider({ children }: { children: ReactNode }) {
  const [resetKey, setResetKey] = useState(0);

  const resetHomePage = () => {
    // Clear localStorage for all sections
    localStorage.removeItem('blogShowAll');
    localStorage.removeItem('articlesShowAll');
    
    // Clear sessionStorage filter state
    sessionStorage.removeItem('projectsFilterMode');
    
    // Increment key to force remount of HomePage and all its children
    setResetKey(prev => prev + 1);
    
    // Scroll to top instantly (no smooth behavior)
    window.scrollTo(0, 0);
    
    // Clear any hash from URL
    window.history.replaceState(null, '', '/');
  };

  const initializeHomePage = () => {
    // Just scroll to top without clearing state
    // This is for when navigating TO home page from another page
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <HomePageResetContext.Provider value={{ resetKey, resetHomePage, initializeHomePage }}>
      {children}
    </HomePageResetContext.Provider>
  );
}

export function useHomePageReset() {
  const context = useContext(HomePageResetContext);
  if (context === undefined) {
    throw new Error('useHomePageReset must be used within a HomePageResetProvider');
  }
  return context;
}