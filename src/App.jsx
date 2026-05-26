// src/App.jsx
import { useState, useEffect } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import ScrollFade from "./components/ScrollFade";
import Navbar from "./components/Navbar";

function App() {
  // ===== THEME STATE =====
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";
  // =====================

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 
          focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow-600 focus:text-black 
          focus:rounded-lg transition-all"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} isDark={isDark} />

      <main
        id="main-content"
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-black text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        {/* ========== HERO SECTION ========== */}
        <section
          id="home"
          className={`grid md:grid-cols-2 items-center pt-32 pb-16 px-4 md:px-8 xl:gap-0 gap-8 ${
            isDark ? "bg-black" : "bg-gray-50"
          }`}
        >
          <ScrollFade direction="left" distance={30}>
            <div className="space-y-6">
              {/* ✅ QUOTE BADGE - Presisi positioning */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-3xl border ${
                  isDark
                    ? "bg-zinc-900 border-zinc-100"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <i className="ri-double-quotes-l text-yellow-500 text-sm"></i>
                <q
                  className={`text-sm italic font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  It's never too late to learn
                </q>
              </div>

              {/* ✅ HEADING - Presisi spacing & font color */}
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Hello, I am{" "}
                <span className="text-yellow-500">Christ Daniel Santoso</span>
                <span className="inline ml-2">🧑‍</span>
              </h1>

              {/* ✅ DESCRIPTION - Font color theme-aware */}
              <p
                className={`text-base sm:text-lg leading-relaxed max-w-xl ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I am a full-stack developer who began my journey in the IT field
                in 2023. I have a strong passion for technology and design, and
                I thoroughly enjoy building complete web applications—from
                crafting intuitive user interfaces to engineering reliable
                backend systems. Currently, I'm expanding my expertise across
                the full stack, working with HTML, CSS, JavaScript, React, UI/UX
                design, as well as server-side technologies, APIs, and database
                management.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-yellow-900/20"
                >
                  Download CV <i className="ri-file-download-line"></i>
                </a>
                <a
                  href="#projects"
                  className={`font-semibold px-6 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 border ${
                    isDark
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                      : "bg-white hover:bg-gray-100 text-gray-900 border-gray-300"
                  }`}
                >
                  View Projects <i className="ri-arrow-right-line"></i>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                {[
                  {
                    href: "https://github.com/danilkembarankairi",
                    icon: "ri-github-fill",
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/christ-daniel-santoso-16450436b/",
                    icon: "ri-linkedin-fill",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/lavieenniel/",
                    icon: "ri-instagram-fill",
                    label: "Instagram",
                  },
                  {
                    href: "mailto:danielsantosoopl1@gmail.com",
                    icon: "ri-mail-fill",
                    label: "Email",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? "text-gray-400 hover:text-yellow-400" : "text-gray-600 hover:text-yellow-600"} transition-colors`}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} ri-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </ScrollFade>

          {/* Hero Image - Original position preserved */}
          <ScrollFade direction="right" distance={30} delay={0.1}>
            <div className="flex justify-center md:justify-end">
              <img
                src={DataImage.HeroImage}
                alt="Christ Daniel Santoso - Full-Stack Engineer"
                className="sm:w-64 md:w-80 rounded-2xl  border-zinc-800 shadow-3xl"
                loading="eager"
              />
            </div>
          </ScrollFade>
        </section>

        {/* ========== ABOUT SECTION ========== */}
        <ScrollFade>
          <section
            id="about"
            className={`py-16 px-4 md:px-8 transition-colors duration-300 ${
              isDark ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h1
                className={`text-center text-3xl md:text-4xl font-bold mb-12 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                About Me
              </h1>

              <div
                className={`p-6 md:p-8 rounded-2xl border transition-colors duration-300 ${
                  isDark
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <p
                  className={`text-base md:text-lg leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Hello, I am{" "}
                  <strong className="text-yellow-500">
                    Christ Daniel Santoso
                  </strong>
                  , a full-stack developer currently studying at Telkom
                  University Purwokerto, majoring in Computer Engineering.
                  Building complete, scalable web applications is my passion! I
                  have always been fascinated by how seamless integration
                  between intuitive frontend interfaces and robust backend
                  systems can create powerful, efficient solutions. I thoroughly
                  enjoy working across the entire development stack—from
                  crafting responsive UIs to engineering secure APIs, optimizing
                  databases, and ensuring smooth performance. My goal is to
                  deliver maintainable, end-to-end applications that solve real
                  problems while providing an exceptional user experience.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-6 border-t border-zinc-700">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-500">10+</p>
                    <p
                      className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Projects Completed
                    </p>
                  </div>
                  <div className="w-px h-12 bg-zinc-700 hidden sm:block"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-500">2+</p>
                    <p
                      className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Years Experience
                    </p>
                  </div>
                  <div className="w-px h-12 bg-zinc-700 hidden sm:block"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-500">100%</p>
                    <p
                      className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      Dedication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ========== TECHNOLOGIES SECTION ========== */}
        <ScrollFade>
          <section
            id="technologies"
            className={`py-16 px-4 md:px-8 transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-gray-50"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <h1
                className={`text-center text-3xl md:text-4xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Technologies & Tools
              </h1>
              <p
                className={`text-center mb-12 max-w-2xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Tools and frameworks I use to build modern web applications.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {listTools.map((tool) => (
                  <div
                    key={tool.id}
                    className={`flex items-center gap-3 p-4 border rounded-xl transition-all duration-200 group cursor-default ${
                      isDark
                        ? "bg-zinc-800 border-zinc-700 hover:border-yellow-500/50 hover:bg-zinc-800/80"
                        : "bg-white border-gray-200 hover:border-yellow-500 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 p-2 rounded-lg group-hover:scale-105 transition-transform flex items-center justify-center ${
                        isDark ? "bg-zinc-900" : "bg-gray-100"
                      }`}
                    >
                      <img
                        src={tool.gambar}
                        alt={tool.nama}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-sm md:text-base ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tool.nama}
                      </h4>
                      <p
                        className={`text-xs md:text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {tool.deskripsi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ========== PROJECTS SECTION ========== */}
        <ScrollFade>
          <section
            id="projects"
            className={`py-16 px-4 md:px-8 transition-colors duration-300 ${
              isDark ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <div className="max-w-6xl mx-auto">
              <h1
                className={`text-center text-3xl md:text-4xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Featured Projects
              </h1>
              <p
                className={`text-center mb-12 max-w-2xl mx-auto ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                A selection of projects showcasing my skills in front-end
                development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listProyek.map((proyek) => (
                  <article
                    key={proyek.id}
                    className={`rounded-2xl overflow-hidden border transition-all duration-200 group flex flex-col ${
                      isDark
                        ? "bg-zinc-800 border-zinc-700 hover:border-yellow-500/50"
                        : "bg-gray-50 border-gray-200 hover:border-yellow-500 hover:shadow-lg"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={proyek.gambar}
                        alt={proyek.nama}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h2
                        className={`text-lg md:text-xl font-bold mb-2 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {proyek.nama}
                      </h2>
                      <p
                        className={`text-sm leading-relaxed mb-4 flex-grow ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {proyek.desk}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {proyek.tools.slice(0, 3).map((tool, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 text-xs rounded-md border ${
                              isDark
                                ? "bg-zinc-700 border-zinc-600 text-gray-300"
                                : "bg-gray-200 border-gray-300 text-gray-700"
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                        {proyek.tools.length > 3 && (
                          <span
                            className={`px-2.5 py-1 text-xs rounded-md ${
                              isDark
                                ? "bg-zinc-700 text-gray-500"
                                : "bg-gray-200 text-gray-500"
                            }`}
                          >
                            +{proyek.tools.length - 3}
                          </span>
                        )}
                      </div>

                      <div
                        className={`flex gap-3 pt-3 border-t ${
                          isDark ? "border-zinc-700" : "border-gray-200"
                        }`}
                      >
                        <a
                          href="#"
                          className="flex-1 text-center bg-yellow-600 hover:bg-yellow-500 text-black font-medium py-2 rounded-lg transition-colors text-sm"
                        >
                          Live Demo
                        </a>
                        <a
                          href="#"
                          className={`flex-1 text-center font-medium py-2 rounded-lg transition-colors text-sm border ${
                            isDark
                              ? "bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600"
                              : "bg-white hover:bg-gray-100 text-gray-900 border-gray-300"
                          }`}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-10">
                <a
                  href="https://github.com/danilkembarankairi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-xl border transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700"
                      : "bg-white hover:bg-gray-100 text-gray-900 border-gray-300"
                  }`}
                >
                  View More on GitHub <i className="ri-external-link-line"></i>
                </a>
              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ========== CONTACT SECTION ========== */}
        <ScrollFade>
          <section
            id="contact"
            className={`py-16 px-4 md:px-8 transition-colors duration-300 ${
              isDark ? "bg-black" : "bg-gray-50"
            }`}
          >
            <div className="max-w-2xl mx-auto">
              <h1
                className={`text-3xl md:text-4xl font-bold text-center mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Get In Touch
              </h1>
              <p
                className={`text-center mb-10 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Have a project in mind? Let's work together!
              </p>

              <form
                action="https://formsubmit.co/danielsantosoopl1@gmail.com"
                method="POST"
                className={`p-6 md:p-8 rounded-2xl border transition-colors duration-300 ${
                  isDark
                    ? "bg-zinc-800 border-zinc-700"
                    : "bg-white border-gray-200"
                }`}
                autoComplete="off"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Inquiry!"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="Nama"
                        placeholder="Your name"
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all ${
                          isDark
                            ? "bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                            : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                        }`}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="Gmail"
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all ${
                          isDark
                            ? "bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                            : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                        }`}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none ${
                        isDark
                          ? "bg-zinc-900 border-zinc-600 text-white placeholder-gray-500"
                          : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                      }`}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-yellow-900/20 flex items-center justify-center gap-2"
                  >
                    Send Message <i className="ri-send-plane-fill"></i>
                  </button>
                </div>

                <p
                  className={`text-center text-xs mt-4 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  Your data is secure. I never share personal information.
                </p>
              </form>

              <div className="text-center mt-8">
                <p
                  className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
                >
                  Or reach out directly via{" "}
                  <a
                    href="mailto:danielsantosoopl1@gmail.com"
                    className="text-yellow-500 hover:underline font-medium"
                  >
                    danielsantosoopl1@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ========== FOOTER ========== */}
        <footer
          className={`py-6 px-4 border-t text-center transition-colors duration-300 ${
            isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}
          >
            &copy; {new Date().getFullYear()} Christ Daniel Santoso. All rights
            reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
