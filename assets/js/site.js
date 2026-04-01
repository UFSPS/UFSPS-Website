const DATA_CACHE = new Map();

function currentRoute() {
  return document.body?.dataset?.navRoute || location.pathname.split('/').pop() || 'index.html';
}

function initPageKind() {
  const route = currentRoute();
  document.body.classList.toggle('home-page', route === 'index.html');
  document.body.classList.toggle('inner-page', route !== 'index.html');
}

function initActiveNav() {
  const path = currentRoute();
  document.querySelectorAll('.nav-link[data-route]').forEach((link) => {
    const isActive = link.getAttribute('data-route') === path;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initHeaderState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const sync = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  sync();
  window.addEventListener('scroll', sync, { passive: true });
}

function initMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('site-nav');
  const actions = document.getElementById('nav-actions');
  if (!button || !nav || !actions) return;

  const sync = (open) => {
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    actions.classList.toggle('open', open);
  };

  sync(false);

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    sync(open);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => sync(false));
  });

  document.addEventListener('click', (event) => {
    if (button.contains(event.target) || nav.contains(event.target) || actions.contains(event.target)) {
      return;
    }
    sync(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) {
      sync(false);
    }
  });
}

function initReveal() {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealNow = (element) => element.classList.add('visible');
  const scan = (root = document) => {
    const targets = root.querySelectorAll ? root.querySelectorAll('.reveal') : [];
    targets.forEach((target) => {
      if (reduceMotion || !('IntersectionObserver' in window)) {
        revealNow(target);
      } else {
        observer.observe(target);
      }
    });
  };

  let observer = null;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNow(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  scan(document);
  window.SiteUI = Object.assign(window.SiteUI || {}, { refreshReveal: scan });
}

function initYear() {
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

async function fetchJSON(url) {
  if (DATA_CACHE.has(url)) {
    return DATA_CACHE.get(url);
  }
  const response = await fetch(url, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Failed to load ${url}`);
  }
  const data = await response.json();
  DATA_CACHE.set(url, data);
  return data;
}

function initials(name) {
  return String(name || '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatEventDate(startIso, endIso) {
  const start = new Date(startIso);
  if (Number.isNaN(start.getTime())) return '';
  const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: '2-digit' };
  const dateText = new Intl.DateTimeFormat('en-US', dateOptions).format(start);
  const startTime = new Intl.DateTimeFormat('en-US', timeOptions).format(start);

  if (!endIso) {
    return `${dateText} · ${startTime}`;
  }

  const end = new Date(endIso);
  if (Number.isNaN(end.getTime())) {
    return `${dateText} · ${startTime}`;
  }

  const sameDay = start.toDateString() === end.toDateString();
  const endTime = new Intl.DateTimeFormat('en-US', timeOptions).format(end);
  if (sameDay) {
    return `${dateText} · ${startTime}–${endTime}`;
  }

  const endDateText = new Intl.DateTimeFormat('en-US', dateOptions).format(end);
  return `${dateText} ${startTime} – ${endDateText} ${endTime}`;
}

function isPastEvent(event) {
  const reference = event.end_iso || event.start_iso;
  const date = new Date(reference);
  if (Number.isNaN(date.getTime())) return false;
  return date.getTime() < Date.now();
}

function initSite() {
  initPageKind();
  initActiveNav();
  initHeaderState();
  initMenu();
  initReveal();
  initYear();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}

export {
  escapeHTML,
  fetchJSON,
  formatEventDate,
  initials,
  isPastEvent,
};
