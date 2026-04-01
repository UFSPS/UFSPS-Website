import {
  escapeHTML,
  fetchJSON,
  formatEventDate,
  initials,
  isPastEvent,
} from './site.js';

function emptyState(title, text) {
  return `
    <div class="empty-state">
      <div class="empty-state-label">${escapeHTML(title)}</div>
      <div class="body-copy">${escapeHTML(text)}</div>
    </div>
  `;
}

function linkAttrs(href) {
  return String(href || '').startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
}

function setHTML(selector, html) {
  document.querySelectorAll(selector).forEach((node) => {
    node.innerHTML = html;
  });
  if (window.SiteUI && typeof window.SiteUI.refreshReveal === 'function') {
    document.querySelectorAll(selector).forEach((node) => window.SiteUI.refreshReveal(node));
  }
}

function fillText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function fillHref(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.setAttribute('href', value);
  });
}

function linkMarkup(label, href, extraClass = 'text-link') {
  if (!href) return '';
  return `<a class="${extraClass}" href="${escapeHTML(href)}"${linkAttrs(href)}>${escapeHTML(label)}</a>`;
}

function buttonMarkup(label, href, variant = 'secondary') {
  if (!href) return '';
  return `<a class="btn ${variant}" href="${escapeHTML(href)}"${linkAttrs(href)}>${escapeHTML(label)}</a>`;
}

function chipMarkup(value) {
  return `<span class="chip">${escapeHTML(value)}</span>`;
}

function officerMarkup(officer) {
  const links = (officer.links || [])
    .map((link) => linkMarkup(link.label, link.href))
    .join('');
  const linksBlock = links ? `<div class="link-row">${links}</div>` : '';
  const imagePath = typeof officer.image === 'string' && officer.image.trim() ? escapeHTML(encodeURI(officer.image)) : '';
  const profileHref = typeof officer.profile_href === 'string' && officer.profile_href.trim() ? escapeHTML(encodeURI(officer.profile_href)) : '';
  const avatarMarkup = imagePath
    ? `<img class="avatar avatar-photo" src="${imagePath}" alt="${escapeHTML(officer.name)} portrait" loading="lazy" decoding="async" />`
    : `<div class="avatar" aria-hidden="true">${escapeHTML(initials(officer.name))}</div>`;
  const titleMarkup = profileHref
    ? `<a class="officer-title-link" href="${profileHref}">${escapeHTML(officer.name)}</a>`
    : escapeHTML(officer.name);

  return `
    <article class="card officer-card reveal">
      <div class="officer-head">
        ${avatarMarkup}
        <div>
          <div class="officer-title">${titleMarkup}</div>
          <div class="officer-role meta">${escapeHTML(officer.role)}</div>
        </div>
      </div>
      <div class="chip-row">
        <span class="chip">${escapeHTML(officer.term)}</span>
      </div>
      <p class="body-copy">${escapeHTML(officer.bio)}</p>
      ${linksBlock}
    </article>
  `;
}

function eventMarkup(event, { featured = false } = {}) {
  const tags = (event.tags || []).map(chipMarkup).join('');
  const action = event.action_url ? buttonMarkup(event.action_label || 'Learn more', event.action_url, featured ? 'on-dark' : 'secondary') : '';
  const wrapperClass = featured ? 'event-card' : 'card event-card reveal';

  return `
    <article class="${wrapperClass}">
      <div class="meta">${escapeHTML(event.category || 'Event')}</div>
      <h3 class="card-title">${escapeHTML(event.title)}</h3>
      <div class="event-meta">
        <span>${escapeHTML(formatEventDate(event.start_iso, event.end_iso))}</span>
        <span>${escapeHTML(event.location)}</span>
      </div>
      <p class="body-copy">${escapeHTML(event.summary)}</p>
      <div class="chip-row">${tags}</div>
      ${action}
    </article>
  `;
}

function projectMarkup(project) {
  const tags = (project.tags || []).map(chipMarkup).join('');
  const links = (project.links || [])
    .map((link) => buttonMarkup(link.label, link.href, link.kind === 'primary' ? 'primary' : 'secondary'))
    .join('');
  const linksBlock = links ? `<div class="cta-row">${links}</div>` : '';

  return `
    <article class="card media-card project-card reveal">
      <img class="card-media" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.image_alt || project.title)}" loading="lazy" decoding="async" />
      <div class="card-body">
        <div class="meta">${escapeHTML(project.meta)}</div>
        <h3 class="card-title">${escapeHTML(project.title)}</h3>
        <p class="card-text">${escapeHTML(project.summary)}</p>
        <div class="chip-row">${tags}</div>
        ${linksBlock}
      </div>
    </article>
  `;
}

function resourceMarkup(resource) {
  const chips = [resource.type, resource.audience].filter(Boolean).map(chipMarkup).join('');
  return `
    <article class="card resource-card reveal">
      <div class="meta">${escapeHTML(resource.label || 'Resource')}</div>
      <h3 class="card-title">${escapeHTML(resource.title)}</h3>
      <p class="card-text">${escapeHTML(resource.summary)}</p>
      <div class="chip-row">${chips}</div>
      ${buttonMarkup(resource.cta_label || 'Open resource', resource.href, 'secondary')}
    </article>
  `;
}

