import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/core/router/AppRouter";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter>
            <AppRouter/>
                <Toaster position="top-right" duration={1000}/>
        </BrowserRouter>
         </ThemeProvider>
    );
}

export default App;
