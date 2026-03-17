
import React, { useState, useEffect, useMemo } from 'react';
import { Page, CaseStudy } from './types';
import Navbar from './components/Navbar';
import Branding from './components/Branding';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import Playground from './components/Playground';
import About from './components/About';
import Resume from './components/Resume';
import CaseStudyView from './components/CaseStudyView';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.WORK);
  const [displayPage, setDisplayPage] = useState<Page>(Page.WORK);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage !== displayPage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayPage(currentPage);
        setIsTransitioning(false);
        window.scrollTo(0, 0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentPage, displayPage]);

  const handleCaseStudySelect = (study: CaseStudy) => {
    setSelectedCaseStudy(study);
    setCurrentPage(Page.CASE_STUDY);
  };

  const handlePageChange = (page: Page) => {
    if (page === Page.WORK) {
      // Ensure hero gradient is visible immediately when returning home
      setScrollY(0);
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    }
    setSelectedCaseStudy(null);
    setCurrentPage(page);
  };

  // Gradient → white: 0 = only gradient visible, 1 = white overlay fully visible (for nav/branding and transition)
  const whiteFadeProgress = useMemo(() => {
    if (displayPage !== Page.WORK) return 1;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    const startFade = vh * 0.15;
    const endFade = vh * 0.85;
    if (scrollY <= startFade) return 0;
    if (scrollY >= endFade) return 1;
    const t = (scrollY - startFade) / (endFade - startFade);
    return t * t * (3 - 2 * t); // smoothstep for softer transition
  }, [scrollY, displayPage]);

  // Nav/branding: dark mode (light text) when we're still on the gradient
  const darkProgress = useMemo(() => 1 - whiteFadeProgress, [whiteFadeProgress]);

  // Determine if the current view (or scroll position) requires a Dark Mode (white text/icons)
  const isDarkMode = useMemo(() => {
    if (displayPage === Page.PLAYGROUND) return true;
    if (displayPage === Page.ABOUT || displayPage === Page.RESUME) return false;
    if (displayPage === Page.WORK) return darkProgress > 0.5;
    if (displayPage === Page.CASE_STUDY) {
      const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
      // Case study hero is roughly 80-90vh. Transition to light mode at 70vh scroll.
      return scrollY < vh * 0.7;
    }
    return false;
  }, [scrollY, displayPage, darkProgress]);

  const renderContent = () => {
    switch (displayPage) {
      case Page.WORK:
        return (
          <div className="w-full">
            <Hero />
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-20">
              <WorkGrid onSelectCaseStudy={handleCaseStudySelect} />
            </div>
          </div>
        );
      case Page.PLAYGROUND:
        return (
          <div className="w-full bg-black overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
              <Playground />
            </div>
          </div>
        );
      case Page.ABOUT:
        return (
          <div className="w-full">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-32">
              <About />
            </div>
          </div>
        );
      case Page.RESUME:
        return (
          <div className="w-full">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-32">
              <Resume />
            </div>
          </div>
        );
      case Page.CASE_STUDY:
        return selectedCaseStudy ? <CaseStudyView study={selectedCaseStudy} /> : null;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col transition-colors duration-500 ${displayPage === Page.PLAYGROUND ? 'bg-black' : 'bg-white'} selection:bg-gray-500 selection:text-white`}>
      {/* Work page: scroll-driven fade from gradient (opacity 0) to white (opacity 1) — no harsh line */}
      {displayPage === Page.WORK && (
        <div
          className="fixed inset-0 z-0 bg-white pointer-events-none will-change-opacity"
          style={{ opacity: whiteFadeProgress }}
        />
      )}
      <Branding isDarkMode={isDarkMode} onPageChange={handlePageChange} />
      
      <Navbar 
        activePage={currentPage === Page.CASE_STUDY ? Page.WORK : currentPage} 
        onPageChange={handlePageChange} 
        isScrolled={scrollY > 100} 
        isDarkMode={isDarkMode}
      />
      
      <main className={`flex-grow w-full relative z-10 transition-all duration-400 ease-in-out ${isTransitioning ? 'opacity-0 blur-xl' : 'opacity-100 blur-0'}`}>
        {renderContent()}
      </main>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
