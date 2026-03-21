import { Sun, Moon, Home} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface NavbarMobileMenuProps {
    onChangeLng: (lng: string) => void;
    cartCount?: number;
    onShowRegister: () => void;
    onShowLogin: () => void;
}


const NavbarMobileMenu = ({ onChangeLng, onShowRegister, onShowLogin}: NavbarMobileMenuProps) => {
    const { t } = useTranslation();

    return (
        <div className="md:hidden backdrop-blur-md bg-background/95 border-t border-border px-6 py-5 flex flex-col gap-5">

            {/* Theme + Language */}
            <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                    <Sun size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                    <Moon size={18} />
                </button>
                <div className="flex items-center gap-1.5 ml-1">
                    <button
                        onClick={() => onChangeLng("ro")}
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-lg font-medium px-3 py-1.5 transition text-sm tracking-wide"
                    >
                        RO
                    </button>
                    <button
                        onClick={() => onChangeLng("en")}
                        className="hover:bg-accent hover:text-accent-foreground bg-secondary rounded-lg font-medium px-3 py-1.5 transition text-sm tracking-wide"
                    >
                        EN
                    </button>
                </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-1 text-muted-foreground">
                <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium">
                    <Home size={18} /> Home
                </Link>
                <Link to="/features" className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium">
                    {t("navBar.centralDiv.features")}
                </Link>
                <Link to="/solutions" className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium">
                    {t("navBar.centralDiv.solutions")}
                </Link>
                <Link to="/company" className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium">
                    {t("navBar.centralDiv.company")}
                </Link>
                <Link to="/get-started" className="px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium">
                    {t("navBar.centralDiv.get-started")}
                </Link>
            </div>

            {/* Auth buttons */}
            <div className="flex gap-2 border-t border-border pt-2">
                <button className="flex-1 bg-secondary hover:text-accent-foreground  hover:bg-authbtn rounded-lg font-medium py-2 transition text-sm tracking-wide"
                        onClick={onShowRegister}>
                    {t("navBar.leftDiv.sign-in")}
                </button>
                <button className="flex-1 bg-secondary hover:text-accent-foreground hover:bg-authbtn rounded-lg font-medium py-2 transition text-sm tracking-wide"
                        onClick={onShowLogin}>
                    {t("navBar.leftDiv.log-in")}
                </button>
            </div>
        </div>
    );
};

export default NavbarMobileMenu;