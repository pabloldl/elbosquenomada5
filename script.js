'use strict';
const menu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const viewer = document.querySelector('.photo-viewer');
const mobile = matchMedia('(max-width: 700px)');
function syncScroll() { document.body.classList.toggle('modal-open', menu.open || viewer.open); }
menuToggle.addEventListener('click', () => { menu.showModal(); menuToggle.setAttribute('aria-expanded', 'true'); syncScroll(); });
menu.querySelector('.menu-close').addEventListener('click', () => menu.close());
menu.addEventListener('close', () => { menuToggle.setAttribute('aria-expanded', 'false'); syncScroll(); menuToggle.focus({preventScroll: true}); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.close()));
mobile.addEventListener('change', event => { if (!event.matches && menu.open) menu.close(); });
const photos = [
 {src: 'img/salon.webp', alt: 'Salón con sofá rojo, chimenea y mesa de comedor.', caption: '01 / El salón'},
 {src: 'img/dormitorio.webp', alt: 'Dormitorio con cama doble, cabecero de hierro y armario blanco.', caption: '02 / El dormitorio'},
 {src: 'img/perspectiva.webp', alt: 'Vista del acceso hacia el salón y la cocina.', caption: '03 / El interior'},
 {src: 'img/cocina.webp', alt: 'Mesa preparada delante de la cocina y la lavadora.', caption: '04 / La cocina'}
];
const stage = viewer.querySelector('.viewer-stage');
const image = viewer.querySelector('.viewer-image');
const zoom = viewer.querySelector('.viewer-zoom');
const selectors = [...viewer.querySelectorAll('[data-index]')];
let current = 0, opener = null, touch = null;
function resetZoom() { stage.classList.remove('zoomed'); stage.scrollTop = 0; stage.scrollLeft = 0; zoom.setAttribute('aria-pressed', 'false'); zoom.setAttribute('aria-label', 'Ampliar imagen'); }
function select(next) { current = (next + photos.length) % photos.length; resetZoom(); image.src = photos[current].src; image.alt = photos[current].alt; viewer.querySelector('.viewer-caption').textContent = photos[current].caption; selectors.forEach((button, i) => button.setAttribute('aria-current', String(i === current))); }
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', event => { opener = event.currentTarget; select(Number(opener.dataset.photo)); viewer.showModal(); syncScroll(); viewer.querySelector('.viewer-close').focus(); }));
viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
viewer.querySelector('.viewer-next').addEventListener('click', () => select(current + 1));
viewer.querySelector('.viewer-prev').addEventListener('click', () => select(current - 1));
selectors.forEach(button => button.addEventListener('click', () => select(Number(button.dataset.index))));
function toggleZoom() { const active = stage.classList.toggle('zoomed'); zoom.setAttribute('aria-pressed', String(active)); zoom.setAttribute('aria-label', active ? 'Reducir imagen' : 'Ampliar imagen'); if (!active) resetZoom(); }
zoom.addEventListener('click', toggleZoom); image.addEventListener('click', toggleZoom);
viewer.addEventListener('close', () => { resetZoom(); syncScroll(); opener?.focus({preventScroll: true}); });
viewer.addEventListener('keydown', event => { if (event.key === 'ArrowRight') { event.preventDefault(); select(current + 1); } if (event.key === 'ArrowLeft') { event.preventDefault(); select(current - 1); } });
stage.addEventListener('touchstart', event => { touch = event.touches.length === 1 ? {x: event.touches[0].clientX, y: event.touches[0].clientY} : null; }, {passive: true});
stage.addEventListener('touchend', event => { if (!touch || stage.classList.contains('zoomed')) return; const dx = event.changedTouches[0].clientX - touch.x, dy = event.changedTouches[0].clientY - touch.y; if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) select(current + (dx < 0 ? 1 : -1)); touch = null; }, {passive: true});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('waiting'); observer.unobserve(entry.target); } }), {threshold: .08});
 document.querySelectorAll('.reveal').forEach(element => { if (element.getBoundingClientRect().top > innerHeight) { element.classList.add('waiting'); observer.observe(element); } });
}
