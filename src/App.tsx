import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Check, Code2, Download, Github, GraduationCap,
  Linkedin, Mail, Menu, Shield, Terminal, X
} from 'lucide-react'
import { portfolio } from './data/portfolio'

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="dark-site">
      <div className="background-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">&lt;/&gt;</span>
          <span>Pragya<span className="logo-muted">.dev</span></span>
        </a>

        <nav className={menuOpen ? 'nav-open' : ''}>
          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="resume-btn" href="/resume/Pragya_Kumari_Resume.pdf" download>
            Resume <Download size={13} />
          </a>
        </nav>

        <button className="menu" onClick={() => setMenuOpen(v => !v)} aria-label="menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero-dark">
          <div className="hero-grid">
            <div className="hero-copy-dark">
              <div className="status-line"><span /> AVAILABLE FOR ENTRY-LEVEL ROLES</div>
              <p className="hero-overline">B.TECH CSE · 2026 GRADUATE · RANCHI, INDIA</p>
              <h1>
                Hi, I'm <span>Pragya.</span>
                <br />
                I build web apps.
              </h1>
              <p className="hero-description">
                A fresher and full-stack developer who enjoys building responsive
                React interfaces, REST APIs, authentication systems and database-backed applications.
              </p>

              <div className="hero-ctas">
                <a className="primary-btn" href="#projects">Explore projects <ArrowUpRight size={15} /></a>
                <a className="secondary-btn" href="#contact">Get in touch</a>
              </div>

              <div className="social-row">
                <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
                <a href={portfolio.leetcode} target="_blank" rel="noreferrer"><Code2 size={15} /> LeetCode</a>
              </div>
            </div>

            <div className="hero-profile">
  <div className="profile-image">
    <img
      src="/assets/profile/pragya.jpg"
      alt="Pragya Kumari"
    />
  </div>

  <div className="profile-caption">
    <div>
      <span>PRAGYA KUMARI</span>
      <p>FULL-STACK DEVELOPER · FRESHER</p>
    </div>

    <p className="profile-location">RANCHI, INDIA</p>
  </div>
