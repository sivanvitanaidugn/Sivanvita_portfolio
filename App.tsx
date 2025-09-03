
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OriginSparksPage from './pages/OriginSparksPage';
import CodeChroniclesPage from './pages/CodeChroniclesPage';
import BehindTheSyntaxPage from './pages/BehindTheSyntaxPage';
import GetInTouchPage from './pages/GetInTouchPage';
import AboutMePage from './pages/AboutMePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/origin-sparks" element={<OriginSparksPage />} />
        <Route path="/code-chronicles" element={<CodeChroniclesPage />} />
        <Route path="/behind-the-syntax" element={<BehindTheSyntaxPage />} />
        <Route path="/get-in-touch" element={<GetInTouchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;