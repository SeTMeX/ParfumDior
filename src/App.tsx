import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/core/router/AppRouter";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <BrowserRouter>
                    <AppRouter />
                    <Toaster position="top-right" duration={1000} />
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
