import { useEffect, useState } from "react";
import { useCartTotalItems } from "@/stores/useCartStore";
import {
  User,
  ShoppingCart,
  Home,
  Sun,
  Moon,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavbarMobileMenu from "@/components/core/header/NavbarMobileMenu.tsx";
import Registration from "@/components/core/auth/Registration.tsx";
import LogIn from "@/components/core/auth/LogIn.tsx";
import { useTheme } from "next-themes";
import LogInOtp from "../auth/LogInOtp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const totalItems = useCartTotalItems();
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { setTheme, theme } = useTheme();
  const [showLogInOtp, setShowLogInOtp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [location]);

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isAuth = localStorage.getItem("accessToken");
  return (
    <nav
      className={`bg-background fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen
        ? "backdrop-blur-md bg-background/80 border-b border-border shadow-lg"
        : "bg-background border-b border-border shadow-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-foreground">
        {/* LEFT — hidden on small mobile, visible on larger screens */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 flex-1">
          <div className="flex items-center gap-2">
            <button onClick={() => setTheme("light")} className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
              <Sun className="w-5 h-5" />
            </button>
            <button onClick={() => setTheme("dark")} className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
              <Moon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-1 lg:gap-1.5 text-muted-foreground rounded-2xl px-1 py-1.5">
            <button
              onClick={() => {
                changeLng("ro");
              }}
              className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 lg:px-3 py-1.5 transition text-xs lg:text-sm tracking-wide"
            >
              RO
            </button>

            <button
              onClick={() => {
                changeLng("en");
              }}
              className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-2 lg:px-3 py-1.5 transition text-xs lg:text-sm tracking-wide"
            >
              EN
            </button>
          </div>
        </div>

        {/* MIDDLE — centered home button */}
        <div className="hidden sm:flex items-center justify-center flex-1">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-accent transition text-muted-foreground"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>

        {/* RIGHT — responsive buttons */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          {/* signin login */}

          {isAuth ? (
            <div className="hidden sm:flex gap-2 items-center">
              <Link to="/user">
                <button className="hidden sm:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                  <User className="w-5 h-5" />
                </button>
              </Link>

              <Link to="/likes">
                <button className="hidden sm:block p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                  <Heart className="w-5 h-5" />
                </button>
              </Link>

            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-1 lg:gap-1.5 text-muted-foreground rounded-2xl px-2 py-1.5">
              <button
                className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-3 lg:px-4 py-1.5 transition text-xs lg:text-sm tracking-wide"
                onClick={() => {
                  setShowLogInOtp(true);
                }}
              >
                LogIn OTP
              </button>
              <button
                className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-3 lg:px-4 py-1.5 transition text-xs lg:text-sm tracking-wide"
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                {t("navBar.leftDiv.sign-in")}
              </button>
              <button
                className="hover:bg-accent hover:text-accent-foreground bg-secondary hover:scale-110 rounded-lg font-medium px-3 lg:px-4 py-1.5 transition text-xs lg:text-sm tracking-wide"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                {t("navBar.leftDiv.log-in")}
              </button>
            </div>
          )}

          {isAuth && (
            <div className="hidden sm:block relative">
              <Link to="/cart">
                <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </Link>
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            </div>
          )}

          {/* Mobile-only: cart + user + hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            {isAuth ? (
              <Link to="/user">
                <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                  <User className="w-5 h-5" />
                </button>
              </Link>
            ) : null}
            <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
              <Heart className="w-5 h-5" />
            </button>
            {isAuth && (
              <div className="relative">
                <Link to="/cart">
                  <button className="p-2 rounded-full hover:bg-accent transition text-muted-foreground">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </Link>
                <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs px-1.5 rounded-full">
                  {totalItems}
                </span>
              </div>
            )}
            <button
              className="p-2 rounded-full hover:bg-accent transition text-muted-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <NavbarMobileMenu
          onChangeLng={changeLng}
          onShowRegister={() => setShowRegister(true)}
          onShowLogin={() => setShowLogin(true)}
          cartCount={1}
          isOpen={menuOpen}
        />
      )}

      <LogInOtp 
      show={showLogInOtp} 
      onClose={()=> setShowLogInOtp(false)}
      />
      <LogIn 
      show={showLogin} 
      onClose={() => setShowLogin(false)} 
      />
      <Registration
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />
      
    </nav>
  );
};

export default Navbar;
