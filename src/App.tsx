// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const TestNotFound = () => (
  <div style={{ padding: '20px', color: 'red', backgroundColor: 'black' }}>
    <h1>404 - Page Not Found</h1>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
      {/* <Toaster /> */}
      {/* <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<TestNotFound />} />
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;
