
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import RequestPickup from "./pages/RequestPickup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import RequestDetails from "./pages/RequestDetails";
import EditRequest from "./pages/EditRequest";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Recycling from "./pages/Recycling";
import BulkWaste from "./pages/BulkWaste";
import CollectorRegistration from "./pages/CollectorRegistration";
import CollectorDashboard from "./pages/CollectorDashboard";
import CollectorProfile from "./pages/CollectorProfile";
import EditCollectorProfile from "./pages/EditCollectorProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/request" element={<RequestPickup />} />
          <Route path="/request/:id/details" element={<RequestDetails />} />
          <Route path="/request/:id/edit" element={<EditRequest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/recycling" element={<Recycling />} />
          <Route path="/bulk-waste" element={<BulkWaste />} />
          <Route path="/collector-registration" element={<CollectorRegistration />} />
          <Route path="/collector-dashboard" element={<CollectorDashboard />} />
          <Route path="/collector-profile" element={<CollectorProfile />} />
          <Route path="/collector-profile/edit" element={<EditCollectorProfile />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
