import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/core/router/AppRouter";
import { Toaster } from "@/components/ui/sonner";

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
                <Toaster position="top-right" duration={1000}/>
        </BrowserRouter>
    );
}

export default App;
