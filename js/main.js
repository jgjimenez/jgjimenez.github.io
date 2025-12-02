const translations = {
  es: {
    tagline: "Software libre, hecho con propósito",
    badge: "Cliente Comunitario",
    subtitle: "Un cliente <strong>no oficial</strong> pero totalmente compatible con <strong>NethSecurity</strong>.",
    hero_text: "Se integra con la API de tu servidor NethSecurity y añade funciones prácticas que no están disponibles en la interfaz web, y más — todo sin modificar tu configuración.",
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
    download_title: "Descarga <span class=\"highlight\">NethSecure GO</span>",
    about_title: "¿Quién soy?",
    about_text: "<p>Hola, soy <strong>José Gregorio Jiménez Sánchez</strong>, desarrollador de software y padre de dos hijos desde Venezuela.</p><p>Dedico mi tiempo a crear herramientas de código abierto para comunidades como <strong>NethServer</strong>, con el objetivo de facilitar la seguridad y gestión de servidores a usuarios de todo el mundo.</p><p>Mi trabajo se realiza desde un espacio muy humilde, pero con un compromiso firme con la calidad, la ética y el apoyo al software libre.</p><p>Cada donación me ayuda a mejorar mi workspace, seguir formándome y dedicar más horas a proyectos que beneficien a la comunidad.</p>",
    android_label: "Android",
    android_desc: "Disponible para dispositivos Android.",
    android_btn: "Descargar APK",
    ios_label: "iOS",
    ios_desc: "Próximamente en la App Store.",
    ios_btn: "Próximamente",
    footer_text: "NethSecure GO es un proyecto comunitario independiente. No está afiliado, patrocinado ni respaldado por NethServer o sus desarrolladores. © 2025 <a href=\"https://github.com/jgjsdev\">JGJS DEV</a> · Hecho con ❤️ para el software libre."
  },
  en: {
    tagline: "Free software, built with purpose",
    badge: "Community Client",
    subtitle: "An <strong>unofficial</strong> but fully compatible client for <strong>NethSecurity</strong>.",
    hero_text: "It integrates with your NethSecurity API and adds practical features not available in the web interface, and more — all without altering your server configuration.",
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
    download_title: "Download <span class=\"highlight\">NethSecure GO</span>",
    about_title: "About Me",
    about_text: "<p>Hello! I'm <strong>José Gregorio Jiménez Sánchez</strong>, a software developer and father of two from Venezuela.</p><p>I dedicate my time to building open-source tools for communities like <strong>NethServer</strong>, with the goal of making server security and management accessible to users worldwide.</p><p>I work from a very humble setup, but with a strong commitment to quality, ethics, and supporting free software.</p><p>Every donation helps me improve my workspace, continue my training in technologies like Flutter and cybersecurity, and dedicate more hours to projects that benefit the community.</p>",
    android_label: "Android",
    android_desc: "Available for Android devices.",
    android_btn: "Download APK",
    ios_label: "iOS",
    ios_desc: "Coming soon to the App Store.",
ios_btn: "Coming Soon",
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