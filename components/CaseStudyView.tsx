
import React, { useEffect, useRef, useState } from 'react';
import { CaseStudy } from '../types';
import { Eye, Target, Workflow, Palette, CheckCircle2 } from 'lucide-react';

interface CaseStudyViewProps {
  study: CaseStudy;
}

const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-up-element ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

const SectionHeading: React.FC<{ title: string; icon: React.ElementType }> = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-4 cursor-default mb-12 relative">
    <div className="w-12 h-12 flex items-center justify-center relative">
      <Icon className="w-8 h-8 text-black stroke-[1.5px] opacity-100 absolute" />
    </div>
    <h2 className="text-3xl font-serif-heading font-semibold text-gray-900">
      {title}
    </h2>
  </div>
);

const GalleryBlockHeading: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
    <p className="text-gray-600 font-light text-sm md:text-base max-w-2xl">{description}</p>
  </div>
);

const HIGHER_ED_ROW_1 = [
  'assets/imgs/HigherEd/TPP_MusicEngineering_Versioning_2-0022-ezgif.com-video-to-gif-converter.gif',
  'assets/imgs/HigherEd/Desktop - 8.jpg',
];
const HIGHER_ED_ROW_2_SIMMONS = [
  'assets/imgs/HigherEd/Simmons_AWRT_2_002.gif',
  'assets/imgs/HigherEd/Simmons_AWRT_3_002-ezgif.com-video-to-gif-converter.gif',
];
const HIGHER_ED_ROW_3_UNNAMED = [
  'assets/imgs/HigherEd/unnamed-2.gif',
  'assets/imgs/HigherEd/unnamed.gif',
];
const HIGHER_ED_ROW_2_FULL = 'assets/imgs/HigherEd/Desktop - 6.jpg';
const HIGHER_ED_ROW_3_FULL = 'assets/imgs/HigherEd/Desktop - 9.jpg';
const HIGHER_ED_BETWEEN_GIFS = 'assets/imgs/HigherEd/Desktop - 7.jpg';
const HIGHER_ED_DESKTOP = [
  'assets/imgs/HigherEd/Desktop - 2.jpg',
  'assets/imgs/HigherEd/Desktop - 4.jpg',
  'assets/imgs/HigherEd/Desktop - 5.jpg',
];

const MCDONALDS_GALLERY_GRID_4 = [
  'assets/imgs/Mcdonalds/IHUsE9aVdEHPrcf2LaRZdN9th6c.png.webp',
  'assets/imgs/Mcdonalds/uAtdCtqR69anravVJfnxNYeg.png.webp',
  'assets/imgs/Mcdonalds/4XsAkMo1LUqSy5HYVvNQrpcGWwI.png.webp',
  'assets/imgs/Mcdonalds/BZVXaeFgM7qknbDV2cYYhcaaE.png.webp',
];
const MCDONALDS_FULL_WIDTH_1 = 'assets/imgs/Mcdonalds/MDttHhf5aErkP5lFGprSH0tl10.png.webp';
const MCDONALDS_FULL_WIDTH_2 = 'assets/imgs/Mcdonalds/TsvuOqwvcrGMJKnRGwEf7lARjVk.png.webp';
const MCDONALDS_GALLERY_ROW_2 = [
  'assets/imgs/Mcdonalds/fzwbpbdhFVLhAWhcUm6yr2PMog.png.webp',
  'assets/imgs/Mcdonalds/CwHPBomIJykO7JgFCOElWYDbz3c.png.webp',
];

const EDITORIAL_THIRD_PLACE = [
  'assets/imgs/Editorial/The Third Place/Desktop - 13.jpg',
  'assets/imgs/Editorial/The Third Place/Desktop - 14.jpg',
  'assets/imgs/Editorial/The Third Place/Desktop - 15.jpg',
  'assets/imgs/Editorial/The Third Place/Desktop - 16.jpg',
  'assets/imgs/Editorial/The Third Place/Desktop - 17.jpg',
  'assets/imgs/Editorial/The Third Place/Desktop - 18.jpg',
];

const EDITORIAL_GEORGETOWN = [
  'assets/imgs/Editorial/Georgetown Magazine/Desktop - 20.jpg',
  'assets/imgs/Editorial/Georgetown Magazine/Desktop - 21.jpg',
];

const EDITORIAL_NIGHTLY = [
  'assets/imgs/Editorial/The Nightly/Desktop - 23.jpg',
  'assets/imgs/Editorial/The Nightly/Desktop - 22.jpg',
  'assets/imgs/Editorial/The Nightly/Desktop - 24.jpg',
];

