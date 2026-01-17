import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/contexts/ThemeContext';
import PasswordProtection from './pages/PasswordProtection';
import Index from './pages/Index';
import Documentation from './pages/Documentation';
import Dashboard from './pages/Dashboard';
import Compliance from './pages/Compliance';
import ComplianceAssessment from './pages/ComplianceAssessment';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import AIDevelopment from './pages/AIDevelopment';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import ClientPortal from './pages/ClientPortal';
import NotFound from './pages/NotFound';
import LiveChat from '@/components/LiveChat';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <PasswordProtection>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/compliance-assessment" element={<ComplianceAssessment />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ai-development" element={<AIDevelopment />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/portal" element={<ClientPortal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <LiveChat />
            </BrowserRouter>
          </PasswordProtection>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;