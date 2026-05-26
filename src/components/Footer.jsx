// src/components/Footer.jsx
const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  // 🔹 Theme-aware color helpers
  const bgFooter = isDark ? "bg-zinc-900" : "bg-gray-100";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const textMuted = isDark ? "text-gray-500" : "text-gray-500";
  const borderColor = isDark ? "border-zinc-800" : "border-gray-200";
  const hoverAccent = "hover:text-yellow-500";
  const navHoverBg = isDark ? "hover:bg-zinc-800/50" : "hover:bg-gray-200/50";

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/danilkembarankairi",
      icon: "ri-github-fill",
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/lavieenniel/",
      icon: "ri-instagram-fill",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/christ-daniel-santoso-16450436b/",
      icon: "ri-linkedin-fill",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className={`${bgFooter} transition-colors duration-300`}></footer>
  );
};

export default Footer;
