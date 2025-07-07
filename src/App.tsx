import React from 'react';
import TopBar from './components/TopBar';
import MainNavigation from './components/MainNavigation';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MachineryGallery from './components/MachineryGallery';
import OurGlobalAssociates from './components/OurGlobalAssociates';
import NewsInsights from './components/NewsInsights';
import BlogSection from './components/BlogSection';
import RegionalOffices from './components/RegionalOffices';
import Testimonials from './components/Testimonials';
import SleekFooter from './components/SleekFooter';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <MainNavigation />

      {/* Add padding-top to offset fixed TopBar + MainNavigation */}
      <main className="pt-[56px] lg:pt-[60px]">
        <Hero />
        <AboutSection />
        <OurGlobalAssociates/>
        <MachineryGallery />
        <NewsInsights />
        <BlogSection />
        <RegionalOffices/>
        <Testimonials />
      </main>

      <SleekFooter />
    </div>
  );
}

export default App;
