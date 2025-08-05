const translations = {
  en: {
    introTitle: "👋 Hi, I'm Andrey",
    introVisible: "Web Developer with a Sketchy Touch from Leipzig",
    introMore: `I'm glad you're here. I'm a web developer who strives to create more than just beautiful websites: I develop digital solutions that bring your personality, your brand, and your target audience to life.<br><br>
Whether you're just starting out or want to redesign your existing website, I'll help you bring your ideas to life. Creative. Reliable. Individual.<br><br>
Feel free to take a look around or contact me directly!`,
    aboutTitle: "🖊️ About Me",
    aboutVisible: "I love building websites with a creative twist...",
    aboutMore: `As a web developer, I combine modern technology with a keen sense of design. For me, every website is a project with character – because no two clients, no two companies, and no two target groups are the same.<br><br>
I work with various tools, frameworks and CMS systems to find the perfect solution for you. What's important to me: custom design, clear communication, and a website that not only works, but has an impact.`,
    skillsTitle: "🛠️ Skills & Languages",
    projectsTitle: "📁 Projects",
    project1Title: "🎨 Sketch Portfolio",
    project1Desc: "A portfolio site inspired by hand‑drawn notebook styles.",
    project2Title: "📰 Prima Verein Leipzig",
    project2Desc: "Responsive Website with Bootstrap.",
    project3Title: "🛒 E‑Commerce Prototype",
    project3Desc: "A simple online store with cart functionality using JavaScript.",
    servicesTitle: "🧰 What can I do for you",
    servicesItems: [
      "🔧 Custom web development<br/>Custom websites with clear code and a modern design",
      "📱 Responsive design<br/>Optimized for all devices – from smartphones to desktops",
      "⚙️ Technical implementation & performance optimization<br/>Fast, stable, and search engine friendly"
    ],
    contactTitle: "📬 Contact",
    contactText: "Email: <a href='mailto:andreyshilkovjr@gmail.com'>andreyshilkovjr@gmail.com</a>",
    footerText: "© 2025 Andrey"
  },
  de: {
    introTitle: "👋 Hallo, ich bin Andrey",
    introVisible: "Webentwickler mit einem skizzenhaften Stil aus Leipzig",
    introMore: `Ich freue mich, dass du hier bist. Ich bin Webentwickler und entwickle nicht nur schöne Websites, sondern digitale Lösungen, die deine Persönlichkeit, deine Marke und deine Zielgruppe lebendig machen.<br><br>
Egal ob du gerade erst anfängst oder deiner bestehenden Website einen neuen Anstrich geben willst – ich helfe dir dabei, deine Ideen umzusetzen. Kreativ. Zuverlässig. Individuell.<br><br>
Schau dich gern um oder kontaktiere mich direkt!`,
    aboutTitle: "🖊️ Über Mich",
    aboutVisible: "Ich liebe es, kreative Websites zu bauen...",
    aboutMore: `Als Webentwickler kombiniere ich moderne Technik mit einem Gespür für Design. Für mich ist jede Website ein Projekt mit Charakter – denn kein Kunde, kein Unternehmen und keine Zielgruppe ist wie die andere.<br><br>
Ich arbeite mit verschiedenen Tools, Frameworks und CMS‑Systemen, um die perfekte Lösung für dich zu finden. Wichtig ist mir: individuelles Design, klare Kommunikation und eine Website, die nicht nur funktioniert, sondern wirkt.`,
    skillsTitle: "🛠️ Fähigkeiten & Sprachen",
    projectsTitle: "📁 Projekte",
    project1Title: "🎨 Skizzen‑Portfolio",
    project1Desc: "Ein Portfolio im handgezeichneten Notizbuchstil.",
    project2Title: "📰 Prima Verein Leipzig",
    project2Desc: "Responsive Website mit Bootstrap.",
    project3Title: "🛒 E‑Commerce‑Prototyp",
    project3Desc: "Ein einfacher Onlineshop mit Warenkorb in JavaScript.",
    servicesTitle: "🧰 Was kann ich für Sie tun",
    servicesItems: [
      "🔧 Individuelle Webentwicklung<br/>Individuelle Websites mit klarem Code und modernem Design",
      "📱 Responsives Design<br/>Optimiert für alle Geräte – vom Smartphone bis zum Desktop",
      "⚙️ Technische Umsetzung & Performance-Optimierung<br/>Schnell, stabil und suchmaschinenfreundlich"
    ],
    contactTitle: "📬 Kontakt",
    contactText: "E‑Mail: <a href='mailto:andreyshilkovjr@gmail.com'>andreyshilkovjr@gmail.com</a>",
    footerText: "© 2025 Andrey"
  }
};

function applyTranslations(lang) {
  const t = translations[lang];

  // Intro & About
  document.getElementById("intro-title").textContent = t.introTitle;
  document.getElementById("intro-visible").innerHTML = t.introVisible;
  document.getElementById("intro-more").innerHTML = t.introMore;

  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-visible").innerHTML = t.aboutVisible;
  document.getElementById("about-more").innerHTML = t.aboutMore;

  // Skills and Projects
  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("projects-title").textContent = t.projectsTitle;

  document.getElementById("project1-desc").textContent = t.project1Desc;
  document.getElementById("project2-desc").textContent = t.project2Desc;
  if (document.getElementById("project3-desc")) {
    document.getElementById("project3-desc").textContent = t.project3Desc;
  }

  // Project Titles: preserve <img>
  const updateProjectTitle = (id, text) => {
    const el = document.getElementById(id);
    if (el && el.querySelector("img")) {
      const img = el.querySelector("img");
      const titleText = text.replace(/^.*?\s/, ''); // Remove emoji if needed
      el.innerHTML = "";
      el.appendChild(img);
      el.append(` ${titleText}`);
    }
  };

  updateProjectTitle("project1-title", t.project1Title);
  updateProjectTitle("project2-title", t.project2Title);
  if (document.getElementById("project3-title")) {
    updateProjectTitle("project3-title", t.project3Title);
  }

  // Services
  document.getElementById("services-title").textContent = t.servicesTitle;
  const serviceList = document.querySelector(".services-list");
  const items = serviceList.querySelectorAll("li");
  t.servicesItems.forEach((text, index) => {
    if (items[index]) {
      const [title, desc] = text.split("<br/>");
      items[index].innerHTML = `<strong>${title}</strong><br/>${desc}`;
    }
  });

  // Contact
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-text").innerHTML = t.contactText;

  // Footer
  document.getElementById("footer-text").textContent = t.footerText;
}

// Language switch handler
document.getElementById("language").addEventListener("change", (e) => {
  applyTranslations(e.target.value);
});

// Load default language
document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "en";
  document.getElementById("language").value = defaultLang;
  applyTranslations(defaultLang);
});



