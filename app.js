const translations = {
  en: {
    introTitle: "👋 Hi, I'm Andrey",
    introTagline: "Web Developer with a Sketchy Touch from Leipzig Germany",
    aboutTitle: "🖊️ About Me",
    aboutText: "I love building websites with a creative twist. I use HTML, CSS, JavaScript, React, and Bootstrap to bring ideas to life.",
    skillsTitle: "🛠️ Skills",
    projectsTitle: "📁 Projects",
    project1Title: "🎨 Sketch Portfolio",
    project1Desc: "A portfolio site inspired by hand-drawn notebook styles.",
    project2Title: "📰 Blog Site",
    project2Desc: "Responsive blog using React and Bootstrap.",
    project3Title: "🛒 E-Commerce Prototype",
    project3Desc: "A simple online store with cart functionality using JavaScript.",
    contactTitle: "📬 Contact",
    contactText: "Email: <a href='mailto:you@example.com'>you@example.com</a>",
    footerText: "© 2025 Andrey"
  },
  de: {
    introTitle: "👋 Hallo, ich bin Andrey",
    introTagline: "Webentwickler mit einem skizzenhaften Touch aus Leipzig, Deutschland",
    aboutTitle: "🖊️ Über Mich",
    aboutText: "Ich liebe es, kreative Websites zu bauen. Ich nutze HTML, CSS, JavaScript, React und Bootstrap, um Ideen zum Leben zu erwecken.",
    skillsTitle: "🛠️ Fähigkeiten",
    projectsTitle: "📁 Projekte",
    project1Title: "🎨 Skizzen-Portfolio",
    project1Desc: "Ein Portfolio im handgezeichneten Notizbuchstil.",
    project2Title: "📰 Blog-Seite",
    project2Desc: "Responsives Blog mit React und Bootstrap.",
    project3Title: "🛒 E-Commerce-Prototyp",
    project3Desc: "Ein einfacher Online-Shop mit Warenkorb-Funktionalität in JavaScript.",
    contactTitle: "📬 Kontakt",
    contactText: "E-Mail: <a href='mailto:you@example.com'>you@example.com</a>",
    footerText: "© 2025 Andrey"
  }
};

document.getElementById("language").addEventListener("change", (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  document.getElementById("intro-title").textContent = t.introTitle;
  document.getElementById("intro-tagline").textContent = t.introTagline;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("projects-title").textContent = t.projectsTitle;
  document.getElementById("project1-title").textContent = t.project1Title;
  document.getElementById("project1-desc").textContent = t.project1Desc;
  document.getElementById("project2-title").textContent = t.project2Title;
  document.getElementById("project2-desc").textContent = t.project2Desc;
  document.getElementById("project3-title").textContent = t.project3Title;
  document.getElementById("project3-desc").textContent = t.project3Desc;
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-text").innerHTML = t.contactText;
  document.getElementById("footer-text").textContent = t.footerText;
});

