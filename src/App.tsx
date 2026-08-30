import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LivingModelPage } from './pages/LivingModelPage';
import { AgentsPage } from './pages/AgentsPage';
import { SecurityPage } from './pages/SecurityPage';
import { MemoryPage } from './pages/MemoryPage';
import { Contact } from './pages/Contact';
import { LegalPage } from './pages/LegalPage';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living-model" element={<LivingModelPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
