import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  FileText,
  Github,
  Linkedin,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const profile = {
  name: "Md Sajid Raza",
  role: "CSE student & software developer",
  location: "India",
  github: "https://github.com/Sajid78614",
  linkedin: "https://www.linkedin.com/in/md-sajid-raza-176521283",
  resume: "/resume.pdf",
};

const projects = [
  {
    number: "01",
    title: "TripGraph",
    category: "Multi-agent AI · Travel planner",
    description:
      "A multi-agent travel planner built with LangGraph. A centralized supervisor routes work between agents, while MCP tools, input guardrails, and human-in-the-loop checks keep plans reliable.",
    stack: ["Python", "LangGraph", "LangChain", "MCP", "Streamlit", "Groq API", "PostgreSQL"],
    visual: "tripgraph",
    link: "https://github.com/Sajid78614/Travel-Buddy---Multi-Agent-Travel-Planner",
  },
  {
    number: "02",
    title: "Student Attendance System",
    category: "Computer vision · Desktop app",
    description:
      "A real-time facial recognition attendance app using OpenCV and a MySQL-backed student record system, with automated attendance marking and report generation.",
    stack: ["Python", "OpenCV", "Tkinter", "MySQL"],
    visual: "attendance",
    link: "",
  },
  {
    number: "03",
    title: "BoliBazaar",
    category: "Real-time auctions · MERN stack",
    description:
      "A full-stack auction platform with live Socket.IO bidding, atomic MongoDB updates, auction rooms, a credit wallet, AI-assisted listings, smart recommendations, and admin analytics.",
    stack: ["React 19", "Express 5", "MongoDB", "Socket.IO", "Tailwind CSS", "Cloudinary"],
    visual: "bolibazaar",
    link: "https://github.com/Sajid78614/BoliBazaar--Real-Time-Auction-Platform",
  },
];

