import { Sun, Moon, Home, User, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface NavbarMobileMenuProps {
  onChangeLng: (lng: string) => void;
  cartCount?: number;
  onShowRegister: () => void;
  onShowLogin: () => void;
  isOpen: boolean;
}

const NavbarMobileMenu = ({
  onChangeLng,
  onShowRegister,
  onShowLogin,
  isOpen,
}: NavbarMobileMenuProps) => {
  const { t } = useTranslation();
  const isAuth = localStorage.getItem("accessToken");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // also lock <html>
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-x-0 top-16 sm:hidden backdrop-blur-md bg-background/95 border-t border-border px-6 py-5 flex flex-col gap-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Theme + Language */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
          <Sun className="w-5 h-5" />
        </button>
        <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
          <Moon className="w-5 h-5" />
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

      {/* Main nav links - simplified */}
      <div className="flex flex-col gap-1 text-muted-foreground">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium"
        >
          <Home className="w-5 h-5" /> Home
        </Link>
      </div>

      {/* User section when logged in */}
      {isAuth && (
        <div className="border-t border-border pt-4">
          <Link
            to="/user"
            className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-accent hover:text-foreground transition text-sm font-medium w-full"
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-medium">
                {t("navBar.user.profile") || "Profile"}
              </div>
              <div className="text-xs text-muted-foreground">View account</div>
            </div>
          </Link>
          <div className="flex gap-2 mt-3 px-3">
            <button className="flex-1 p-2 rounded-full hover:bg-accent transition text-muted-foreground flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
            <button className="flex-1 p-2 rounded-full hover:bg-accent transition text-muted-foreground flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Auth buttons when not logged in */}
      {!isAuth && (
        <div className="flex gap-2 border-t border-border pt-4">
          <button
            className="flex-1 bg-secondary hover:text-accent-foreground hover:bg-authbtn rounded-lg font-medium py-2 transition text-sm tracking-wide"
            onClick={onShowRegister}
          >
            {t("navBar.leftDiv.sign-in")}
          </button>
          <button
            className="flex-1 bg-secondary hover:text-accent-foreground hover:bg-authbtn rounded-lg font-medium py-2 transition text-sm tracking-wide"
            onClick={onShowLogin}
          >
            {t("navBar.leftDiv.log-in")}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMobileMenu;
