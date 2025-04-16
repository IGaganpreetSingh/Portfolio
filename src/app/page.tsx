import Image from "next/image";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-slide-in-right animate-gradient-text">
                Hi, I&apos;m Gaganpreet Singh
              </h1>
              <h2
                className="text-2xl sm:text-3xl text-foreground/80 mb-6 animate-slide-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                AI/ML Engineering Lead
              </h2>
              <p className="text-lg text-foreground/60 mb-8">
                Results-driven AI/ML Engineering Lead with 2+ years of
                specialized experience building production-ready generative AI
                systems. Expert in developing intelligent chatbots, RAG-based
                applications, and automated workflows using LangChain, NLP, and
                vector databases.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/IGaganpreetSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-foreground/10 hover-lift"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/gaganpreet-singh-464173177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-foreground/10 hover-lift"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:gaganpannu83@gmail.com"
                  className="p-2 rounded-full hover:bg-foreground/10 hover-lift"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover-lift"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden animate-bounce-in">
                <Image
                  src="/profile.png"
                  alt="Gaganpreet Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p>
              Results-driven AI/ML Engineering Lead with 2+ years of specialized
              experience building production-ready generative AI systems. Expert
              in developing intelligent chatbots, RAG-based applications, and
              automated workflows using LangChain, NLP, and vector databases.
            </p>
            <p>
              Proven track record of rapidly advancing from intern to team lead,
              delivering innovative solutions across healthcare, legal, and real
              estate sectors. Passionate about bridging AI innovation with
              practical business applications through efficient development
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">AI Engineering Lead</h3>
              <p className="text-foreground/60">CodeBrew-Labs, Mohali</p>
              <p className="text-foreground/60">July 2024 - Present</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Pioneered Agentic AI Automation frameworks using n8n for
                  comprehensive social media management, generating
                  SEO-optimized content and automating posting across LinkedIn,
                  X, and Instagram platforms
                </li>
                <li>
                  Developed advanced analytics Telegram bot delivering
                  customized YouTube/Google Analytics insights based on
                  user-defined timeframes
                </li>
                <li>
                  Created AI-driven property listing generation system for
                  RentVIP, automating description creation, thumbnail image
                  generation, and amenities detection
                </li>
                <li>
                  Engineered Pyscribe system for generating psychiatric
                  narrative/SOAP notes from patient conversations, implementing
                  end-to-end transcription and clinical documentation solutions
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">AI Engineer</h3>
              <p className="text-foreground/60">CodeBrew-Labs, Mohali</p>
              <p className="text-foreground/60">January 2024 - June 2024</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Enhanced Ingeni Health application with AI-powered voice
                  command functionality, improving user experience and
                  accessibility
                </li>
                <li>
                  Developed AI backend architecture for Inlexso&apos;s legal
                  transcription platform, successfully implementing audio
                  transcription generation and speaker diarization features
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">
                Software Developer Intern (ML/AI Applications)
              </h3>
              <p className="text-foreground/60">CodeBrew-Labs, Chandigarh</p>
              <p className="text-foreground/60">June 2023 - December 2023</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Built HR-Bot, a generative AI-driven interview platform
                  processing uploaded resumes and custom job descriptions using
                  Python, OpenAI, LangChain, and FAISS
                </li>
                <li>
                  Developed &quot;BTB Buddy&quot; Telegram bot with
                  OpenAI&apos;s ChatGPT API, focusing on prompt engineering and
                  integrating aiogram and OpenAI libraries
                </li>
                <li>
                  Implemented Face Recognition System utilizing YOLO models with
                  high accuracy rates
                </li>
                <li>
                  Engineered RAG-based AI-powered chatbots leveraging
                  open-source LLM models
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">MERN Stack Trainee</h3>
              <p className="text-foreground/60">Techlive Solutions, Mohali</p>
              <p className="text-foreground/60">February 2023 - June 2023</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Mastered design and development of responsive web applications
                  using MERN stack technologies
                </li>
                <li>
                  Implemented complex backend logic using Node.js, focusing on
                  scalable architecture patterns
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">Device Maintainer</h3>
              <p className="text-foreground/60">Evolution-X, Remote</p>
              <p className="text-foreground/60">January 2023 - October 2023</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Maintained and released custom ROM updates for Realme x50 pro
                  device, enhancing device performance and user experience
                </li>
                <li>
                  Implemented Pixel-like interface and features, optimizing for
                  stability and battery efficiency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="font-bold text-xl mb-4">AI & ML Technologies</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>Generative AI</li>
                <li>LLM Fine-tuning</li>
                <li>RAG Systems</li>
                <li>NLP/ASR</li>
                <li>Vector Databases</li>
                <li>Prompt Engineering</li>
              </ul>
            </div>
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="font-bold text-xl mb-4">
                Programming & Development
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li>Python</li>
                <li>LangChain</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Web Scraping</li>
                <li>Web Sockets</li>
              </ul>
            </div>
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="font-bold text-xl mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>Basic AWS & Google Cloud</li>
                <li>Docker</li>
                <li>Git</li>
                <li>CI/CD</li>
                <li>Linux</li>
              </ul>
            </div>
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <h3 className="font-bold text-xl mb-4">Specialized Tools</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>n8n Workflows</li>
                <li>AI Automation</li>
                <li>Agentic AI</li>
                <li>OpenAI APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">
                Stock Market Analysis Agent
              </h3>
              <p className="text-foreground/80 mb-4">
                Engineered an AI-powered market analysis tool performing
                comprehensive fundamental and technical analysis. Implemented
                market sentiment analysis to provide data-driven investment
                insights and automated report generation.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  NLP
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Financial APIs
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Data Visualization
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">
                AI-Powered Headshot Generator
              </h3>
              <p className="text-foreground/80 mb-4">
                Developed personalized headshot generation system by fine-tuning
                image diffusion models like Flux. Implemented custom image
                processing pipelines to ensure high-quality professional
                portrait outputs.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Diffusion Models
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  PyTorch
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Computer Vision
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">
                Voice-Enabled Chatbot with Pi AI
              </h3>
              <p className="text-foreground/80 mb-4">
                Created automated voice interaction system for Pi AI platform.
                Integrated speech recognition libraries with Selenium for
                seamless user experience.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Speech Recognition
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Selenium
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  API Integration
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">E-Learning Platform</h3>
              <p className="text-foreground/80 mb-4">
                Built full-stack E-learning website with user authentication and
                language learning modules.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  JavaScript
                </span>
              </div>
              <a
                href="https://e-learning-production-2307.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mt-4 inline-block hover:underline"
              >
                View live site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/50 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Looking to collaborate on AI/ML projects or discuss opportunities?
            Feel free to reach out!
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:gaganpannu83@gmail.com"
              className="inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors hover-lift animate-scale"
            >
              Send me an email
            </a>
            <a
              href="tel:+919988896928"
              className="inline-block border border-foreground px-6 py-3 rounded-lg hover:bg-foreground/10 transition-colors"
            >
              Call me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=14J569gUmF9vj3HDI7ou2UAApHAmLTs1K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
