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
import Events from './custompages/media/events/page';
import About from './custompages/About';
import BlogListPage from './custompages/media/blog/Page';
import BlogViewPage from './custompages/media/blog/[title]/Page';
import NewsPage from './custompages/media/news/page';
import NewsArticlePage from './custompages/media/news/[title]/page';
import PressReleasesPage from './custompages/media/press/page';
import EventDetail from './custompages/media/events/[title]/page';
import InvestorRelations from './custompages/InvestorRelations';

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
          <Route path="/media/blog" element={<BlogListPage />} />
          <Route path="/media/blog/:postTitle" element={<BlogViewPage />} />
          <Route path="/media/news" element={<NewsPage />} />
          <Route path="/media/news/:title" element={<NewsArticlePage />} />
          <Route path="/media/events" element={<Events />} />
          <Route path="/media/press" element={<PressReleasesPage />} />
          <Route path="/media/events/:title" element={<EventDetail />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          
          {/* ✅ Catch-all for 404 */}
        </Routes>
      </main>

      <SleekFooter />
    </div>
  );
}

export default App;
