export const drive = (id: string) =>
  `https://drive.google.com/file/d/${id}/view?usp=sharing`;
export const profile = {
  name: 'Ibraheem Catovic',
  title: 'Visiting Clinical Assistant Professor',
  department: 'Department of Economics',
  institution: 'New York University',
  email: 'ibraheem.catovic@nyu.edu',
  cv: drive('1KW6lJ5JcgOYCUc1Ldx6BMatuKMg0T2D0'),
  alternateCv: drive('1KhIXUaanJop2lA9BAXLpG3_CXM6NqD9g'),
  original: 'https://sites.google.com/view/ibraheemcatovic/home',
  linkedin: 'https://linkedin.com/in/ibraheem-catovic/',
  interests: [
    'Behavioral Economics',
    'Experimental Economics',
    'Neuroeconomics',
    'Psychology',
    'Philosophy',
    'Religion',
  ],
  education: [
    {
      year: '2021',
      degree: 'Ph.D. in Economics',
      school: 'University of Maryland',
    },
    {
      year: '2017',
      degree: 'M.A. in Economics',
      school: 'University of Maryland',
    },
    {
      year: '2012',
      degree: 'B.A. in Economics and Math/Statistics',
      school: 'Rutgers University',
      note: 'With Honors, Summa Cum Laude',
    },
  ],
  experience: [
    {
      period: '2023 — Present¹',
      role: 'Visiting Clinical Assistant Professor',
      place: 'New York University · Department of Economics',
    },
    {
      period: '2021 — 2024',
      role: 'Senior Healthcare Economist',
      place: 'The MITRE Corporation',
    },
    {
      period: '2014 — 2015',
      role: 'Research Analyst',
      place: 'Federal Reserve Bank of Philadelphia',
    },
    {
      period: '2012 — 2014',
      role: 'Research Assistant',
      place: 'Federal Reserve Board of Governors',
    },
  ],
};
export type Paper = {
  id: string;
  title: string;
  status: 'Published' | 'Under review' | 'Working paper';
  area: 'Economics' | 'Philosophy & religion';
  year?: string;
  venue?: string;
  coauthors?: string;
  url?: string;
  summary?: string;
  linkNote?: string;
};
export const papers: Paper[] = [
  {
    id: 'number-preferences',
    title: 'Distribution-Dependent Number Preferences',
    status: 'Published',
    area: 'Economics',
    year: '2025',
    venue: 'Journal of the Economic Science Association · 11(2), 279–287',
    url: 'https://doi.org/10.1017/esa.2025.10026',
    summary:
      'An experimental study of whether preferences for choosing lottery numbers depend on the distribution of possible payoffs. The design separates this question from differences in number selection and expected returns.',
  },
  {
    id: 'lotto-demand',
    title: 'What Determines Lotto Demand? Mega Millions, Hope and Regret',
    status: 'Under review',
    area: 'Economics',
    url: drive('1qJ83AstRTwZSxDk0vjRtP7vbcWZJfa8H'),
    linkNote:
      'The original site’s link opens a draft of Distribution-Dependent Number Preferences. The correct document for this title is unconfirmed.',
  },
  {
    id: 'savings-survey',
    title: 'A Survey of Prize Linked Savings',
    status: 'Working paper',
    area: 'Economics',
    coauthors: 'with Erkut Ozbay',
    url: drive('1M62NkWPNtez1Nm6-iQhXCLZFtoyOmpO3'),
  },
  {
    id: 'savings-behavior',
    title: 'Behavioral Modifications to Prize Linked Savings',
    status: 'Working paper',
    area: 'Economics',
    url: drive('1qh98pSeF9xvhxAIKzI4D0rDqICcvWG7I'),
  },
  {
    id: 'afterlife-justice',
    title: 'Afterlife Justice as Fairness',
    status: 'Working paper',
    area: 'Philosophy & religion',
    url: drive('1IxkOFsn0UQLiExZdh3Jw0mkDzHHoKR65'),
  },
  {
    id: 'prostration',
    title:
      "Reinterpreting the Qur'anic Prostration Narrative of Iblis and Adam",
    status: 'Working paper',
    area: 'Philosophy & religion',
    url: drive('1bxZmG-Q-vHleoASfRQ-ChC6QdAnetgql'),
  },
  {
    id: 'moral-luck',
    title: 'Mitigating Moral Luck',
    status: 'Working paper',
    area: 'Philosophy & religion',
    url: drive('1Fy2BqSo__X3eTsLfB7p-6SUBfZLaeREb'),
  },
  {
    id: 'religious-luck',
    title: 'Resolving Religious Luck',
    status: 'Working paper',
    area: 'Philosophy & religion',
    url: drive('1sCTsNrUL8GbnfVGGajBIbfuLQaNXoGd2'),
  },
  {
    id: 'three-brothers',
    title:
      'Justice and Expected Afterlife Value: A Resolution to the Ashari Paradox of the Three Brothers',
    status: 'Working paper',
    area: 'Philosophy & religion',
    url: drive('13MFkOf5eET-PgRZf053SZ7d5sJXS8FVT'),
  },
  {
    id: 'islamic-banking',
    title:
      'Prospects of Islamic Banking in the United States: A Survey of Muslim Americans',
    status: 'Published',
    area: 'Economics',
    year: '2014',
    venue: 'Journal of Islamic Economics, Banking and Finance',
  },
];
export const courses = [
  {
    title: 'Introduction to Macroeconomics',
    school: 'New York University',
    links: [
      ['Spring 2026a', '1FyFGk0SKGJH_LXpERc6BB3rHuudTSwl8'],
      ['Spring 2026b', '1nMmjSSLJzTJJE5p-0JT8Z_3kPy8Bqdxo'],
      ['Fall 2025a', '1DzxnkHi0tLJQnxIOMdI8FIRAOp7_Cv6e'],
      ['Fall 2025b', '1gDlla-f8HW7L1iaGONKbK4opbN12MDqn'],
      ['Fall 2025c', '1Gx8wWcR7i3RuGAmCEIX3aDnH_czNvTxe'],
      ['Spring 2025', '1r_afntyVdRIlkmHWIAzEFOro_wUjH_JV'],
      ['Fall 2024', '1-iCUGeJWgvUUPSKpN9O4TljBP13BK3_X'],
      ['Spring 2024', '1sJg1dzJ9H1P2tkvYD8z_iolI-yOTtj6X'],
      ['Fall 2023', '1eSGFtyxMsjfgMk2_0r1q2CTmfk0h8jgW'],
    ],
  },
  {
    title: 'Neuroeconomics',
    school: 'University of Pennsylvania',
    links: [['Spring 2025', '1rWo11GT3fxGOM022Bo0lnwrsnd_JVhpw']],
  },
  {
    title: 'Behavioral Economics',
    school: 'University of Pennsylvania',
    links: [
      ['Summer 2024', '12PrLNFVE-yL7TrutCK7TCdsm3NDE_YST'],
      ['Spring 2024', '1-olM2gdd3pgk2sm403p2oqBb_rflpj9j'],
    ],
  },
  {
    title: 'Industrial Organization',
    school: 'Rutgers University',
    links: [
      ['Fall 2019', '1Vbe8rrmeBE3eEFTJJqssnZFTP7rI7T1B'],
      ['Spring 2019', '1x_3lo-1x-nGb33HDtS-C-7Q2yjf9uRRA'],
    ],
  },
  {
    title: 'Intermediate Microeconomics',
    school: 'Rutgers University',
    links: [
      ['Spring 2019', '1BRfCqIG7SHvxeBe0iLFVuoptQj-zzFAh'],
      ['Fall 2018a', '1jVi74dW2k12kEnZDuwJov7dw7Ag9fpBv'],
      ['Fall 2018b', '1EN4GbmC6QxW540_LmL1-VZoLJB6yGtVc'],
      ['Summer 2018', '11GnjzlhU3jv0HpknbNdR3jrsKLmLCxe3'],
    ],
  },
  {
    title: 'Money, Banking and the Financial System',
    school: 'Rutgers University',
    links: [['Spring 2018', '15N96ZgMliVIhK-x9yVaSLlyWoY3KTAl7']],
  },
  {
    title: 'Principles of Microeconomics',
    school: 'University of Maryland',
    links: [
      ['Summer 2019', '1uToX7GddZ9f_Xyj5MwxGGRTyRs-2cXpO'],
      ['Summer 2018', '1QHq6amLcjyjIi0eIbpOj-40V-eg0MpSD'],
      [
        'Winter 2018',
        '0B6fLOY_pmd7XM3ZDQ1ZhdHBnYm8',
        '0-viHJWfavj2Tt76RQrba6rQ',
      ],
      [
        'Summer 2017',
        '0B6fLOY_pmd7XMWNGMzBYejJkNW8',
        '0-CPc2fH-h-2c2dxJjX-8vmQ',
      ],
    ],
  },
];
