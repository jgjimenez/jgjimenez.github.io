const translations = {
  es: {
    tagline: "Software libre, hecho con propósito",
    badge: "Cliente Comunitario",
    subtitle: "Un cliente <strong>no oficial</strong> pero totalmente compatible con <strong>NethSecurity</strong>.",
    hero_text: "Se integra con la API de tu servidor NethServer y añade funciones prácticas que no están disponibles en la interfaz web: notificaciones en tiempo real, gestión rápida de reglas, resumen de amenazas, y más — todo sin modificar tu configuración.",
    btn_github: "Código en GitHub →",
    btn_support: "Apoyar el desarrollo",
    support_title: "Tu apoyo impulsa el <span class=\"highlight\">software libre</span>",
    support_intro: "NethSecure GO es un proyecto <strong>comunitario, gratuito y de código abierto</strong>. No está respaldado por NethServer, pero sí construido con respeto a su arquitectura y filosofía.",
    support_text: "Con tu apoyo, podré seguir mejorando esta app y crear más herramientas que ayuden a comunidades de software libre como la tuya.",
    feature1: "✅ Añadir notificaciones push, modo oscuro, exportación de logs",
    feature2: "✅ Garantizar compatibilidad con nuevas versiones de NethSecurity",
    feature3: "✅ Desarrollar nuevas apps para otras plataformas libres",
    coffee_title: "☕ Buy Me a Coffee",
    coffee_text: "Una donación amigable para seguir programando con energía.",
    coffee_btn: "Apoyar ahora",
    share_title: "💬 Comparte",
    share_text: "Difunde NethSecure GO en foros, redes o comunidades.",
    share_btn: "Compartir",
    contribute_title: "🛠️ Contribuye",
    contribute_text: "Reporta bugs, sugiere funciones o envía tu código.",
    contribute_btn: "Contribuir en GitHub",
    footer_text: "NethSecure GO es un proyecto comunitario independiente. No está afiliado, patrocinado ni respaldado por NethServer o sus desarrolladores. © 2025 <a href=\"https://github.com/jgjsdev\">JGJS DEV</a> · Hecho con ❤️ para el software libre."
  },
  en: {
    tagline: "Free software, built with purpose",
    badge: "Community Client",
    subtitle: "An <strong>unofficial</strong> but fully compatible client for <strong>NethSecurity</strong>.",
    hero_text: "It integrates with your NethServer API and adds practical features not available in the web interface: real-time notifications, quick rule management, threat summaries, and more — all without altering your server configuration.",
    btn_github: "Code on GitHub →",
    btn_support: "Support Development",
    support_title: "Your support powers <span class=\"highlight\">free software</span>",
    support_intro: "NethSecure GO is a <strong>community-driven, free and open-source</strong> project. It is not backed by NethServer, but built with deep respect for its architecture and philosophy.",
    support_text: "With your support, I can keep improving this app and build more tools for free software communities like yours.",
    feature1: "✅ Add push notifications, dark mode, log export",
    feature2: "✅ Ensure compatibility with new NethSecurity versions",
    feature3: "✅ Develop new apps for other free software platforms",
    coffee_title: "☕ Buy Me a Coffee",
    coffee_text: "A friendly donation to keep coding with energy.",
    coffee_btn: "Support Now",
    share_title: "💬 Share",
    share_text: "Spread the word about NethSecure GO in forums, social media, or communities.",
    share_btn: "Share",
    contribute_title: "🛠️ Contribute",
    contribute_text: "Report bugs, suggest features, or submit your code.",
    contribute_btn: "Contribute on GitHub",
    footer_text: "NethSecure GO is an independent community project. It is not affiliated with, sponsored, or endorsed by NethServer or its developers. © 2025 <a href=\"https://github.com/jgjsdev\">JGJS DEV</a> · Made with ❤️ for free software."
  }
};

function setLanguage(lang) {
  // Actualizar atributos
  document.body.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  // Textos simples (sin HTML)
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Textos con HTML permitido
  document.querySelectorAll('[data-translation]').forEach(el => {
    const key = el.getAttribute('data-translation');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Actualizar enlace de compartir
  const shareLink = document.querySelector('.share-link');
  if (shareLink) {
    const text = lang === 'es' 
      ? '¡Descubre NethSecure GO, el cliente comunitario para NethSecurity!'
      : 'Check out NethSecure GO, a community client for NethSecurity!';
    shareLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=https%3A%2F%2Fjgjsdev.github.io&via=jgjsdev`;
  }

  // Botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Guardar
  localStorage.setItem('preferred-lang', lang);
}

// Eventos
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// Al cargar
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('preferred-lang');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
  const lang = saved || browserLang;
  setLanguage(lang);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});