const FACELESS_IMAGES = [
  'assets/imgs/Faceless Affair/1.png.webp',
  'assets/imgs/Faceless Affair/2.png.webp',
  'assets/imgs/Faceless Affair/3.png.webp',
];

const FACELESS_GIFS = [
  'assets/imgs/Faceless Affair/5.gif',
  'assets/imgs/Faceless Affair/4.gif',
  'assets/imgs/Faceless Affair/6.gif',
  'assets/imgs/Faceless Affair/7.gif',
  'assets/imgs/Faceless Affair/8.gif',
  'assets/imgs/Faceless Affair/9.gif',
  'assets/imgs/Faceless Affair/10.gif',
  'assets/imgs/Faceless Affair/11.gif',
  'assets/imgs/Faceless Affair/12.gif',
];

const NdaCallout: React.FC = () => (
  <div className="rounded-2xl bg-[#e6efff] p-8 md:p-10 max-w-2xl">
    <p className="text-xl md:text-2xl font-light font-['IBM_Plex_Serif'] text-gray-900 mb-2">
      This work cannot be publicly shared yet
    </p>
    <p className="text-base md:text-lg font-light font-['IBM_Plex_Serif'] text-gray-700 mb-6">
      Please reach out for more info about my process!
    </p>
    <a
      href="mailto:wandafelsen@gmail.com"
      className="inline-block px-6 py-3 rounded-xl bg-[#2e2e2e] text-white text-sm font-medium hover:opacity-90 transition-opacity"
    >
      Contact
    </a>
  </div>
);

