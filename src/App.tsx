import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import CadDesigning from "./pages/services/CadDesigning";
import Rendering from "./pages/services/Rendering";
import HiphopWork from "./pages/services/HiphopWork";
import FaceWork from "./pages/services/FaceWork";
import ManualDesigning from "./pages/services/ManualDesigning";
import Manufacturing from "./pages/services/Manufacturing";
import FileSelling from "./pages/services/FileSelling";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LoadingScreen />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cad-designing" element={<CadDesigning />} />
          <Route path="/services/rendering" element={<Rendering />} />
          <Route path="/services/hiphop-work" element={<HiphopWork />} />
          <Route path="/services/face-work" element={<FaceWork />} />
          <Route path="/services/manual-designing" element={<ManualDesigning />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/file-selling" element={<FileSelling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