</div>
          </div>

          <div className="hero-strip">
            <span>01 / INTRO</span>
            <span>REACT.JS</span>
            <span>NODE.JS</span>
            <span>EXPRESS.JS</span>
            <span>MONGODB</span>
            <span>REST APIs</span>
            <span>↓ SCROLL</span>
          </div>
        </section>

        <section id="about" className="dark-section about">
          <SectionTag number="01" text="ABOUT ME" />
          <div className="about-grid">
            <h2>Learning by<br /><span>building.</span></h2>
            <div>
              <p className="lead">{portfolio.summary}</p>
              <p>
                As a recent B.Tech Computer Science graduate, I'm looking for an entry-level
                software engineering opportunity where I can contribute to a team, learn from
                experienced developers, and keep improving through real product work.
              </p>
            </div>
          </div>

          <div className="quick-stats">
            <Stat number="9.27" suffix="/10" label="B.Tech CGPA" />
            <Stat number="350" suffix="+" label="LeetCode DSA problems" />
            <Stat number="03" suffix="" label="Featured projects" />
            <Stat number="2026" suffix="" label="Graduation year" />
          </div>
        </section>

        <section id="projects" className="dark-section projects">
          <SectionTag number="02" text="PROJECTS" />
          <div className="section-heading">
            <h2>What I've<br /><span>built so far.</span></h2>
            <p>Full-stack projects built while learning and applying modern web development.</p>
          </div>

          <div className="project-cards">
            {portfolio.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="skills" className="dark-section skills">
          <SectionTag number="03" text="SKILLS" />
          <div className="section-heading">
            <h2>My current<br /><span>toolkit.</span></h2>
            <p>Technologies and fundamentals I've worked with through projects, internship and coursework.</p>
          </div>

          <div className="skills-list">
            {Object.entries(portfolio.skills).map(([category, items], index) => (
              <div className="skill-line" key={category}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{category}</h3>
                <div className="skill-pills">
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="dark-section experience">
          <SectionTag number="04" text="EXPERIENCE" />
          <div className="experience-card">
            <div className="exp-top">
              <span>01</span>
              <span>{portfolio.experience[0].period}</span>
            </div>
            <div className="exp-main">
              <div>
                <p className="exp-label">INTERNSHIP · HYBRID</p>
                <h2>{portfolio.experience[0].role}</h2>
                <h3>{portfolio.experience[0].company}</h3>
                <p className="exp-project">{portfolio.experience[0].project}</p>
                <a href={portfolio.experience[0].github} target="_blank" rel="noreferrer" className="repo-link">
                  GitHub repository <ArrowUpRight size={14} />
                </a>
              </div>
              <ul>
                {portfolio.experience[0].bullets.map(bullet => (
                  <li key={bullet}><Check size={14} />{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="dark-section education">
          <SectionTag number="05" text="EDUCATION" />
          <div className="education-list">
            {portfolio.education.map((item, index) => (
              <article key={item.institution}>
                <span className="edu-no">0{index + 1}</span>
                <GraduationCap size={18} />
                <div>
                  <small>{item.period}</small>
                  <h3>{item.qualification}</h3>
                  <p>{item.institution} · {item.location}</p>
                </div>
                <strong>{item.detail}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section credentials">
          <SectionTag number="06" text="ACHIEVEMENTS" />
          <div className="credential-grid">
            <article className="leetcode-card">
              <div className="card-label">LEETCODE · DSA</div>
              <div className="leetcode-number">350<span>+</span></div>
              <h3>Problems solved</h3>
              <p>Data Structures & Algorithms problems solved on LeetCode.</p>
              <a href={portfolio.leetcode} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={14} /></a>
              <div className="mini-code">twoPointers()<br />binarySearch()<br />graphTraversal()</div>
            </article>

            {portfolio.credentials.filter(item => item.type === 'certificate').map(item => (
              <CertificateCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-dark">
          <div className="contact-inner">
            <SectionTag number="07" text="CONTACT" />
            <h2>Let's start<br /><span>something.</span></h2>
            <p>
              I'm looking for an entry-level software engineering opportunity.
              If you think my skills could fit your team, I'd be happy to connect.
            </p>
            <div className="contact-buttons">
              <a className="primary-btn" href={`mailto:${portfolio.email}`}>Email me <Mail size={14} /></a>
              <a className="secondary-btn" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={14} /></a>
            </div>
            <div className="contact-details">
              <span>{portfolio.email}</span>
              <span>{portfolio.phone}</span>
              <span>{portfolio.location}</span>
            </div>
          </div>
          <div className="contact-decoration">
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="contact-plus">+</div>
            <div className="contact-terminal"><Terminal size={15} /><span>open_to_work = true</span></div>
          </div>
        </section>
      </main>

      <footer className="footer-dark">
        <span>&lt;/&gt; Pragya Kumari</span>
        <span>© {new Date().getFullYear()} · B.Tech CSE · 2026</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

function SectionTag({ number, text }: { number: string; text: string }) {
  return (
    <div className="section-tag">
      <span>{number}</span><i /><b>{text}</b>
    </div>
  )
}

function Stat({ number, suffix, label }: { number: string; suffix: string; label: string }) {
  return (
    <div className="quick-stat">
      <strong>{number}<small>{suffix}</small></strong>
      <span>{label}</span>
    </div>
  )
}

type Project = (typeof portfolio.projects)[number]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className={`project-card pc-${index}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .12 }}
    >
      <div className="project-card-head">
        <span>0{index + 1}</span>
        {project.featured && <b>FEATURED PROJECT</b>}
        <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /></a>
      </div>

      <div className="project-card-body">
        <div className="project-copy">
          <h3>{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="tech-row">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
          <ul>{project.bullets.slice(0, 3).map(b => <li key={b}>{b}</li>)}</ul>
          <div className="project-links">
  {project.live && (
    <a
      className="project-link live-link"
      href={project.live}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo <ArrowUpRight size={14} />
    </a>
  )}

  <a
    className="project-link"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    GitHub <Github size={13} />
  </a>
</div>
        </div>
        <ProjectVisual index={index} />
      </div>
    </motion.article>
  )
}

function ProjectVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="project-visual career">
        <div className="browser-bar"><i /><i /><i /></div>
        <div className="dashboard-layout">
          <div className="side-nav"><span /><span /><span /><span /></div>
          <div className="dashboard-content">
            <small>CAREERPILOT</small>
            <strong>Career<br />Dashboard</strong>
            <div className="chart"><i /><i /><i /><i /><i /><i /></div>
            <div className="dash-row"><span /><span /><span /></div>
          </div>
        </div>
        <em>AI</em>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="project-visual teamflow">
        <div className="flow-center"><Shield size={20} /></div>
        <div className="flow-role fr1"><b>ADMIN</b><span>14 endpoints</span></div>
        <div className="flow-role fr2"><b>MANAGER</b><span>projects</span></div>
        <div className="flow-role fr3"><b>MEMBER</b><span>tasks</span></div>
        <i className="flow-line fl1" /><i className="flow-line fl2" /><i className="flow-line fl3" />
      </div>
    )
  }

  return (
    <div className="project-visual movie">
      <div className="movie-grid" />
      <div className="movie-core"><Code2 size={18} /><span>SIMILARITY</span></div>
      <i className="movie-point mp1" /><i className="movie-point mp2" /><i className="movie-point mp3" />
      <div className="movie-label">5,000+ TMDB RECORDS</div>
    </div>
  )
}

type Credential = (typeof portfolio.credentials)[number]

function CertificateCard({ item }: { item: Credential }) {
  const [failed, setFailed] = useState(false)
  return (
    <article className="certificate-card">
      <div className={`certificate-image ${failed ? 'failed' : ''}`}>
        {!failed ? (
          <img src={item.image} alt={item.title} onError={() => setFailed(true)} />
        ) : (
          <div>
            <small>REAL CERTIFICATE IMAGE</small>
            <span>Place your original image in<br />public/assets/certificates/</span>
          </div>
        )}
      </div>
      <div className="certificate-info">
        <small>CERTIFICATION</small>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

export default App