const ResearchDeckCallout: React.FC<{ deckUrl?: string }> = ({ deckUrl = '#' }) => (
  <div className="rounded-2xl bg-[#e0e7ff] p-8 md:p-10 max-w-2xl">
    <p className="text-xl md:text-2xl font-light font-['IBM_Plex_Serif'] text-gray-900 mb-2">
      Interested in learning more about my process?
    </p>
    <p className="text-base md:text-lg font-light text-gray-700 mb-6">
      See my full research deck here.
    </p>
    <a
      href={deckUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 rounded-xl bg-[#212529] text-white text-sm font-medium hover:opacity-90 transition-opacity"
    >
      Research Deck
    </a>
  </div>
);

const MTA_GIFS = [
  'assets/MTA/ezgif.com-optimize (1).gif',
  'assets/MTA/Air7GrLLZ576mafZW991PNnKQI-ezgif.com-optimize.gif',
  'assets/MTA/DwXS158YuVYtowiM5GHfhzWJgc-ezgif.com-optimize.gif',
  'assets/MTA/sTA8Ojju19thyUAgmzGCvHflo-ezgif.com-optimize.gif',
];

const CaseStudyView: React.FC<CaseStudyViewProps> = ({ study }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const isMcdonalds = study.slug === 'mcdonalds-game';
  const isHigherEd = study.slug === 'higher-ed-campaign' || study.id === 4;
  const isMTA = study.slug === 'mta-open-source' || study.id === 2;
  const isEditorial = study.slug === 'editorial-design' || study.id === 5;
  const isFaceless = study.slug === 'faceless-affair' || study.id === 3;

  const sections = isMcdonalds
    ? [
        { id: 'overview', label: 'Background', icon: Eye },
        { id: 'speculative', label: 'Speculative MLB', icon: Target },
        { id: 'visuals', label: 'Gallery', icon: Palette },
        { id: 'final', label: 'Final Thoughts', icon: CheckCircle2 },
      ]
    : isHigherEd
    ? [
        { id: 'overview', label: 'Digital campaigns', icon: Eye },
        { id: 'visuals', label: 'Gallery', icon: Palette },
      ]
    : isMTA
    ? [
        { id: 'overview', label: 'Background', icon: Eye },
        { id: 'process', label: 'Process', icon: Workflow },
        { id: 'features', label: 'Features', icon: Target },
        { id: 'final', label: 'Final Thoughts', icon: CheckCircle2 },
      ]
    : isEditorial
    ? [
        { id: 'overview', label: 'Overview', icon: Eye },
        { id: 'third-place', label: 'The Third Place', icon: Target },
        { id: 'georgetown', label: 'Georgetown Magazines', icon: Target },
        { id: 'nightly', label: 'The Nightly', icon: Palette },
      ]
    : isFaceless
    ? [
        { id: 'overview', label: 'Background', icon: Eye },
        { id: 'experience', label: 'The Experience', icon: Target },
        { id: 'how-might-we', label: 'How Might We', icon: Workflow },
        { id: 'journey', label: 'User Journey', icon: Workflow },
        { id: 'visual-design', label: 'Visual Design', icon: Palette },
        { id: 'final', label: 'Final Thoughts', icon: CheckCircle2 },
      ]
    : [
        { id: 'overview', label: 'Overview', icon: Eye },
        { id: 'challenge', label: 'The Challenge', icon: Target },
        { id: 'process', label: 'Process', icon: Workflow },
        { id: 'visuals', label: 'Visual System', icon: Palette },
        { id: 'final', label: 'Final Result', icon: CheckCircle2 },
      ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Space for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full text-black bg-white min-h-screen">
      {/* 1. Impact Hero Image */}
      <div className="w-full h-[52vh] md:h-[59vh] relative overflow-hidden bg-black flex items-center justify-center">
        <img 
          src={
            isMcdonalds
              ? 'assets/imgs/Mcdonalds/ld4tdsEQzQw9aIQj47eO0ZamxY (1).avif'
              : isMTA
              ? 'assets/imgs/MTA/WsdxxC4cphhRoECrkAfFh526E.avif'
              : study.slug === 'editorial-design'
              ? 'assets/imgs/Editorial/2I7GWougET3BKSbEA8Rqq5vg.png'
              : study.imageUrl
          } 
          alt={study.title}
          className={`h-full opacity-90 transition-opacity duration-1000 ${
            isMTA ? 'w-auto max-w-[70%] object-contain' : 'w-full object-cover'
          }`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto pt-16 md:pt-20 pb-48">
          {/* Header Section */}
          <div className="mb-24 md:mb-32">
            <FadeInSection>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4 font-mono-tag">
                {study.category || "Case Study"}
              </p>
              <h1 className="text-[1.9125rem] md:text-[3.825rem] font-light font-['IBM_Plex_Serif'] tracking-tight mb-6 leading-[1.0] text-gray-900 max-w-3xl">
                {study.title}
              </h1>
              <p className="text-[0.875rem] md:text-[1.3125rem] text-gray-400 font-light leading-snug max-w-2xl mb-16">
                {study.subhead || study.description}
              </p>
            </FadeInSection>
            
            <FadeInSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pt-8 border-t border-gray-100">
              <div>
                <p className="text-[10px] uppercase tracking-normal text-black font-bold mb-3 font-mono-tag">Timeline</p>
                <p className="text-gray-400 text-sm font-light">{study.timeline || '5 Weeks'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-normal text-black font-bold mb-3 font-mono-tag">Role</p>
                <p className="text-gray-400 text-sm font-light whitespace-pre-line">{study.role || 'Designer,\nDeveloper'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-normal text-black font-bold mb-3 font-mono-tag">Tools</p>
                <p className="text-gray-400 text-sm font-light">{study.tools || 'Figma, React'}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-normal text-black font-bold mb-3 font-mono-tag">Year</p>
                <p className="text-gray-400 text-sm font-light">{study.year ?? '2024'}</p>
              </div>
            </FadeInSection>
          </div>

          {/* Sticky Container */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-24 items-start">
            {/* Index Sidebar (hidden on mobile) */}
            <aside className="hidden md:block md:w-[120px] sticky top-40 mb-12 md:mb-0 h-fit shrink-0 md:-ml-6 lg:-ml-10">
              <nav className="flex flex-col gap-6">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left text-[10px] md:text-[12px] uppercase tracking-widest transition-all duration-500 font-mono-tag ${
                      activeSection === section.id 
                        ? 'text-black font-bold opacity-100 scale-105 origin-left' 
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content Body */}
            <div className="flex-1 space-y-[6.4rem] overflow-visible">
              {isHigherEd ? (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Digital campaigns" icon={Eye} />
                      <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                        While at Viv Higher Ed, I have designed multiple higher education campaigns. For these campaigns, I created moodboards, designed concepts, animated videos, and resized assets for a variety of digital channels.
                      </p>
                    </FadeInSection>
                  </section>

                  <section id="visuals" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Gallery" icon={Palette} />
                      <div className="space-y-8">
                        <GalleryBlockHeading title="Lead campaign visuals" description="TPP Music Engineering and key campaign imagery for digital channels." />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
                          <div className="flex items-center justify-center overflow-hidden sm:col-span-1 p-4">
                            <img src={encodeURI(HIGHER_ED_ROW_1[0])} alt="TPP Music Engineering" className="h-full w-[75%] max-w-full object-contain object-center rounded-lg" />
                          </div>
                          <div className="flex items-center justify-center overflow-hidden sm:col-span-2">
                            <img src={encodeURI(HIGHER_ED_ROW_1[1])} alt="Higher ed campaign" className="h-full w-auto max-w-full object-contain object-center" />
                          </div>
                        </div>
                        <div className="relative w-full">
                          <img src={encodeURI(HIGHER_ED_ROW_2_FULL)} alt="Higher ed campaign" className="w-full h-auto block" />
                        </div>
                        <GalleryBlockHeading title="Campaign imagery" description="Full-width campaign assets and Simmons University animated content." />
                        <div className="relative w-full">
                          <img src={encodeURI(HIGHER_ED_ROW_3_FULL)} alt="Higher ed campaign" className="w-full h-auto block" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
                          {HIGHER_ED_ROW_2_SIMMONS.map((src, i) => (
                            <div key={i} className="relative w-full flex items-center justify-center p-6">
                              <img src={encodeURI(src)} alt={`Simmons campaign ${i + 1}`} className="w-[75%] h-auto block rounded-lg" />
                            </div>
                          ))}
                        </div>
                        <GalleryBlockHeading title="Campaign asset" description="Additional full-width creative for the campaign." />
                        <div className="relative w-full">
                          <img src={encodeURI(HIGHER_ED_BETWEEN_GIFS)} alt="Higher ed campaign" className="w-full h-auto block" />
                        </div>
                        <GalleryBlockHeading title="Animated content" description="Motion and GIF-based campaign pieces." />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
                          {HIGHER_ED_ROW_3_UNNAMED.map((src, i) => (
                            <div key={i} className="relative w-full flex items-center justify-center p-6">
                              <img src={encodeURI(src)} alt={`Campaign ${i + 1}`} className="w-[75%] h-auto block rounded-lg" />
                            </div>
                          ))}
                        </div>
                        {HIGHER_ED_DESKTOP.map((src, i) => (
                          <div key={i}>
                            <GalleryBlockHeading title={`Campaign image ${i + 1}`} description="Desktop and digital campaign asset." />
                            <div className="relative w-full">
                              <img src={encodeURI(src)} alt={`Higher ed desktop ${i + 1}`} className="w-full h-auto block" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </FadeInSection>
                  </section>
                </>
              ) : isMcdonalds ? (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Background" icon={Eye} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-12">
                        <p className="max-w-2xl">
                          I worked as a designer on the McDonald's powerups team at The Marketing Store for 6 months. The digital team focuses on designing mobile games that pair with current Happy Meal toy series. I worked on the UI design, websites, character and background illustrations, QA testing, and animation storyboards for multiple mobile web games. The games I designed for included IPs from anime, McDonald's original characters, and movies.
                        </p>
                        <NdaCallout />
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="speculative" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Speculative MLB campaign" icon={Target} />
                      <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                        While at tms, I worked on a speculative design project where teams explored different potential sports collaborations. My team focused on the World Series and MLB, and I designed, 3D-modelled, and art directed all aspects of the project.
                      </p>
                    </FadeInSection>
                  </section>

                  <section id="visuals" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Gallery" icon={Palette} />
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-8">
                          {MCDONALDS_GALLERY_GRID_4.map((src, i) => (
                            <div key={i} className="relative overflow-hidden aspect-[4/3]">
                              <img src={src} alt={`McDonald's project ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        <div className="relative w-full">
                          <img src={MCDONALDS_FULL_WIDTH_1} alt="McDonald's project" className="w-full h-auto block" />
                        </div>
                        <div className="relative w-full">
                          <img src={MCDONALDS_FULL_WIDTH_2} alt="McDonald's project" className="w-full h-auto block" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-8">
                          {MCDONALDS_GALLERY_ROW_2.map((src, i) => (
                            <div key={i} className="relative overflow-hidden aspect-[4/3]">
                              <img src={src} alt={`McDonald's project ${i + 5}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="final" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Final Thoughts" icon={CheckCircle2} />
                      <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                        Designing for games with global releases that required localization, coordination with the packaging and toys teams, and input from IP owners made me realize the importance of a flexible design system.
                      </p>
                    </FadeInSection>
                  </section>
                </>
              ) : isMTA ? (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Background" icon={Eye} />
                      <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                        The MTA publishes open source data on their website on a variety of topics. I wanted to challenge myself to create a data visualization of their user ridership data. I decided to combine this data set with publicly-available weather data.
                      </p>
                    </FadeInSection>
                  </section>

                  <section id="process" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Process" icon={Workflow} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-12 max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">Low-Fidelity Sketches</h3>
                            <p>Initial sketches included linear bar graphs and scatter plots but evolved into a radial format for a compact solution. User testing with early wireframes revealed that radial designs were more intuitive for visualizing cyclic patterns.</p>
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">Figma Prototype</h3>
                            <p>I developed a high-fidelity prototype in Figma of the sidebar to visualize how users might interact with the data.</p>
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">Code Development</h3>
                            <p><strong>Data Cleaning:</strong> Python for preprocessing. <strong>Visualization:</strong> D3.js for creating interactive radial graphs. <strong>User Interface:</strong> HTML, CSS for web development.</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">Animated Weather Patterns</h3>
                          <p>I animated four different weather patterns in Adobe AfterEffects to add a responsive visual element in the center of the circle chart.</p>
                        </div>
                        <div className="relative w-full max-w-3xl aspect-video rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/FyN8XrWWyM8?si=MC_wvr1oqq5HVJsQ&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=FyN8XrWWyM8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <ResearchDeckCallout />
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="features" className="scroll-mt-40 bg-gray-100 rounded-2xl -mx-6 md:mx-0 lg:mx-0 px-6 md:px-12 lg:px-16 py-12 md:py-16">
                    <FadeInSection>
                      <SectionHeading title="Features" icon={Target} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-12">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2 max-w-2xl">Transit Mode Selection</h3>
                          <p className="max-w-2xl">Users can toggle between buses, trains, or both using the lefthand side bar.</p>
                          <div className="mt-6 w-full">
                            <img src={encodeURI(MTA_GIFS[3])} alt="Transit mode selection" className="w-full h-auto block rounded-lg" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2 max-w-2xl">Temperature</h3>
                          <p className="max-w-2xl">Users can specify a specific temperature range by manually inputting the highest and lowest temperatures, or by simply using the slider bar.</p>
                          <div className="mt-6 w-full">
                            <img src={encodeURI(MTA_GIFS[0])} alt="Temperature controls" className="w-full h-auto block rounded-lg" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2 max-w-2xl">Weather Patterns</h3>
                          <p className="max-w-2xl">I simplified the range of weather patterns into four categories; sunny, cloudy, snowy, and rainy. Users can select each or multiple to see where the weather patterns overlap. For example, selecting both rainy and cloudy, or both sunny and snowy.</p>
                          <div className="mt-6 w-full">
                            <img src={encodeURI(MTA_GIFS[2])} alt="Weather patterns" className="w-full h-auto block rounded-lg" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2 max-w-2xl">Hover States</h3>
                          <p className="max-w-2xl">By hovering over the transport mode/population graphs users can see the weather information and daily average of riders. By hovering over the temperature range circle, an animation of each weather pattern is displayed in the center of the visualization.</p>
                          <div className="mt-6 w-full">
                            <img src={encodeURI(MTA_GIFS[1])} alt="Hover states" className="w-full h-auto block rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="final" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Final Thoughts" icon={CheckCircle2} />
                      <div className="space-y-10 max-w-2xl">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">What I Learned</h3>
                          <p className="text-gray-600 font-light text-lg leading-relaxed">
                            By doing the research on what was feasible with D3.js, I was better prepared to create an interactive infographic. There are so many publicly available data sets published by governments, nonprofits, and companies. I am interested in the challenge of making the data more interesting or useful to the average person.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">Future Considerations</h3>
                          <ul className="text-gray-600 font-light text-lg leading-relaxed list-disc list-inside space-y-2">
                            <li>Fixing coding bugs and publishing the dashboard to Github!</li>
                            <li>Experimenting more with UI motion design.</li>
                          </ul>
                        </div>
                      </div>
                    </FadeInSection>
                  </section>
                </>
              ) : isEditorial ? (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Editorial Design" icon={Eye} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-6 max-w-[1240px]">
                        <p>
                          Designing for print is how I first learned fundamental design skills such as hierarchy, alignment, and typography.
                        </p>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="third-place" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="The Third Place" icon={Target} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-[1240px]">
                        <p>
                          A personal project where I created a magazine about some of Washington DC&apos;s lesser-known attractions.
                          I was interested in exploring the concept of &quot;the third place,&quot; which refers to the social surroundings
                          that are separate from the two usual social environments of home and the workplace.
                        </p>
                        <div className="space-y-6">
                          {EDITORIAL_THIRD_PLACE.map((src, index) => (
                            <div key={index} className="relative w-full">
                              <img
                                src={encodeURI(src)}
                                alt={`The Third Place spread ${index + 1}`}
                                className="w-full h-auto block"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="georgetown" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Georgetown Magazine &amp; Georgetown Health" icon={Target} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-[1240px]">
                        <p>
                          Each year Georgetown publishes four issues of Georgetown Magazine and four issues of Georgetown Health.
                          I have designed multiple features, created illustrations, scheduled photoshoots, delved into research
                          for articles, and on one occasion acted as a hand model.
                        </p>
                        <div className="space-y-6">
                          {EDITORIAL_GEORGETOWN.map((src, index) => (
                            <div key={index} className="relative w-full">
                              <img
                                src={encodeURI(src)}
                                alt={`Georgetown magazine spread ${index + 1}`}
                                className="w-full h-auto block"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="nightly" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="The Nightly" icon={Palette} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-[1240px]">
                        <p>
                          Spreads from a 32-page magazine I designed about dreams and sleep. For the &quot;Sleep Experts&quot; article,
                          we interviewed experts including writers, psychologists, and scientists studying sleep.
                        </p>
                        <div className="space-y-6">
                          {EDITORIAL_NIGHTLY.map((src, index) => (
                            <div key={index} className="relative w-full">
                              <img
                                src={encodeURI(src)}
                                alt={`The Nightly spread ${index + 1}`}
                                className="w-full h-auto block"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInSection>
                  </section>
                </>
              ) : isFaceless ? (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Background" icon={Eye} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-2xl">
                        <p>
                          This project was created at VCU Brandcenter for our Physical Computing class. Our task was to design an experience with physical and digital components for a piece of media.
                          Our team chose <em>Knives Out</em> for our piece of media, a movie series about Benoit Blanc, a detective who solves mysteries.
                        </p>
                        {FACELESS_IMAGES[0] && (
                          <div className="relative w-full">
                            <img
                              src={FACELESS_IMAGES[0]}
                              alt="Faceless Affair key art"
                              className="w-full h-auto block"
                            />
                          </div>
                        )}
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="experience" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="The Experience" icon={Target} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-2xl">
                        <p>
                          We landed on creating a murder mystery game with an additional digital app component. We decided on this strategy because, like the <em>Knives Out</em> movie series, we wanted
                          to add a twist to a classic format.
                        </p>
                        {FACELESS_IMAGES[1] && (
                          <div className="relative w-full">
                            <img
                              src={FACELESS_IMAGES[1]}
                              alt="Faceless Affair app overview"
                              className="w-full h-auto block"
                            />
                          </div>
                        )}
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="how-might-we" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="How Might We…" icon={Workflow} />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600 font-light text-lg leading-relaxed max-w-[65%]">
                        <p>Translate the experience of watching a movie or piece of media into an interactive experience?</p>
                        <p>Engage the user both in a physical and digital environment?</p>
                        <p>Refresh the classic murder-mystery dinner format into something new?</p>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="journey" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="The User Journey" icon={Workflow} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-8 max-w-2xl">
                        <p>
                          Our team spent a lot of time—and used countless flash cards—to figure out the game system for the experience. We explored multiple versions of the game and thought about
                          questions such as: Are all the characters completing the same actions? How are they interacting with the physical and digital space? What are the win/lose cases?
                        </p>
                        <p>
                          Ultimately, we settled on a game where one player becomes the murderer while the rest of the group acts as detectives. However, both teams complete the same scanning action
                          with their phones to collect clues in their inventory. While the murderer is looking for clues to solve the original “fabulous prize” task, the rest of the characters are
                          looking for clues about the murderer.
                        </p>
                        {FACELESS_IMAGES[2] && (
                          <div className="relative w-full rounded-2xl bg-gray-800 p-3 md:p-4 overflow-hidden">
                            <img
                              src={FACELESS_IMAGES[2]}
                              alt="Faceless Affair journey map"
                              className="w-full h-auto block rounded-xl"
                            />
                          </div>
                        )}
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="visual-design" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Visual & Experience Design" icon={Palette} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-10 max-w-[1240px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Visual Design</h3>
                            <p className="">
                              I designed the logo in Adobe Illustrator, aiming to straddle the line between whimsical and elegant. We created imagery using Midjourney for the host character and
                              environments. In the future, I hope to further develop this project by 3D modeling each room the players go through.
                            </p>
                          </div>
                            {FACELESS_GIFS[0] && (
                              <div className="relative w-full flex justify-center">
                                <img
                                  src={FACELESS_GIFS[0]}
                                  alt="Faceless Affair visual design animation"
                                  className="w-full md:max-w-[65%] h-auto block rounded-[3rem]"
                                />
                              </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Digital Invitation</h3>
                            <p className="">
                              The players receive a digital invitation via text link that leads to a puzzle and an invitation to the manor, setting the tone for the experience before they arrive.
                            </p>
                          </div>
                            {FACELESS_GIFS[1] && (
                              <div className="relative w-full flex justify-center">
                                <img
                                  src={FACELESS_GIFS[1]}
                                  alt="Faceless Affair digital invitation"
                                  className="w-full md:max-w-[65%] h-auto block rounded-[3rem]"
                                />
                              </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Face Filter</h3>
                            <p className="">
                              We envision face filters for each game character, allowing users to share their excitement on social media. I created this filter using Procreate to illustrate the mask
                              design and Spark AR Studio to map it to the user&apos;s face.
                            </p>
                          </div>
                            {FACELESS_GIFS[2] && (
                              <div className="relative w-full flex justify-center">
                                <img
                                  src={FACELESS_GIFS[2]}
                                  alt="Faceless Affair face filter"
                                  className="w-full md:max-w-[65%] h-auto block rounded-[3rem]"
                                />
                              </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div>
                            <h3 className="text-base font-semibold text-gray-900 mb-1">The Manor & Entry</h3>
                            <p className="">
                              When the players enter the manor, they receive phones with the app pre-loaded in the reception room at the beginning of the experience. Each phone has a privacy screen to
                              prevent other players from looking at each other’s screens.
                            </p>
                          </div>
                            {FACELESS_GIFS[3] && (
                              <div className="relative w-full flex justify-center">
                                <img
                                  src={FACELESS_GIFS[3]}
                                  alt="Faceless Affair manor entry"
                                  className="w-full md:max-w-[65%] h-auto block rounded-[3rem]"
                                />
                              </div>
                            )}
                        </div>

                        <div className="w-full">
                          <h3 className="text-base font-semibold text-gray-900 mb-1">Character Selection</h3>
                          <p className="">
                            Through the app, players are introduced to the cast of characters and select their role for the evening, aligning narrative expectations with gameplay.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                          <div className="md:col-span-1">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Scanning for Clues</h3>
                            <p className="">
                              Players can scan items marked with a special symbol and collect them in their digital inventory. I modeled the clue items in the 3D app Nomad and added additional texture in
                              Blender.
                            </p>
                          </div>
                          {(FACELESS_GIFS[5] || FACELESS_GIFS[6] || FACELESS_GIFS[4]) && (
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                              {[FACELESS_GIFS[5], FACELESS_GIFS[6], FACELESS_GIFS[4]].filter(Boolean).map((src, index) => (
                                <div key={index} className="relative w-full flex justify-center">
                                  <img
                                    src={src}
                                    alt={`Faceless Affair scanning clues ${index + 1}`}
                                    className="w-full h-auto block rounded-[3rem]"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                          <div className="md:col-span-1">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Accuse the Murderer</h3>
                            <p className="">
                              From the home screen, players can select which player to accuse of being the murderer and solve the mystery. We created distinct win and lose states depending on the
                              outcome of the game.
                            </p>
                          </div>
                            <div className="md:col-span-2 flex gap-6 justify-center items-center">
                              {FACELESS_GIFS[7] && (
                                <div className="relative flex-1 min-w-0 flex justify-center">
                                  <img
                                    src={FACELESS_GIFS[7]}
                                    alt="Faceless Affair accuse the murderer 1"
                                    className="w-full h-auto block rounded-[3rem]"
                                  />
                                </div>
                              )}
                              {FACELESS_GIFS[8] && (
                                <div className="relative flex-1 min-w-0 flex justify-center">
                                  <img
                                    src={FACELESS_GIFS[8]}
                                    alt="Faceless Affair accuse the murderer 2"
                                    className="w-full h-auto block rounded-[3rem]"
                                  />
                                </div>
                              )}
                            </div>
                        </div>

                        {/* Extra gifs as a small motion gallery (any beyond index 8) */}
                        {FACELESS_GIFS.slice(9).length > 0 && (
                          <div className="space-y-4 pt-4">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">Additional Motion Explorations</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                              {FACELESS_GIFS.slice(9).map((src, index) => (
                                <div key={index} className="relative w-full flex justify-center">
                                  <img
                                    src={src}
                                    alt={`Faceless Affair motion ${index + 1}`}
                                    className="w-full md:max-w-[75%] h-auto block rounded-[3rem]"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="final" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Final Thoughts" icon={CheckCircle2} />
                      <div className="space-y-10 max-w-2xl">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">What We Learned</h3>
                          <p className="text-gray-600 font-light text-lg leading-relaxed">
                            Through this project, I became more familiar with app design, game design, and the challenges of translating a cinematic experience into an interactive one that lives across
                            both physical and digital touchpoints.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 mb-2">Future Considerations</h3>
                          <ul className="text-gray-600 font-light text-lg leading-relaxed list-disc list-inside space-y-2">
                            <li>Building out the rest of the characters and clues.</li>
                            <li>Creating alternate plots for different characters as the murderer.</li>
                            <li>Potentially expanding to new rooms and settings.</li>
                          </ul>
                        </div>
                      </div>
                    </FadeInSection>
                  </section>
                </>
              ) : (
                <>
                  <section id="overview" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Project Context" icon={Eye} />
                      <div className="text-gray-600 font-light text-lg leading-relaxed space-y-12">
                        <p className="max-w-2xl">
                          My approach focused on translating raw architectural intent into fluid human experiences. By dissecting the user journey, we identified friction points that weren't just functional, but emotional.
                        </p>
                        <div className="relative w-full">
                           <img 
                            src={`https://picsum.photos/seed/${study.slug}-context/1800/1100`} 
                            className="w-full h-auto block" 
                            alt="Context visual" 
                          />
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="challenge" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="The Challenge" icon={Target} />
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 text-gray-600 font-light text-lg leading-relaxed space-y-8">
                          <p>
                            Designing for complex systems requires a balance of logic and intuition. The primary hurdle was making high-density information feel breathable and actionable.
                          </p>
                          <ul className="space-y-6 text-sm text-gray-500 font-mono-tag">
                            <li className="flex items-start gap-4">
                              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                              Bridging the gap between legacy data and modern UI.
                            </li>
                            <li className="flex items-start gap-4">
                              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                              Maintaining performance across low-bandwidth environments.
                            </li>
                          </ul>
                        </div>
                        <div className="lg:col-span-7 aspect-square md:aspect-[16/10] overflow-hidden relative flex items-center justify-center">
                            <img src={`assets/imgs/Case1.png`} className="w-full h-full object-contain opacity-80" alt="Challenge visual" />
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="process" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Process" icon={Workflow} />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mb-24">
                        <div className="space-y-6">
                          <span className="text-[10px] text-gray-300 font-bold font-mono-tag">01 / Exploration</span>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">Early sketches and conceptual frameworks.</p>
                        </div>
                        <div className="space-y-6">
                          <span className="text-[10px] text-gray-300 font-bold font-mono-tag">02 / Iteration</span>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">Rapid prototyping and continuous feedback loops.</p>
                        </div>
                        <div className="space-y-6">
                          <span className="text-[10px] text-gray-300 font-bold font-mono-tag">03 / Synthesis</span>
                          <p className="text-sm text-gray-600 font-light leading-relaxed">Finalizing the atomic design language.</p>
                        </div>
                      </div>
                      <div className="w-full">
                          <img src={`https://picsum.photos/seed/${study.slug}-process/2200/1000`} className="w-full h-auto block" alt="Process panorama" />
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="visuals" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Visual System" icon={Palette} />
                      <div className="space-y-16">
                        <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                          A cohesive visual language was established to ensure brand resonance across all touchpoints.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="aspect-square bg-gray-50 rounded-2xl p-16 flex flex-col justify-center border border-gray-100">
                               <h4 className="font-mono-tag text-[10px] uppercase tracking-widest text-gray-300 mb-12">Typography</h4>
                               <p className="text-5xl md:text-7xl font-serif-heading italic text-black">A a</p>
                               <p className="mt-4 text-xs font-mono-tag text-gray-400">IBM Plex Serif / Regular & Italic</p>
                            </div>
                            <div className="aspect-square bg-gray-50 rounded-2xl p-16 flex flex-col justify-center border border-gray-100">
                               <h4 className="font-mono-tag text-[10px] uppercase tracking-widest text-gray-300 mb-12">Type Scale</h4>
                               <div className="space-y-4">
                                 <div className="h-4 w-full bg-black/80 rounded-full" />
                                 <div className="h-4 w-3/4 bg-black/40 rounded-full" />
                                 <div className="h-4 w-1/2 bg-black/10 rounded-full" />
                               </div>
                            </div>
                        </div>
                      </div>
                    </FadeInSection>
                  </section>

                  <section id="final" className="scroll-mt-40">
                    <FadeInSection>
                      <SectionHeading title="Final Outcome" icon={CheckCircle2} />
                      <div className="space-y-20">
                        <p className="text-gray-600 font-light text-lg leading-relaxed max-w-2xl">
                          The resulting platform saw a 40% increase in user engagement by simplifying complex navigation and prioritizing contextual information.
                        </p>
                        <div className="w-full">
                            <img src={`https://picsum.photos/seed/${study.slug}-final/2000/1125`} className="w-full h-auto block" alt="Final product" />
                        </div>
                      </div>
                    </FadeInSection>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
