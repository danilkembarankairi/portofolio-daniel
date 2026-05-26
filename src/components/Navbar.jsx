// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme, isDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // 🔹 Color helpers based on theme + scroll state
  const isLightTop = !isDark && !scrolled;
  const textColor = isLightTop
    ? "text-gray-900"
    : isDark
      ? "text-gray-200"
      : "text-gray-300";
  const textMuted = isLightTop ? "text-gray-600" : "text-gray-400";
  const hoverColor = "hover:text-yellow-500";
  const navBg = scrolled
    ? isDark
      ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
      : "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
    : isDark
      ? "bg-transparent"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* ========== LOGO ========== */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
          aria-label="Home"
        >
          {/* Logo Badge */}
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 
              flex items-center justify-center text-black font-bold text-lg shadow-lg
              group-hover:scale-105 group-active:scale-95 transition-transform duration-200"
          >
            cds
          </div>

          {/* Logo Text - Font color adapts to theme + scroll */}
          <span
            className={`text-lg md:text-xl font-bold tracking-tight hidden sm:block transition-colors duration-300 ${
              isLightTop ? "text-gray-900" : "text-white"
            }`}
          >
            Christ Daniel Santoso
          </span>
        </a>

        {/* ========== DESKTOP NAVIGATION ========== */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={handleNavClick}
                className={`relative px-3 py-2 font-medium text-sm lg:text-base 
                  transition-colors duration-200 focus:outline-none focus-visible:ring-2 
                  focus-visible:ring-yellow-500 rounded-lg ${textColor} ${hoverColor}`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                    bg-yellow-500 group-hover:w-3/4 transition-all duration-200"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ========== DESKTOP ACTIONS ========== */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-200 focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                isLightTop
                  ? "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                  : "text-gray-300 hover:bg-white/10 hover:text-yellow-400"
              }`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? (
              <i className="ri-sun-line ri-lg" aria-hidden="true"></i>
            ) : (
              <i className="ri-moon-line ri-lg" aria-hidden="true"></i>
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="px-5 py-2.5 bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 
              text-black font-semibold rounded-xl transition-all duration-200 
              hover:shadow-lg hover:shadow-yellow-500/25 focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-yellow-500"
          >
            Let's Talk
          </a>
        </div>

        {/* ========== MOBILE MENU TOGGLE ========== */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2.5 rounded-xl transition-colors duration-200 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 ${
              isLightTop
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <i className="ri-close-line ri-xl" aria-hidden="true"></i>
          ) : (
            <i className="ri-menu-line ri-xl" aria-hidden="true"></i>
          )}
        </button>
      </nav>

      {/* ========== MOBILE MENU ========== */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl 
          border-b transition-all duration-300 ease-in-out ${
            isDark
              ? "bg-zinc-950/98 border-zinc-800"
              : "bg-white/98 border-gray-200"
          } ${
            mobileMenuOpen
              ? "opacity-100 visible max-h-[80vh] overflow-y-auto"
              : "opacity-0 invisible max-h-0 overflow-hidden"
          }`}
      >
        <div className="px-4 py-6 space-y-2">
          {/* Navigation Links */}
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className={`block w-full text-left px-4 py-3.5 rounded-xl font-medium 
                transition-all duration-200 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-yellow-500 ${
                  isDark
                    ? "text-gray-200 hover:text-yellow-400 hover:bg-zinc-800/50"
                    : "text-gray-700 hover:text-yellow-600 hover:bg-gray-100"
                }`}
            >
              {item.name}
            </a>
          ))}

          {/* Divider */}
          <div
            className={`my-4 border-t ${isDark ? "border-zinc-800" : "border-gray-200"}`}
          />

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl 
              font-medium transition-all duration-200 focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-yellow-500 ${
                isDark
                  ? "bg-zinc-800 text-gray-200 hover:bg-zinc-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {isDark ? (
              <>
                <i className="ri-sun-line ri-lg" aria-hidden="true"></i>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <i className="ri-moon-line ri-lg" aria-hidden="true"></i>
                <span>Dark Mode</span>
              </>
            )}
          </button>

          {/* CTA Button (Mobile) */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="block w-full text-center px-5 py-3.5 bg-yellow-600 
              hover:bg-yellow-500 active:bg-yellow-700 text-black font-semibold 
              rounded-xl transition-all duration-200 focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-yellow-500 mt-2"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* ========== MOBILE OVERLAY ========== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
