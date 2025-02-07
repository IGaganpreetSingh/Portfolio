import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

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
                AI/ML Developer at Block Tech Brew
              </h2>
              <p className="text-lg text-foreground/60 mb-8">
                Passionate software developer specializing in AI/ML and
                Generative AI applications. Experienced in AWS cloud and DevOps
                principles, dedicated to driving innovation in cutting-edge
                technologies.
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
              As an AI/ML Developer at Block Tech Brew, I specialize in building
              innovative Generative AI applications and solutions. With a B.Tech
              in Computer Science from Baba Banda Singh Bahadur Engineering
              College (CGPA: 8.4), I combine strong technical expertise with
              practical industry experience.
            </p>
            <p>
              My expertise spans across AI/ML, Python Programming, LangChain
              Framework, and Generative AI Applications. I&apos;m particularly
              passionate about creating AI-driven solutions that solve
              real-world problems.
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
              <h3 className="text-xl font-bold">
                Software Developer (ML/AI Applications)
              </h3>
              <p className="text-foreground/60">Block Tech Brew, Chandigarh</p>
              <p className="text-foreground/60">June 2023 - Present</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Currently working on Ugochi - AI-powered mental health
                  platform that converts therapy sessions into comprehensive
                  SOAP notes, narrative notes, and mental health assessments
                  using GPT-4, featuring automated scoring for PHQ-9 and GAD-7
                  scales
                </li>
                <li>
                  Developed Inlexso - AI transcription platform with advanced
                  diarization and translation capabilities
                </li>
                <li>
                  Built Atlas Sync - WhatsApp-like messaging platform with
                  integrated AI assistance for real-time content analysis and
                  smart suggestions
                </li>
                <li>
                  Created Ingeni Health AI Assistant - Voice-activated
                  healthcare management system for seniors with automated
                  communications and health monitoring
                </li>
                <li>
                  Developed HR-Bot - Generative AI-driven interview platform
                  using Python, OpenAI, LangChain, and FAISS
                </li>
                <li>
                  Built &quot;BTB Buddy&quot; Telegram bot using OpenAI&apos;s
                  ChatGPT API and aiogram
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">Device Maintainer</h3>
              <p className="text-foreground/60">Evolution-X</p>
              <p className="text-foreground/60">January 2023 - October 2023</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>
                  Maintained and released updates for Realme X50 Pro device
                </li>
                <li>
                  Contributed to custom ROM development with Pixel-like
                  experience
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <h3 className="text-xl font-bold">MERN Stack Trainee</h3>
              <p className="text-foreground/60">Techlive Solutions, Mohali</p>
              <p className="text-foreground/60">February 2023 - June 2023</p>
              <ul className="list-disc list-inside mt-2 text-foreground/80">
                <li>Designed and developed responsive web applications</li>
                <li>Implemented backend logic using Node.js</li>
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
              <h3 className="font-bold text-xl mb-4">AI & ML</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>Python Programming</li>
                <li>LangChain Framework</li>
                <li>Generative AI Applications</li>
                <li>Prompt Engineering</li>
                <li>Fine-tuning LLM Models</li>
              </ul>
            </div>
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="font-bold text-xl mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>AWS/Google Cloud</li>
                <li>Docker</li>
                <li>Git CI/CD</li>
                <li>Linux</li>
              </ul>
            </div>
            <div
              className="space-y-2 hover-lift animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="font-bold text-xl mb-4">Web Development</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
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
              <h3 className="text-xl font-bold mb-4">Inlexso</h3>
              <p className="text-foreground/80 mb-4">
                AI-powered platform for transcription, diarization, and
                translation services. Implemented advanced AI algorithms for
                accurate speech processing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  AI
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  NLP
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Atlas Sync</h3>
              <p className="text-foreground/80 mb-4">
                Advanced messaging platform with AI integration, similar to
                WhatsApp but enhanced with AI capabilities. Features include
                real-time AI assistance during conversations, content analysis,
                and smart suggestions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  WebSocket
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">
                Ingeni Health AI Assistant
              </h3>
              <p className="text-foreground/80 mb-4">
                Developed voice-activated AI system for seniors&apos; healthcare
                management. Implemented comprehensive solutions including health
                monitoring, automated communications, and proactive care
                features using AI and IoT technologies.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  AI Voice
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  IoT
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Health Tech
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Python
                </span>
              </div>
            </div>

            <div className="border border-foreground/10 rounded-lg p-6 hover-lift animate-fade-in">
              <h3 className="text-xl font-bold mb-4">HR-Bot</h3>
              <p className="text-foreground/80 mb-4">
                Generative AI-driven platform for conducting automated
                interviews based on resumes and job descriptions.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  LangChain
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-foreground/10 rounded-full text-sm">
                  FAISS
                </span>
              </div>
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
          </div>
        </div>
      </section>
    </div>
  );
}
