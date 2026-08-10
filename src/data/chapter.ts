export interface SocialLink {
  label: string;
  href: string;
}

export interface MemberAffiliation {
  name: string;
  type: 'company' | 'lab' | 'university' | 'organization';
  href?: string;
}

export interface ResourceLink {
  label: string;
  href: string;
  description: string;
}

export const chapterInfo = {
  name: 'IEEE Signal Processing Society at the University of Florida',
  shortName: 'IEEE SPS @ UF',
  baseUrl: 'https://ieee-sps-uf.raulv.dev',
  email: 'ieee.sps.uf@gmail.com',
  location: 'Gainesville, Florida',
  addressLines: [
    'Artificial Intelligence and Informatics Research Institute',
    '432 Newell Drive, CISE Bldg E251',
    'Gainesville, Florida 32611-5585',
  ],
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/uf.sps/' },
    { label: 'Discord', href: 'https://discord.gg/6GRymPjgKc' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ieee-signal-processing-society-uf/' },
    { label: 'X', href: 'https://x.com/uf_sps' },
    { label: 'Linktree', href: 'https://linktr.ee/uf.sps' },
  ],
  partnerLinks: [
    { label: 'IEEE Signal Processing Society', href: 'https://signalprocessingsociety.org/' },
    { label: 'University of Florida ECE', href: 'https://www.ece.ufl.edu/' },
    { label: 'UF Student Organizations', href: 'https://orgs.studentinvolvement.ufl.edu/' },
  ],
  memberAffiliations: [] as MemberAffiliation[],
  resourceLinks: [
    {
      label: 'Workshop GitHub',
      href: 'https://github.com/Jibby2k1/SPS_Curriculum',
      description: 'Browse workshop notes, code, and curriculum materials from the SPS workshop series.',
    },
    {
      label: 'Gradus',
      href: 'https://gradus.raulv.dev',
      description: 'Open Gradus for structured learning resources and technical study workflows.',
    },
  ] as ResourceLink[],
};
