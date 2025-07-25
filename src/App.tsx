import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
import SearchModal from './components/SearchModal';

import About from './pages/About';
import BlogListPage from './pages/blog/Page';
import BlogViewPage from './pages/blog/[id]/Page';
import NewsPage from './pages/news/page';
import NewsArticlePage from './pages/news/[id]/page';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurGlobalAssociates />
      <MachineryGallery />
      <NewsInsights />
      <BlogSection />
      <RegionalOffices />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />
      <MainNavigation />
      <SearchModal />

      <main className="pt-[56px] lg:pt-[60px]">
        <Routes>
          {/* ✅ Match homepage route */}
          <Route path="/" element={<HomePage />} />

          {/* ✅ About page */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogViewPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsArticlePage />} />
        </Routes>
      </main>

      <SleekFooter />
    </div>
  );
}

export default App;
