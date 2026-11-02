// Las respuestas del formulario llegan a eugenia.gonzalezgomez@udem.edu vía Web3Forms.
// El correo de destino está ligado a la "access_key" del formulario en index.html.
const FORM_URL = 'https://api.web3forms.com/submit';

const EN = {
  'skip': 'Skip to content',
  'nav.story': 'Story', 'nav.products': 'Products', 'nav.clients': 'Clients', 'nav.quality': 'Quality', 'nav.contact': 'Contact',
  'hero.pill': 'Over 40 years dehydrating for Mexico and the World.',
  'hero.title': 'Experts in apple dehydration.',
  'hero.sub': 'From the Apple Valley in Cd. Guerrero, Chihuahua, to Mexico and the World.',
  'hero.cta': 'Discover our story', 'hero.cta2': 'Request a quote',
  'story.title': 'Our Story',
  'story.p1': 'More than 40 years ago, in the heart of the Apple Valley in Cd. Guerrero, Chihuahua, a dream was born, driven by love for our land and a passion for apples. Our founder, Mr. Héctor González y González, was looking for a way to add value to this special fruit, and so he began producing sun-dried apple slices outside his home, located in his orchard "Los Tascates".',
  'story.p2': 'What began as a simple idea, full of dedication, became a company with deep roots in tradition and hard work. Over time, that small project grew and evolved into what Pico Largo is today: a place where we keep honoring the legacy of quality and passion that defines us.',
  'story.quote': '"Our company\'s name reflects our bond with nature and our identity. The word Papigochi, in the Tarahumara language, means "Place of the Long-Beaked Birds", and it is also the name of the river that runs through our valley, nourishing the land where our apples bloom."',
  'story.p3': 'Every product we make carries a story of effort, tradition and love for what we do. We are proud to be part of this land and to share the richness of our valley with the world, with the same dedication with which it all began.',
  'story.years': 'Years of experience',
  'products.pill': 'Specialists in dehydrated apple in all its forms',
  'products.title': 'Pico Largo Products',
  'products.lead': 'We produce natural, healthy and safe foods, guaranteeing quality and competitiveness. We offer bulk, bagged, packaged or custom products to meet our customers\' needs.',
  'products.more': 'View details →', 'products.catalog': 'View full catalog',
  'p.cubo.name': 'High-moisture apple cubes', 'p.chips.name': 'Apple chips', 'p.aros.name': 'Apple rings',
  'clients.pill': 'Healthy, compliant, quality products',
  'clients.title': 'We supply products for food programs',
  'clients.lead': 'We meet all quality standards and adapt to our customers\' requirements. We supply:',
  'clients.1': 'Food companies', 'clients.2': 'Convenience stores', 'clients.3': 'Distributors', 'clients.4': 'Trading companies',
  'quality.pill': 'Certified quality', 'quality.title': 'Quality & Food Safety',
  'quality.sub': 'Quality has been part of us since our origins',
  'quality.p': 'First, do things right: with quality, passion and pride, and everything else follows. We use state-of-the-art technology and follow the highest food safety standards, backed by our ISO 22000:2018 certification.',
  'quality.c1': 'ISO 22000:2018 certified', 'quality.c2': '100% natural products', 'quality.c3': 'Bulk or custom packaging',
  'quality.cta': 'More about quality',
  'contact.pill': 'Get in touch', 'contact.title': 'Contact',
  'contact.lead': 'Fill out and send the form with your information and we will contact you shortly.',
  'contact.loc': 'Location', 'contact.phone': 'Phone',
  'form.name': 'Name', 'form.company': 'Company (optional)', 'form.companyPh': 'Company', 'form.email': 'Email', 'form.phone': 'Phone',
  'form.product': 'Product of interest', 'form.opt0': 'General information', 'form.opt4': 'Custom product',
  'form.msg': 'Message', 'form.send': 'Send message',
  'footer.tag': 'Dehydrated apple from the Apple Valley, Cd. Guerrero, Chihuahua.',
  'footer.rights': 'All rights reserved.',
  'modal.cta': 'Request a quote'
};

const MSG = {
  es: { sending: 'Enviando…', ok: '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.', err: 'No se pudo enviar. Intenta de nuevo o escríbenos a info@picolargo.com.', invalid: 'Revisa los campos marcados.', quote: 'Hola, me interesa cotizar: ' },
  en: { sending: 'Sending…', ok: 'Thank you! We received your message and will contact you soon.', err: 'Could not send. Please try again or email info@picolargo.com.', invalid: 'Please check the highlighted fields.', quote: 'Hello, I would like a quote for: ' }
};

