const translations = {
  en: {
    introTitle: "👋 Hi, I'm Andrey",
    introTagline: `I'm glad you're here. I'm a web developer who strives to create more than just beautiful websites: I develop digital solutions that bring your personality, your brand, and your target audience to life.<br>
    Whether you're just starting out or want to redesign your existing website, I'll help you bring your ideas to life. Creative. Reliable. Individual. Feel free to take a look around or contact me directly!`,
    aboutTitle: "🖊️ About Me",
    aboutText: `I love building websites with a creative twist. I use HTML, CSS, JavaScript, React, and Bootstrap to bring ideas to life. As a web developer, I combine modern technology with a keen sense of design. For me, every website is a project with character – because no two clients, no two companies, and no two target groups are the same. I work with various tools, frameworks, and CMS systems to find the perfect solution for you. What's important to me: custom design, clear communication, and a website that not only works, but has an impact.<br>
    Think creatively. Implement in a structured way. Become visible together.`,

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

