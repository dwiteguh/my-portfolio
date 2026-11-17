import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Menu, X, Code2, Smartphone, Globe2, Database, Cloud, Palette,
  ExternalLink, GraduationCap, BriefcaseBusiness, Award, Download,
  ChevronRight, Sparkles
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Moch Dwi Teguh Akbar Rusdianto",
  shortName: "Teguh",
  role: "Junior Mobile & Web Developer",
  email: "teguhdwi939@gmail.com",
  phone: "+62 895-2655-1155",
  location: "Tangerang Selatan, Indonesia",
  github: "https://github.com/dwiteguh",
  linkedin: "https://www.linkedin.com/in/m-dwi-teguh-rusdianto",
};




const skills = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Dart", logo: "https://cdn.simpleicons.org/dart/0175C2" },
    ],
  },
  {
    title: "Web Development",
    icon: Code2,
    items: [
      { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", logo: "https://cdn.simpleicons.org/css/1572B6" },
    ],
  },
  {
    title: "Programming Language",
    icon: Code2,
    items: [
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk/ED8B00" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    items: [
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "DBVisualizer", logo: null },
    ],
  },
  {
    title: "UI/UX & Graphic Design",
    icon: Palette,
    items: [
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Photoshop", logo: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
      { name: "Illustrator", logo: "https://cdn.simpleicons.org/adobeillustrator/FF9A00" },
    ],
  },
  {
    title: "Data Analytics & BI",
    icon: Database,
    items: [
      { name: "Power BI", logo: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Tableau", logo: "https://cdn.simpleicons.org/tableau/E97627" },
    ],
  },
  
{
  title: "Cloud, Networking & Tools",
  icon: Cloud,
  items: [
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Cisco Packet Tracer", logo: null },
    { name: "ClickUp", logo: "https://cdn.simpleicons.org/clickup/7B68EE" },
  ],
},

];