const PRODUCTS = {
  cubo: { img: 'img/cubos.jpg',
    es: { name: 'Manzana en cubo alta humedad', desc: 'Cubos de manzana deshidratada con humedad intermedia y textura suave, que conservan el sabor natural de la fruta.', list: ['Ideal para panificación, cereales, yogurt y barras', 'Disponible a granel o en presentación personalizada', 'Tamaño de corte según requerimiento'] },
    en: { name: 'High-moisture apple cubes', desc: 'Dehydrated apple cubes with intermediate moisture and a soft texture that keep the natural flavor of the fruit.', list: ['Ideal for bakery, cereals, yogurt and bars', 'Available in bulk or custom packaging', 'Cut size to your specification'] } },
  chips: { img: 'img/chips.jpg',
    es: { name: 'Chips de manzana', desc: 'Rodajas de manzana deshidratada, crujientes y naturales. Un snack saludable para toda la familia.', list: ['Snack saludable y natural', 'Ideal para programas alimenticios y tiendas', 'Embolsado, envasado o a granel'] },
    en: { name: 'Apple chips', desc: 'Crunchy, natural dehydrated apple slices. A healthy snack for the whole family.', list: ['Healthy, natural snack', 'Ideal for food programs and retail', 'Bagged, packaged or bulk'] } },
  aros: { img: 'img/aros.jpg',
    es: { name: 'Aros de manzana', desc: 'Aros de manzana deshidratada, la presentación tradicional del orejón con la que todo comenzó.', list: ['Sabor tradicional del Valle de las Manzanas', 'Perfectos como snack o ingrediente', 'Presentaciones a granel o personalizadas'] },
    en: { name: 'Apple rings', desc: 'Dehydrated apple rings, the traditional dried apple with which it all began.', list: ['Traditional Apple Valley flavor', 'Great as a snack or ingredient', 'Bulk or custom packaging'] } }
};

let lang = 'es';
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// Save Spanish originals
$$('[data-i18n]').forEach(el => el.dataset.es = el.textContent);
$$('[data-i18n-ph]').forEach(el => el.dataset.esPh = el.placeholder);

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  $('#langLabel').textContent = l.toUpperCase();
  $$('[data-i18n]').forEach(el => {
    const t = l === 'en' ? EN[el.dataset.i18n] : el.dataset.es;
    if (t) el.textContent = t;
  });
  $$('[data-i18n-ph]').forEach(el => {
    el.placeholder = l === 'en' ? (EN[el.dataset.i18nPh] || el.dataset.esPh) : el.dataset.esPh;
  });
  try { localStorage.setItem('lang', l); } catch (e) {}
}
$('#lang').addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
try {
  const saved = localStorage.getItem('lang');
  if (saved === 'en') setLang('en');
} catch (e) {}

// Nav: solid on scroll + mobile menu
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
const onScroll = () => nav.classList.toggle('is-solid', scrollY > 40 || menu.classList.contains('open'));
addEventListener('scroll', onScroll, { passive: true }); onScroll();
function toggleMenu(open) {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  onScroll();
}
burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
$$('a', menu).forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

// Product modal
const modal = $('#modal');
let current = null;
$$('[data-product]').forEach(card => card.addEventListener('click', () => {
  current = card.dataset.product;
  const p = PRODUCTS[current], d = p[lang];
  $('#m-img').src = p.img; $('#m-img').alt = d.name;
  $('#m-title').textContent = d.name;
  $('#m-desc').textContent = d.desc;
  $('#m-list').innerHTML = d.list.map(x => `<li>${x}</li>`).join('');
  modal.showModal();
}));
$('#m-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
$('#m-cta').addEventListener('click', () => {
  modal.close();
  const sel = $('#f-product');
  sel.value = PRODUCTS[current].es.name;
  const msg = $('#f-msg');
  if (!msg.value) msg.value = MSG[lang].quote + PRODUCTS[current][lang].name + '.';
});

// Contact form
const form = $('#form'), status = $('#status'), submit = $('#submit');
form.addEventListener('submit', async e => {
  e.preventDefault();
  let ok = true;
  $$('[required]', form).forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
    f.closest('.field').classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { status.className = 'form__status err'; status.textContent = MSG[lang].invalid; return; }

  const data = Object.fromEntries(new FormData(form));
  if (data.botcheck) return; // bot
  delete data.botcheck;
  data.replyto = data.Correo;
  data.Idioma = lang.toUpperCase();

  submit.disabled = true;
  status.className = 'form__status'; status.textContent = MSG[lang].sending;
  try {
    const r = await fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.success !== true) throw new Error(j.message || r.status);
    form.reset();
    status.className = 'form__status ok'; status.textContent = MSG[lang].ok;
  } catch (err) {
    // Si el envío directo falla, se envía de forma tradicional a Web3Forms,
    // que luego regresa a esta página.
    status.className = 'form__status'; status.textContent = MSG[lang].sending;
    const next = document.createElement('input');
    next.type = 'hidden'; next.name = 'redirect';
    next.value = location.origin + location.pathname + '?enviado=1#contacto';
    form.appendChild(next);
    form.action = FORM_URL;
    form.method = 'POST';
    HTMLFormElement.prototype.submit.call(form);
    return;
  } finally {
    submit.disabled = false;
  }
});
$$('input,textarea', form).forEach(f => f.addEventListener('input', () => f.closest('.field')?.classList.remove('invalid')));

if (new URLSearchParams(location.search).has('enviado')) {
  status.className = 'form__status ok'; status.textContent = MSG[lang].ok;
  history.replaceState(null, '', location.pathname + '#contacto');
}

$('#year').textContent = new Date().getFullYear();
