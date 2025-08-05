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
    I work with various tools, frameworks, and CMS systems to find the perfect solution for you. What's important to me: custom design, clear communication, and a website that not only works, but has an impact.<br><br>
    Think creatively. Implement in a structured way. Become visible together.`,
    skillsTitle: "🛠️ Skills",
    projectsTitle: "📁 Projects",
    project1Title: "🎨 Sketch Portfolio",
    project1Desc: "A portfolio site inspired by hand-drawn notebook styles.",
    project2Title: "📰 Blog Site",
    project2Desc: "Responsive blog using React and Bootstrap.",
    contactTitle: "📬 Contact",
    contactText: "Email <a href='mailto:andreyshilkovjr@gmail.com'>andreyshilkovjr@gmail.com</a>",
    footerText: "© 2025 Andrey"
    // other keys...
  },
  de: {
    introTitle: "👋 Hallo, ich bin Andrey",
    introVisible: "Webentwickler mit einem skizzenhaften Stil aus Leipzig",
    introMore: `Ich freue mich, dass du hier bist. Ich bin Webentwickler und entwickle nicht nur schöne Websites, sondern digitale Lösungen, die deine Persönlichkeit, Marke und Zielgruppe lebendig machen.<br><br>
    Egal ob du gerade erst anfängst oder deiner bestehenden Website einen neuen Anstrich geben willst – ich helfe dir dabei, deine Ideen umzusetzen. Kreativ. Zuverlässig. Individuell.<br><br>
    Schau dich gern um oder kontaktiere mich direkt!`,
    aboutTitle: "🖊️ Über Mich",
    aboutVisible: "Ich liebe es, kreative Websites zu bauen...",
    aboutMore: `Als Webentwickler kombiniere ich moderne Technik mit einem Gespür für Design. Für mich ist jede Website ein Projekt mit Charakter – denn kein Kunde, kein Unternehmen und keine Zielgruppe ist wie die andere.<br><br>
    Ich arbeite mit verschiedenen Tools, Frameworks und CMS-Systemen, um die perfekte Lösung für dich zu finden. Wichtig ist mir: individuelles Design, klare Kommunikation und eine Website, die nicht nur funktioniert, sondern wirkt.<br><br>
    Kreativ denken. Strukturiert umsetzen. Gemeinsam sichtbar werden.`,
    skillsTitle: "🛠️ Fähigkeiten",
    projectsTitle: "📁 Projekte",
    project1Title: "🎨 Skizzen-Portfolio",
    project1Desc: "Ein Portfolio im handgezeichneten Notizbuchstil.",
    project2Title: "📰 Prima Verein",
    project2Desc: "Responsives Blog mit React und Bootstrap.",
    contactTitle: "📬 Kontakt",
    contactText: "Email <a href='mailto:andreyshilkovjr@gmail.com'>andreyshilkovjr@gmail.com</a>",
    footerText: "© 2025 Andrey"
    // other keys...
  }
};

document.getElementById("language").addEventListener("change", (e) => {
  const lang = e.target.value;
  const t = translations[lang];

  document.getElementById("intro-title").textContent = t.introTitle;
  document.getElementById("intro-visible").innerHTML = t.introVisible;
  document.getElementById("intro-more").innerHTML = t.introMore;

  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-visible").innerHTML = t.aboutVisible;
  document.getElementById("about-more").innerHTML = t.aboutMore;

  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("projects-title").textContent = t.projectsTitle;
  document.getElementById("project1-title").textContent = t.project1Title;
  document.getElementById("project1-desc").textContent = t.project1Desc;
  document.getElementById("project2-title").textContent = t.project2Title;
  document.getElementById("project2-desc").textContent = t.project2Desc;
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-text").innerHTML = t.contactText;
  document.getElementById("footer-text").textContent = t.footerText;
});

