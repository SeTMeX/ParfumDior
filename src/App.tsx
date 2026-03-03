import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/core/header/Navbar";
import Footer from "./components/core/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* asta este in loc de bg */}
            <div className="pt-20 min-h-1000 bg-gradient-to-r from-slate-900 to-slate-400">
                salut
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;