// src/components/ModernPortfolio.tsx (or your preferred path)

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Code,
  Cloud,
  Wrench,
  Moon,
  Sun,
  CheckCircle, // For success message
  AlertCircle, // For error message
  Loader2, // For submitting state
} from "lucide-react";

// Modern portfolio component with enhanced design and animations
const ModernPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration fix for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Contact Form State ---
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(
    "idle" // 'idle', 'submitting', 'success', 'error'
  );
  // --- End Contact Form State ---

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle scroll for parallax effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));
      const navbarHeight = 64; // Approximate navbar height
      const threshold = window.innerHeight * 0.5; // Section active when its top reaches halfway up the screen

      let current = "hero"; // Default to hero

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the top of the section is within the viewport and above the threshold
          if (rect.top <= threshold && rect.bottom >= navbarHeight) {
            current = sections[i];
            break; // Found the current section
          }
        }
      }

      // If scrolled to the very top, ensure 'hero' is active
      if (window.scrollY < 100) {
        current = "hero";
      }
      // If scrolled near the bottom, force 'contact' active
      else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 150
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample skill data
  const skills = [
    {
      category: "AI & ML",
      icon: <Terminal size={24} />,
      skills: [
        "Generative AI",
        "LLM Fine-tuning",
        "RAG Systems",
        "NLP/ASR",
        "Vector Databases",
        "Prompt Engineering",
      ],
    },
    {
      category: "Development",
      icon: <Code size={24} />,
      skills: [
        "Python",
        "LangChain",
        "HTML/CSS",
        "JavaScript",
        "SQL",
        "Web Scraping",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: ["Basic AWS & GCP", "Docker", "Git", "CI/CD", "Linux"],
    },
    {
      category: "Tools",
      icon: <Wrench size={24} />,
      skills: ["n8n Workflows", "AI Automation", "Agentic AI", "OpenAI APIs"],
    },
  ];

  // Experience data
  const experiences = [
    {
      role: "AI Engineering Lead",
      company: "CodeBrew-Labs",
      period: "July 2024 - Present",
      location: "Mohali",
      responsibilities: [
        "Pioneered Agentic AI Automation frameworks using n8n",
        "Developed advanced analytics Telegram bot",
        "Created AI-driven property listing generation system",
        "Engineered Pyscribe system for psychiatric narrative/SOAP notes",
      ],
    },
    {
      role: "AI Engineer",
      company: "CodeBrew-Labs",
      period: "January 2024 - June 2024",
      location: "Mohali",
      responsibilities: [
        "Enhanced Ingeni Health app with AI-powered voice commands",
        "Developed AI backend for legal transcription platform",
      ],
    },
    {
      role: "Software Developer Intern (ML/AI)",
      company: "CodeBrew-Labs",
      period: "June 2023 - December 2023",
      location: "Chandigarh",
      responsibilities: [
        "Built HR-Bot, a generative AI-driven interview platform",
        "Developed 'BTB Buddy' Telegram bot using OpenAI APIs",
        "Implemented Face Recognition System using YOLO models",
        "Engineered RAG-based AI-powered chatbots",
      ],
    },
  ];

  // Consistent scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Don't manually set active section here, let the scroll listener handle it for accuracy
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // --- Contact Form Handlers ---
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Optionally clear status message when user starts typing again
    if (submissionStatus === "success" || submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    // --- Your Formspree Endpoint ---
    const formspreeEndpoint = "https://formspree.io/f/mkgjaono"; // <<< UPDATED HERE
    // -------------------------------

    // Basic client-side validation (optional but recommended)
    if (!formState.name || !formState.email || !formState.message) {
      console.error("Form validation failed: Missing fields");
      setSubmissionStatus("error"); // Or show specific validation errors
      setTimeout(() => setSubmissionStatus("idle"), 5000);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      console.error("Form validation failed: Invalid email");
      setSubmissionStatus("error"); // Or show specific validation errors
      setTimeout(() => setSubmissionStatus("idle"), 5000);
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormState({ name: "", email: "", message: "" }); // Reset form
        setTimeout(() => setSubmissionStatus("idle"), 5000); // Hide success message after 5s
      } else {
        const data = await response.json();
        console.error("Formspree submission error:", data);
        setSubmissionStatus("error");
        setTimeout(() => setSubmissionStatus("idle"), 7000); // Hide error message after 7s
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      setSubmissionStatus("error");
      setTimeout(() => setSubmissionStatus("idle"), 7000); // Hide error message after 7s
    }
  };
  // --- End Contact Form Handlers ---

  return (
    // Ensure the root div applies dark class based on state
    <div className="min-h-screen font-sans text-foreground bg-background antialiased relative">
      {/* Enhanced Animated background gradient - Using primary/accent */}
      <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-20%] right-[-5%] w-[80%] h-[80%] rounded-full bg-primary/10 filter blur-[60px]"
          animate={{
            x: [0, -10, 0],
            y: [0, -15, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[70%] h-[70%] rounded-full bg-accent/10 filter blur-[80px]"
          animate={{
            x: [0, 15, 0],
            y: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Fixed Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-foreground/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top on logo click
          >
            {/* Logo using primary/accent gradient */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg"
            >
              GS
            </motion.div>
            <span className="text-xl font-bold hidden sm:block text-foreground">
              {" "}
              {/* Use foreground color */}
              Gaganpreet Singh
            </span>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`relative transition-colors duration-200 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary font-medium" // Active link is primary color
                    : "text-foreground/70" // Inactive link is slightly muted foreground
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                {/* Active section underline using primary color */}
                {activeSection === item.id && (
                  <motion.span
                    className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-primary"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.a>
            ))}
            {/* CV Download Button using primary color */}
            <motion.a
              href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
              target="_blank"
              rel="noopener noreferrer"
              // Use primary for background, primary-foreground for text
              className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.3)", // Assuming --color-primary-rgb is defined
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Download size={16} />
              <span>CV</span>
            </motion.a>

            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-foreground p-2 z-10" // Ensure button is above menu content
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            animate={isMenuOpen ? "open" : "closed"}
          >
            {/* Animated Hamburger/Close Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <motion.path
                variants={{
                  closed: { d: "M 3 6 L 21 6" },
                  open: { d: "M 5 18 L 19 6" },
                }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
              />
              <motion.path
                d="M 3 12 L 21 12"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
                strokeLinecap="round"
              />
              <motion.path
                variants={{
                  closed: { d: "M 3 18 L 21 18" },
                  open: { d: "M 5 6 L 19 18" },
                }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
              />
            </svg>
          </motion.button>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeInOut" },
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/10 overflow-hidden" // Use border-t as it appears below nav
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {[
              { label: "Home", id: "hero" },
              { label: "About", id: "about" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`text-lg py-1 ${
                  activeSection === item.id
                    ? "text-primary font-semibold" // Active link uses primary color
                    : "text-foreground/80 hover:text-primary" // Inactive links use foreground, hover uses primary
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-foreground/10 mt-2">
              {/* Mobile CV Button */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
                target="_blank"
                rel="noopener noreferrer"
                // Use primary color for button
                className="flex items-center gap-2 w-fit px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.a>

              {/* Mobile theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {mounted &&
                  (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Section - Restoring original blue text */}
      <section
        id="hero"
        className="min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text content */}
            <motion.div
              className="flex-1 md:order-1 w-full text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-foreground" // Use foreground for base text
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <span>Hi, I'm </span>
                {/* Use text-primary for the name color */}
                <span className="text-primary">Gaganpreet Singh</span>
              </motion.h1>

              {/* Badge using primary color */}
              <motion.div
                // Use primary color derivatives for badge background and border
                className="relative inline-flex items-center justify-center px-5 py-2 mb-6 bg-primary/10 backdrop-blur-sm text-primary font-semibold rounded-full border border-primary/30 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(var(--color-primary-rgb), 0.2)", // Use primary for shadow
                  transition: { duration: 0.2 },
                }}
              >
                <span className="mr-2 text-lg">⚡</span>
                AI/ML Engineering Lead
              </motion.div>

              <motion.p
                className="text-base sm:text-lg text-foreground/70 mb-8 max-w-xl mx-auto md:mx-0" // Use foreground/70 for paragraph
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                Results-driven AI/ML Engineering Lead with 2+ years of
                specialized experience building production-ready generative AI
                systems. Expert in developing intelligent chatbots, RAG-based
                applications, and automated workflows using LangChain, NLP, and
                vector databases. {/* Restored original paragraph */}
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                {/* Button using primary color */}
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  // Use primary for background, primary-foreground for text
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center gap-2 font-medium shadow-lg shadow-primary/30"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)", // Primary shadow
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                </motion.a>
              </motion.div>

              {/* Social media icons */}
              <motion.div
                className="flex justify-center md:justify-start gap-5 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  {
                    icon: <Github size={22} />,
                    url: "https://github.com/IGaganpreetSingh",
                  },
                  {
                    icon: <Linkedin size={22} />,
                    url: "https://linkedin.com/in/gaganpreet-singh-464173177",
                  },
                  {
                    icon: <Mail size={22} />,
                    url: "mailto:gaganpannu83@gmail.com",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Use foreground for border/text, hover uses primary
                    className="w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              className="flex-1 flex justify-center md:order-2 mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="relative group"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  // Use primary for border and shadow
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 p-1 shadow-xl shadow-primary/10"
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(var(--color-primary-rgb), 0.5)",
                  }} // Primary border on hover
                  transition={{ duration: 0.3 }}
                >
                  {/* Use primary/accent for image background gradient */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src="/profile.png"
                      alt="Gaganpreet Singh"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </motion.div>

                {/* Skill bubbles */}
                {[
                  { skill: "AI", top: "-15px", left: "45%", delay: 0.8 },
                  { skill: "NLP", top: "25%", right: "-5px", delay: 0.9 },
                  {
                    skill: "Python",
                    bottom: "25%",
                    right: "-15px",
                    delay: 1.0,
                  },
                  { skill: "ML", bottom: "-15px", left: "45%", delay: 1.1 },
                  { skill: "Cloud", top: "25%", left: "-15px", delay: 1.2 },
                  { skill: "GenAI", bottom: "25%", left: "-10px", delay: 1.3 },
                ].map((item) => (
                  <motion.div
                    key={item.skill}
                    className="absolute bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full px-3 py-1 text-xs sm:text-sm font-medium shadow-md text-foreground/80 group-hover:scale-110 transition-transform duration-200"
                    style={{
                      top: item.top || "auto",
                      left: item.left || "auto",
                      right: item.right || "auto",
                      bottom: item.bottom || "auto",
                      transform: `translateX(${
                        item.left === "45%" ? "-50%" : "0"
                      }) translateY(${
                        item.top === "-15px" || item.bottom === "-15px"
                          ? "-50%"
                          : "0"
                      })`,
                      zIndex: 10,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: item.delay,
                    }}
                  >
                    {item.skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground" // Use foreground
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            {/* Underline using primary color */}
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-foreground/70" // Use foreground/70
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Driving innovation by bridging advanced AI with practical business
              applications.
            </motion.p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              className="flex-1 prose prose-lg max-w-none dark:prose-invert prose-p:text-foreground/80 prose-headings:text-foreground"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Restored original paragraphs */}
              <p>
                Results-driven AI/ML Engineering Lead with 2+ years of
                specialized experience building production-ready generative AI
                systems. Expert in developing intelligent chatbots, RAG-based
                applications, and automated workflows using LangChain, NLP, and
                vector databases.
              </p>
              <p>
                Proven track record of rapidly advancing from intern to team
                lead, delivering innovative solutions across healthcare, legal,
                and real estate sectors. Passionate about bridging AI innovation
                with practical business applications through efficient
                development practices.
              </p>

              <motion.div
                className="mt-10 grid grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                  },
                }}
                viewport={{ once: true }}
              >
                {[
                  // Use primary color for stat values
                  { value: "2+", label: "Years of experience" },
                  { value: "15+", label: "Projects completed" }, // Restored original text
                  { value: "3", label: "Industry sectors" }, // Restored original text
                  { value: "5+", label: "AI technologies" }, // Restored original text
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="flex flex-col items-center text-center md:items-start md:text-left"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {/* Use primary color for the number */}
                    <div className="text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-foreground/60 mt-1 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-foreground/10 p-8 bg-background/50 backdrop-blur-md shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Areas of Expertise
                </h3>
                <ul className="space-y-3">
                  {[
                    "Generative AI Applications & Development",
                    "LLM Fine-tuning and RAG Implementation",
                    "AI-Powered Chatbot Engineering",
                    "NLP & Speech Recognition Systems",
                    "Cloud-based AI Solutions", // Kept concise
                    "Agentic AI & Automation Workflows",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 * index,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Use primary color for the checkmark */}
                      <span className="text-primary flex-shrink-0">
                        {/* Use original checkmark SVG */}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.5 4.5L6.5 11.5L3 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative elements using primary/accent */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-foreground/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>
            {/* Underline using primary color */}
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line using primary gradient */}
            <div className="absolute left-3 top-2 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent -z-10" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12 pb-10 mb-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Timeline dot using primary color */}
                <motion.div
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  transition={{
                    duration: 0.4,
                    ease: "backOut",
                    delay: index * 0.15 + 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </motion.div>

                <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  {/* Use foreground/60 for period */}
                  <div className="text-sm text-foreground/60 mt-1 sm:mt-0">
                    {exp.period}
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60">
                  {/* Using original icons and structure */}
                  <div className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>{" "}
                      <circle cx="12" cy="10" r="3"></circle>{" "}
                    </svg>
                    <span>
                      {" "}
                      {exp.company}, {exp.location}{" "}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <circle cx="12" cy="12" r="10"></circle>{" "}
                      <polyline points="12 6 12 12 16 14"></polyline>{" "}
                    </svg>
                    <span>{exp.period}</span>{" "}
                    {/* Repeated period here as per original, maybe remove one? */}
                  </div>
                </div>

                <ul className="space-y-2 text-foreground/80">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.3 + i * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Bullet using primary color */}
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Skills & Technologies
            </motion.h2>
            {/* Underline using primary color */}
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                // Use foreground/5 for background, hover border primary
                className="border border-foreground/10 rounded-xl p-6 bg-foreground/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 12px 25px -10px rgba(var(--color-primary-rgb), 0.15)", // Primary shadow
                  borderColor: "rgba(var(--color-primary-rgb), 0.3)", // Primary border
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  {/* Icon background using primary color */}
                  <motion.div
                    className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2.5"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + 0.2 + i * 0.05,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Bullet using primary color */}
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0"></span>
                      <span className="text-sm text-foreground/80">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Skill bar visualization */}
          <motion.div
            className="mt-20 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-center text-foreground">
              Proficiency Levels {/* Restored original title */}
            </h3>
            <div className="space-y-5">
              {[
                // Restored original skills
                { skill: "Python Programming", level: 95 },
                { skill: "Generative AI Development", level: 90 },
                { skill: "LangChain & RAG Systems", level: 85 },
                { skill: "NLP & ASR", level: 80 },
                { skill: "AI Automation", level: 90 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-foreground/90">
                      {item.skill}
                    </span>
                    <span className="text-foreground/60">{item.level}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    {/* Bar gradient using primary/accent */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent" // Original gradient
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5 + index * 0.15,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            {/* Underline using primary color */}
            <motion.div
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <motion.p
              className="text-lg text-foreground/70 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Looking to collaborate on AI/ML projects or discuss opportunities?
              Feel free to reach out! {/* Restored original text */}
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              // Use original background/border
              className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 backdrop-blur-sm h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-6 flex-grow">
                {[
                  // Using original icons/structure, primary color for icons
                  {
                    icon: <Mail size={24} />,
                    label: "Email",
                    value: "gaganpannu83@gmail.com",
                    displayValue: "gaganpannu83@gmail.com",
                    link: "mailto:gaganpannu83@gmail.com",
                  },
                  {
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {" "}
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>{" "}
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 9988896928",
                    displayValue: "Click to reveal",
                    link: "tel:+919988896928",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    label: "LinkedIn",
                    value: "gaganpreet-singh-464173177",
                    displayValue: "Connect on LinkedIn",
                    link: "https://linkedin.com/in/gaganpreet-singh-464173177",
                  },
                  {
                    icon: <Github size={24} />,
                    label: "GitHub",
                    value: "IGaganpreetSingh",
                    displayValue: "View GitHub Profile",
                    link: "https://github.com/IGaganpreetSingh",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group" // Use items-start from original
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * index + 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    {/* Icon background using primary color */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground/60 text-sm">
                        {item.label}
                      </h4>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                        {item.displayValue}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              {/* CV Download Button */}
              <motion.div
                className="mt-auto pt-8" // Push to bottom with auto margin
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Button uses primary color
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)", // Primary shadow
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              {/* Use original background/border */}
              <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 h-full backdrop-blur-sm shadow-lg flex flex-col">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Send a Message
                </h3>

                {/* --- FORM SUBMISSION STATUS --- */}
                {submissionStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 rounded-md bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600/50 text-green-700 dark:text-green-300 text-sm flex items-center gap-2"
                  >
                    <CheckCircle size={18} /> Message sent successfully!
                  </motion.div>
                )}
                {submissionStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 rounded-md bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600/50 text-red-700 dark:text-red-300 text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={18} /> Oops! Something went wrong. Please
                    try again or use the contact info.
                  </motion.div>
                )}
                {/* --- END FORM SUBMISSION STATUS --- */}

                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-5 flex-grow flex flex-col"
                >
                  {/* Form fields */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1 text-foreground/80"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleFormChange}
                      required
                      // Use original input styling, focus uses primary
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      placeholder="Your Name"
                      disabled={submissionStatus === "submitting"}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-foreground/80"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleFormChange}
                      required
                      // Use original input styling, focus uses primary
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      placeholder="Your Email Address"
                      disabled={submissionStatus === "submitting"}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-grow"
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-foreground/80"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleFormChange}
                      required
                      rows={5}
                      // Use original textarea styling, focus uses primary
                      className="w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary h-full min-h-[160px] resize-none transition-colors duration-200"
                      placeholder="Your message"
                      disabled={submissionStatus === "submitting"}
                    ></textarea>
                  </motion.div>

                  {/* Submit Button using primary color */}
                  <motion.button
                    type="submit"
                    disabled={submissionStatus === "submitting"}
                    // Use primary color for button background
                    className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: submissionStatus !== "submitting" ? 1.03 : 1,
                      boxShadow:
                        submissionStatus !== "submitting"
                          ? "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)"
                          : "none", // Primary shadow
                    }}
                    whileTap={{
                      scale: submissionStatus !== "submitting" ? 0.98 : 1,
                    }}
                  >
                    {submissionStatus === "submitting" ? (
                      <>
                        {" "}
                        <Loader2 size={18} className="animate-spin" />{" "}
                        Sending...{" "}
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10 mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm text-foreground/60 text-center sm:text-left">
                © {new Date().getFullYear()} Gaganpreet Singh. All rights
                reserved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-5"
            >
              {[
                {
                  icon: <Github size={18} />,
                  url: "https://github.com/IGaganpreetSingh",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={18} />,
                  url: "https://linkedin.com/in/gaganpreet-singh-464173177",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={18} />,
                  url: "mailto:gaganpannu83@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  // Use foreground for border/text, hover primary
                  className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
