/* ANIMACIÓN DE SCROLL */

const nav = document.querySelector('.nav');
const ftbiyNav = document.querySelector('.ftbiy-nav');
const storeNav = document.querySelector('.store-nav');

if (nav) {
  const banner = document.querySelector('.home-banner');

  window.addEventListener('scroll', () => {
    const triggerPoint = banner ? banner.offsetHeight : 50;

    if (window.scrollY >= triggerPoint) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

if (ftbiyNav) {
  const banner = document.querySelector('.ftbiy-banner');

  window.addEventListener('scroll', () => {
    const triggerPoint = banner ? banner.offsetHeight : 50;

    if (window.scrollY >= triggerPoint) {
      ftbiyNav.classList.add('scrolled');
    } else {
      ftbiyNav.classList.remove('scrolled');
    }
  });
}

if (storeNav) {
  const banner = document.querySelector('.store-banner');

  window.addEventListener('scroll', () => {
    const triggerPoint = banner ? banner.offsetHeight : 50;

    if (window.scrollY >= triggerPoint) {
      storeNav.classList.add('scrolled');
    } else {
      storeNav.classList.remove('scrolled');
    }
  });
}

console.log('Scroll script cargado');