const translations = {
  fr: {
    title: "GabinTrigalet.com",
    "undertitle": "Ceci est mon portfolio",
    presentation: "Présentation",
    intro: "Bienvenue sur mon site. Je suis en train d'apprendre le développement pour devenir développeur full-stack.",
    competences: "Compétences",
    projets: "Projets",
    "explicationprojets": "Pas encore de projets concrets pour l'instant.",
    apropos: "À propos",
    "explicationapropos": "Je réalise des petits projets de code depuis deux ans. Ceci est mon tout premier site.",
    contact: "Contact",
    "email": "Email : gabin.asylium@gmail.com"
  },

  en: {
    title: "GabinTrigalet.com",
    "undertitle": "This is my portfolio",
    presentation: "Presentation",
    intro: "Welcome to my website. I am learning development to become a full-stack developer.",
    competences: "Skills",
    projets: "Projects",
    "explicationprojets": "No real projects yet.",
    apropos: "About",
    "explicationapropos": "I have been coding for two years. This is my first website.",
    contact: "Contact",
    "email": "Email: gabin.asylium@gmail.com"
  },

  es: {
    title: "GabinTrigalet.com",
    "undertitle": "Este es mi portafolio",
    presentation: "Presentación",
    intro: "Bienvenido a mi sitio web. Estoy aprendiendo desarrollo para convertirme en desarrollador full-stack.",
    competences: "Habilidades",
    projets: "Proyectos",
    "explicationprojets": "Aún no tengo proyectos concretos.",
    apropos: "Sobre mí",
    "explicationapropos": "He estado programando durante dos años. Este es mi primer sitio web.",
    contact: "Contacto",
    "email": "Correo: gabin.asylium@gmail.com"
  }
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}