const skills = [
  "C / C++",
  "JavaScript",
  "Python",
  "HTML & CSS",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "LangGraph & LangChain",
  "MCP",
  "Streamlit & Groq API",
  "OpenCV",
  "Git & GitHub",
  "VS Code & Postman",
  "DBMS · OS · Networks",
  "OOP · Complexity analysis",
  "Teamwork & communication",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [formError, setFormError] = useState("");

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setFormState("sending");
    setFormError("");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent.");
      }

      setFormState("sent");
      form.reset();
    } catch (error) {
      setFormState("idle");
      setFormError(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="wordmark-mark">SR.</span>
          <span>MD SAJID RAZA</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>{String(projects.length).padStart(2, "0")}</span></a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> FULL-STACK &amp; AI PROJECTS</div>
            <h1>
              I build digital
              <br />
              things with <span className="serif-word">purpose.</span>
            </h1>
            <p className="hero-description">
              Hey, I&apos;m <strong>{profile.name}</strong>, a Computer Science &amp; Engineering student at
              Dumka Engineering College. I build across the stack, from MERN apps to multi-agent AI tools.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-label">CURRENTLY</span> {profile.role}</span>
              <span><span className="meta-label">LOCATION</span> {profile.location}</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract artwork made of colorful shapes">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun"><Sparkles size={25} strokeWidth={1.4} /></div>
            <div className="art-card art-card-top"><Code2 size={17} /><span>curious.build</span><span className="card-dot" /></div>
            <div className="art-card art-card-bottom"><span className="mini-bars"><i /><i /><i /></span><span>AI + MERN<br />IN PROGRESS</span></div>
            <span className="art-caption">A LITTLE BIT OF<br />LOGIC & MAGIC</span>
            <span className="art-scribble">✳</span>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow">A FEW THINGS I&apos;VE MADE</span>
              <h2>Selected <span className="serif-word">work.</span></h2>
            </div>
            <p>Good work starts with a good question.<br />Here are a few answers I&apos;ve helped shape.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.visual}`} key={project.number}>
                <div className="project-visual" aria-hidden="true">
                  {project.visual === "tripgraph" && (
                    <div className="tripgraph-art"><div className="tripgraph-window"><div className="window-top"><i /><i /><i /><span>tripgraph / plan builder</span></div><div className="window-content"><span className="window-kicker">YOUR NEXT ADVENTURE</span><strong>One trip.<br />A team of <em>ideas.</em></strong><div className="agent-row"><i /> Supervisor <b>ROUTING</b></div><div className="agent-row"><i /> Local guide <b>READY</b></div></div></div><span className="orbit-star">✳</span></div>
                  )}
                  {project.visual === "attendance" && (
                    <div className="attendance-art"><div className="attendance-window"><div className="window-top"><i /><i /><i /><span>campus / attendance</span></div><div className="attendance-content"><div><span className="window-kicker">TODAY · COMPUTER SCIENCE</span><strong>Attendance</strong></div><span className="attendance-rate">LIVE<small>SESSION</small></span><div className="attendance-student"><i>01</i><span>Demo student<small>Face match</small></span><b>Present</b></div><div className="attendance-student"><i>02</i><span>Demo student<small>Face match</small></span><b>Present</b></div><div className="attendance-student"><i>+</i><span>Recognition ready<small>OpenCV · MySQL</small></span><b>Live</b></div></div></div><span className="attendance-spark">✳</span></div>
                  )}
                  {project.visual === "bolibazaar" && (
                    <div className="bolibazaar-art">
                      <div className="auction-window">
                        <div className="auction-head">
                          <span className="auction-brand">B.</span>
                          <span>THE AUCTION HOUSE</span>
                          <span className="auction-live"><i /> LIVE</span>
                        </div>
                        <div className="auction-feature">
                          <div className="auction-object"><span>LOT<br />042</span><i>✳</i></div>
                          <div className="auction-details">
                            <span className="window-kicker">A NEW WAY TO DISCOVER</span>
                            <strong>Find it.<br /><em>Bid for it.</em></strong>
                            <p>Every bid brings the room to life.</p>
                          </div>
                        </div>
                        <div className="auction-footer">
                          <span><small>BUILT FOR THE MOMENT</small><b>Real-time bidding</b></span>
                          <span className="auction-button">JOIN AUCTION ↗</span>
                        </div>
                      </div>
                      <span className="auction-spark">✳</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-topline"><span>{project.category}</span><span>{project.number} / {String(projects.length).padStart(2, "0")}</span></div>
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    {project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={21} /></a> : <span className="project-arrow"><ArrowUpRight size={21} /></span>}
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <a className="all-work-link" href="#contact">Have a project in mind? <span>Let&apos;s make it happen <ArrowRight size={15} /></span></a>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-inner">
            <div className="about-stamp" aria-hidden="true"><span>CURIOUS BY NATURE</span><div>✳</div><span>BUILT WITH CARE</span></div>
            <div className="about-copy">
              <span className="eyebrow">A LITTLE ABOUT ME</span>
              <h2>Building useful<br /><span className="serif-word">things,</span> together.</h2>
              <p>
                I&apos;m pursuing a B.Tech in Computer Science &amp; Engineering at Dumka Engineering
                College (2023–present, CGPA 8.30/10). I enjoy turning ideas into complete software,
                from a LangGraph travel planner with MCP tools and human review to a real-time
                attendance system using OpenCV and MySQL.
              </p>
              <p>
                I&apos;ve solved 200+ data structures and algorithms problems. I also serve as a Core
                Technical Member of the Dumka Engineering College Coding Club and General Secretary
                of TechCurious Tech Fest.
              </p>
              <a className="text-link about-link" href="#contact">Say hello <ArrowUpRight size={16} /></a>
            </div>
            <div className="skills-panel">
              <span className="eyebrow">THINGS I WORK WITH</span>
              <div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}<i>↗</i></span>)}</div>
              <div className="skills-note"><span>ALWAYS LEARNING</span><span className="note-line" /><Sparkles size={15} /></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-intro">
            <span className="eyebrow"><span className="status-dot" /> YOUR NEXT GOOD IDEA STARTS HERE</span>
            <h2>Let&apos;s make<br />something <span className="serif-word">matter.</span></h2>
            <p>Have a project, a question, or just want to say hi?<br />My inbox is always open.</p>
            {(profile.github || profile.linkedin || profile.resume) && (
              <div className="social-links">
                {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>}
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>}
                {profile.resume && <a href={profile.resume}  link="https://drive.google.com/file/d/1ahSXrkLNixNV5H7MYCdkhwO797R1E6wA/view?usp=drive_link" target="_blank"><FileText size={16} /> Resume <Download size={13} /></a>}
              </div>
            )}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <span className="eyebrow">OR DROP ME A NOTE</span>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="How should I call you?" required maxLength="80" />
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required maxLength="254" />
            <label htmlFor="message">What&apos;s on your mind?</label>
            <textarea id="message" name="message" placeholder="Tell me a little about it..." required maxLength="2000" rows="3" />
            {formError && <p className="form-message form-error" role="alert">{formError}</p>}
            {formState === "sent" && <p className="form-message form-success" role="status"><Check size={16} /> Message sent — thanks for reaching out!</p>}
            <button className="button button-dark submit-button" type="submit" disabled={formState === "sending"}>
              {formState === "sending" ? "Sending..." : "Send your message"} {formState === "sending" ? null : <Send size={15} />}
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">SR.</span><span>MD SAJID RAZA</span></a>
        <span>DESIGNED & BUILT WITH CARE <span className="footer-heart">♥</span></span>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </>
  );
}

export default App;