const projects = [
  {
    number: "01",
    name: "VANESIA",
    category: "Website Komersial · Laravel",
    description:
      "Website profil bisnis untuk membantu pemasok vanila premium Indonesia menjangkau calon pembeli, termasuk pasar internasional.",
    details: [
      "Desain responsif",
      "Struktur informasi 5 bagian",
      "Domain dan deployment",
      "Optimasi dasar SEO",
    ],
    image: `${import.meta.env.BASE_URL}images/vanesia.jpg`,
    link: "https://vanesia.web.id",
    github: "https://github.com/dwiteguh/vanesia",
    label: "Website bisnis",
  },
  {
    number: "02",
    name: "MyFinance",
    category: "Aplikasi Keuangan · Flutter",
    description:
      "Aplikasi pencatatan keuangan pribadi untuk membantu pengguna memantau saldo, pemasukan, pengeluaran, dan transaksi terbaru.",
    details: [
      "Flutter & Dart",
      "Firebase Authentication",
      "Dashboard keuangan",
      "Riwayat transaksi",
      "Pencatatan pemasukan dan pengeluaran",
    ],
    image: `${import.meta.env.BASE_URL}images/myfinance.jpg`,
    link: "https://github.com/dwiteguh/myfinance",
    github: "https://github.com/dwiteguh/myfinance",
    label: "Aplikasi mobile",
  },
  {
    number: "03",
    name: "KosMonitor",
    category: "Sistem Informasi · Laravel",
    description:
      "Aplikasi monitoring dan pengelolaan kos berbasis web untuk membantu pemilik kos mengelola kamar, penghuni, penyewaan, keuangan, tagihan, dan keluhan.",
    details: [
      "Dashboard pemilik kos",
      "Manajemen data kamar",
      "Manajemen data penghuni",
      "Pengelolaan penyewaan",
      "Keuangan dan tagihan",
      "Monitoring keluhan",
    ],
    image: `${import.meta.env.BASE_URL}images/kosmonitor.jpg`,
    link: null,
    github: "https://github.com/dwiteguh/kosmonitor",
    label: "Sistem informasi kos",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Beranda", "#beranda"], ["Tentang", "#tentang"], ["Keahlian", "#keahlian"], ["Proyek", "#proyek"], ["Pengalaman", "#pengalaman"], ["Kontak", "#kontak"]];

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#beranda" onClick={closeMenu}><span className="brand-mark">T.</span><span>teguh<span className="brand-dot">.</span></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#kontak" onClick={closeMenu}>Hubungi Saya <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="beranda">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> TERBUKA UNTUK PELUANG</div>
            <p className="hero-pretitle">Halo, saya</p>
            <h1>Moch Dwi Teguh<br /><span>Akbar Rusdianto.</span></h1>
            <h2>Mahasiswa Sistem Informasi <i>·</i> {profile.role}</h2>
            <p className="hero-desc">Saya membangun aplikasi mobile dan website yang fungsional, responsif, serta berorientasi pada kebutuhan pengguna. Senang mempelajari teknologi baru dan mengubah ide menjadi produk digital.</p>
            <div className="hero-actions">
            <div className="hero-actions">
              <a className="button button-primary" href="#proyek">
                Lihat Proyek <ArrowRight size={17} />
              </a>

              <a className="button button-ghost" href="/Moch_Dwi_Teguh_CV_Mobile_Developer.pdf" download>
                Download CV <Download size={17} />
              </a>
            </div>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-line" /><span className="social-caption">Temukan saya di internet</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="profile-frame">
              <div className="profile-placeholder">
                <img
                  src={`${import.meta.env.BASE_URL}images/profil.jpg`}
                  alt="Foto Profil"
                />
              </div>
              <div className="frame-corner corner-tl" /><div className="frame-corner corner-br" />
            </div>
            <div className="floating-card card-code"><Code2 size={17} /><span>Clean Code</span><b>01</b></div>
            <div className="floating-card card-stack"><span className="stack-icon">✦</span><div><b>Flutter & Laravel</b><small>Tech Stack Utama</small></div></div>
            <div className="hero-index">PORTOFOLIO / 2026</div>
          </div>
          <a className="scroll-indicator" href="#tentang"><span>GULIR UNTUK MELIHAT</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section-space" id="tentang">
          <div className="section-kicker">01 / TENTANG SAYA</div>
          <div className="about-grid">
            <div><h2 className="section-title">Membangun solusi digital<br /><span>dengan tujuan.</span></h2></div>
            <div className="about-content">
              <p className="about-lead">Saya adalah mahasiswa Sistem Informasi di Universitas Pamulang yang memiliki ketertarikan pada pengembangan aplikasi mobile dan web.</p>
              <p>Dalam proses belajar dan mengembangkan proyek, saya terbiasa terlibat mulai dari perancangan tampilan, pengembangan fitur, pengelolaan basis data, hingga proses deployment website. Saya percaya teknologi yang baik bukan hanya terlihat menarik, tetapi juga mudah digunakan dan mampu menjawab kebutuhan.</p>
              <div className="about-meta">
                <div><span>LOKASI</span><b><MapPin size={14} /> {profile.location}</b></div>
                <div><span>PENDIDIKAN</span><b><GraduationCap size={15} /> Universitas Pamulang</b></div>
              </div>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>02<span>+</span></strong><small>Proyek utama</small></div>
            <div><strong>05<span>+</span></strong><small>Area keahlian</small></div>
            <div><strong>03<span>+</span></strong><small>Proyek utama</small></div>
            <div className="stats-note"><Sparkles size={18} /><span>Terus belajar, terus berkembang.</span></div>
          </div>
        </section>

        <section className="skills section-wrap section-space" id="keahlian">
          <div className="section-kicker">02 / KEAHLIAN</div>
          <div className="section-heading"><h2 className="section-title">Teknologi yang saya<br /><span>gunakan.</span></h2><p>Perangkat dan kemampuan yang saya gunakan untuk merancang serta membangun solusi digital.</p></div>
          <div className="skills-grid">
            {skills.map(({title, icon: Icon, items}, i) => <article className="skill-card" key={title}>
              <div className="skill-top"><span className="skill-icon"><Icon size={21} /></span><span className="skill-number">0{i + 1}</span></div>
              <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span className="skill-item" key={item.name}>
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.name} logo`}
                          className="skill-logo"
                        />
                      ) : (
                        <Database size={19} />
                      )}
                      {item.name}
                    </span>
                  ))}
                </div>

            </article>)}
          </div>
        </section>

        <section className="projects section-wrap section-space" id="proyek">
          <div className="section-kicker">03 / PROYEK PILIHAN</div>
          <div className="section-heading"><h2 className="section-title">Beberapa hal yang<br /><span>pernah saya bangun.</span></h2><p>Setiap proyek menjadi kesempatan untuk menerapkan pengetahuan dan mengembangkan kemampuan baru.</p></div>
          <div className="project-list">
            {projects.map(project => <article className="project-card" key={project.number}>
          <div
            className="project-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(9,7,17,.02), rgba(9,7,17,.28)), url("${project.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="project-image-label">{project.label}</span>
            <span className="project-number">{project.number}</span>
          </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p>
                <div className="project-details">{project.details.map(d => <span key={d}><i />{d}</span>)}</div>
               <div className="project-links">
  {project.link && (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      Lihat Proyek <ArrowUpRight size={16} />
    </a>
  )}

  <a
    className="github-link"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    <Github size={16} /> Kode Sumber
  </a>
</div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="experience section-wrap section-space" id="pengalaman">
          <div className="section-kicker">04 / PENGALAMAN & PENDIDIKAN</div>
          <div className="timeline-grid">
            <div><h2 className="section-title">Perjalanan<br /><span>saya.</span></h2><p className="timeline-intro">Pengalaman proyek dan proses pembelajaran yang membentuk kemampuan saya hingga saat ini.</p></div>
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">SEPTEMBER 2026</span><h3><BriefcaseBusiness size={17} /> Pengembangan Website VANESIA</h3><p>Mengembangkan website bisnis secara end-to-end, mulai dari desain antarmuka, pengembangan halaman, hingga konfigurasi domain dan hosting.</p><span className="timeline-type">PROYEK KOMERSIAL</span></article>
              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">AGUSTUS 2026</span><h3><Smartphone size={17} /> Pengembangan MyFinance</h3><p>Membangun aplikasi pencatatan keuangan pribadi lintas platform menggunakan Flutter dan Dart, dengan autentikasi serta dashboard keuangan.</p><span className="timeline-type">PROYEK PRIBADI</span></article>

<article className="timeline-item">
  <span className="timeline-dot" />
  <span className="timeline-date">PROYEK PENGEMBANGAN</span>
  <h3>
    <BriefcaseBusiness size={17} />
    Pengembangan KosMonitor
  </h3>
  <p>
    Mengembangkan sistem informasi monitoring kos berbasis web
    menggunakan Laravel, dengan fitur pengelolaan kamar,
    penghuni, penyewaan, keuangan, tagihan, dan keluhan.
  </p>
  <span className="timeline-type">PROYEK PENGEMBANGAN</span>
</article>


              <article className="timeline-item"><span className="timeline-dot" /><span className="timeline-date">2024</span><h3><GraduationCap size={17} /> Universitas Pamulang</h3><p>Program Studi Sistem Informasi. IPK yang tercantum pada CV: 3,33 / 4,00.</p><span className="timeline-type">PENDIDIKAN</span></article>
            </div>
          </div>
          <div className="certificates">
            <div className="certificate-heading"><Award size={19} /><h3>Pelatihan & Sertifikasi</h3></div>
            <div className="certificate-item"><div><b>UI/UX Designer Bootcamp</b><span>Hacktiv8 Indonesia · Januari 2024</span></div><span className="certificate-type">BOOTCAMP</span></div>
            <div className="certificate-item"><div><b>Cloud Practitioner Essentials</b><span>Dicoding Academy · September 2023</span></div><a href="https://www.dicoding.com/" target="_blank" rel="noreferrer">Lihat penyelenggara <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section className="contact section-wrap section-space" id="kontak">
          <div className="contact-panel">
            <div className="section-kicker">05 / HUBUNGI SAYA</div>
            <div className="contact-content"><div><h2> Punya ide menarik?<br /><span>Mari kita wujudkan.</span></h2><p>Saya terbuka untuk diskusi proyek, kesempatan magang, kolaborasi, maupun bertukar pengalaman seputar teknologi.</p></div><a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Diskusi%20dan%20Kolaborasi`}>Kirim Email <ArrowUpRight size={18} /></a></div>
        
            <div className="contact-bottom"><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><span><MapPin size={16} /> {profile.location}</span><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a></div></div>
         <a
  className="button button-ghost whatsapp-button"
  href="https://wa.me/6289526551155"
  target="_blank"
  rel="noreferrer"
>
  Hubungi via WhatsApp <ArrowUpRight size={17} />
</a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#beranda"><span className="brand-mark">T.</span><span>teguh<span className="brand-dot">.</span></span></a><span>© 2026 {profile.name}. Dibuat dengan semangat belajar.</span><a href="#beranda">Kembali ke atas ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