function renderSocialLinks(links) {
  return links.map((link) => `<a href="${escapeHTML(link.href)}"${linkAttrs(link.href)}>${escapeHTML(link.label)}</a>`).join('');
}

function renderPartnerLinks(links) {
  if (!links.length) return emptyState('Partners', 'Add partner links in data/site.json.');
  return links.map((link) => `
    <article class="card reveal">
      <div class="meta">Partner link</div>
      <h3 class="card-title">${escapeHTML(link.label)}</h3>
      <p class="card-text">External reference for chapter members and collaborators.</p>
      ${buttonMarkup('Open link', link.href, 'secondary')}
    </article>
  `).join('');
}

async function main() {
  const [site, officersData, eventsData, projectsData, resourcesData] = await Promise.all([
    fetchJSON('data/site.json'),
    fetchJSON('data/officers.json'),
    fetchJSON('data/events.json'),
    fetchJSON('data/projects.json'),
    fetchJSON('data/resources.json'),
  ]);

  const officers = [...(officersData.items || [])].sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
  const events = [...(eventsData.items || [])].sort((a, b) => new Date(a.start_iso).getTime() - new Date(b.start_iso).getTime());
  const projects = [...(projectsData.items || [])];
  const resources = [...(resourcesData.items || [])].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

  const upcomingEvents = events.filter((event) => !isPastEvent(event));
  const pastEvents = events.filter((event) => isPastEvent(event)).sort((a, b) => new Date(b.start_iso).getTime() - new Date(a.start_iso).getTime());
  const featuredEvent = upcomingEvents.find((event) => event.featured) || upcomingEvents[0] || null;
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  const previewResources = resources.slice(0, 3);

  fillText('[data-site-name]', site.name);
  fillText('[data-site-short-name]', site.short_name);
  fillText('[data-site-tagline]', site.tagline);
  fillText('[data-site-email-text]', site.email);
  fillHref('[data-site-email-link]', `mailto:${site.email}`);
  fillText('[data-site-location]', site.location);

  document.querySelectorAll('[data-address-lines]').forEach((node) => {
    node.innerHTML = (site.address_lines || []).map((line) => `<span>${escapeHTML(line)}</span>`).join('<br />');
  });

  document.querySelectorAll('[data-social-links]').forEach((node) => {
    node.innerHTML = renderSocialLinks(site.social_links || []);
  });

  document.querySelectorAll('[data-join-links]').forEach((node) => {
    node.innerHTML = (site.join_links || [])
      .map((link) => buttonMarkup(link.label, link.href, link.kind === 'primary' ? 'primary' : 'secondary'))
      .join('');
  });

  setHTML(
    '[data-render="officer-preview"]',
    officers.length ? officers.slice(0, 3).map(officerMarkup).join('') : emptyState('Officers', 'Add officers in data/officers.json.')
  );

  setHTML(
    '[data-render="officers-grid"]',
    officers.length ? officers.map(officerMarkup).join('') : emptyState('Officers', 'Add officers in data/officers.json.')
  );

  setHTML(
    '[data-render="featured-event"]',
    featuredEvent ? eventMarkup(featuredEvent, { featured: true }) : emptyState('Featured event', 'Add an upcoming event in data/events.json.')
  );

  setHTML(
    '[data-render="events-upcoming"]',
    upcomingEvents.length ? upcomingEvents.map((event) => eventMarkup(event)).join('') : emptyState('Upcoming events', 'Programming for the next cycle is still being finalized.')
  );

  setHTML(
    '[data-render="events-past"]',
    pastEvents.length ? pastEvents.map((event) => eventMarkup(event)).join('') : emptyState('Past events', 'Published recaps will appear here.')
  );

  setHTML(
    '[data-render="featured-projects"]',
    featuredProjects.length ? featuredProjects.map(projectMarkup).join('') : emptyState('Projects', 'Add featured projects in data/projects.json.')
  );

  setHTML(
    '[data-render="project-grid"]',
    projects.length ? projects.map(projectMarkup).join('') : emptyState('Projects', 'Add projects in data/projects.json.')
  );

  setHTML(
    '[data-render="resource-preview"]',
    previewResources.length ? previewResources.map(resourceMarkup).join('') : emptyState('Resources', 'Add resources in data/resources.json.')
  );

  setHTML(
    '[data-render="resource-grid"]',
    resources.length ? resources.map(resourceMarkup).join('') : emptyState('Resources', 'Add resources in data/resources.json.')
  );

  setHTML(
    '[data-render="partner-links"]',
    renderPartnerLinks(site.partner_links || [])
  );
}

main().catch((error) => {
  console.error(error);
  document.querySelectorAll('[data-render]').forEach((node) => {
    node.innerHTML = emptyState('Content unavailable', 'The structured content could not be loaded.');
  });
});
