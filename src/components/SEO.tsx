import { useEffect } from 'react';

const BASE_URL = 'https://ieee-sps-uf.raulv.dev';
const DEFAULT_IMAGE = '/SPS_Favi.png';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function upsertMeta(attribute: 'name' | 'property', key: string, value: string) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertStructuredData(data?: Record<string, unknown> | Array<Record<string, unknown>>) {
  const scriptId = 'page-structured-data';
  let tag = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!data) {
    if (tag) tag.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = scriptId;
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(data);
}

const SEO = ({ title, description, path, image = DEFAULT_IMAGE, structuredData }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, BASE_URL).toString();
    const imageUrl = new URL(image, BASE_URL).toString();

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index,follow');
    upsertMeta('name', 'theme-color', '#222222');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'IEEE SPS @ UF');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', 'IEEE Signal Processing Society at the University of Florida');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertMeta('name', 'twitter:image:alt', 'IEEE Signal Processing Society at the University of Florida');
    upsertLink('canonical', canonicalUrl);
    upsertStructuredData(structuredData);
  }, [title, description, path, image, structuredData]);

  return null;
};

export default SEO;
