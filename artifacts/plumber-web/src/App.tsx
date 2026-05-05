import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import AboutPage from "@/pages/AboutPage";
import ReviewsPage from "@/pages/ReviewsPage";
import PlansPage from "@/pages/PlansPage";
import EmergencyPage from "@/pages/EmergencyPage";
import BookingPage from "@/pages/BookingPage";
import ContactPage from "@/pages/ContactPage";
import CareersPage from "@/pages/CareersPage";
import LegalPage from "@/pages/LegalPage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <RootLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/:slug" component={ServiceDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/plans" component={PlansPage} />
        <Route path="/emergency" component={EmergencyPage} />
        <Route path="/booking" component={BookingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/careers" component={CareersPage} />
        <Route path="/privacy">{() => <LegalPage type="privacy" />}</Route>
        <Route path="/terms">{() => <LegalPage type="terms" />}</Route>
        <Route path="/license">{() => <LegalPage type="license" />}</Route>
        <Route component={NotFoundPage} />
      </Switch>
    </RootLayout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}