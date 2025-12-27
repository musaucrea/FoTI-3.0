import { Student, Tour, ResearchPaper } from './types';

export const STUDENTS: Student[] = [
  {
    id: 's1',
    name: 'Amara Okafor',
    avatar: 'https://picsum.photos/id/1011/200/200',
    role: 'Postgraduate',
    specialty: 'Eco-Tourism & Conservation',
    bio: 'Focusing on sustainable interactions between wildlife reserves and local communities.'
  },
  {
    id: 's2',
    name: 'David Kimani',
    avatar: 'https://picsum.photos/id/1005/200/200',
    role: 'Undergraduate',
    specialty: 'Urban Heritage',
    bio: 'Mapping historical trade routes in modern coastal cities.'
  },
  {
    id: 's3',
    name: 'Sarah Mensah',
    avatar: 'https://picsum.photos/id/1027/200/200',
    role: 'Think Tank Researcher',
    specialty: 'Policy Analysis',
    bio: 'Analyzing the impact of visa policies on intra-African tourism flows.'
  }
];

export const TOURS: Tour[] = [
  {
    id: 't1',
    title: 'Serengeti Migration & Conservation Data Trek',
    description: 'A 5-day immersive safari where tourists assist in data collection for wildebeest migration patterns. Includes lectures by field researchers.',
    price: 1200,
    duration: '5 Days',
    location: 'Tanzania',
    image: 'https://picsum.photos/id/1074/800/600',
    studentId: 's1',
    tags: ['Wildlife', 'Research', 'Adventure'],
    documentaryUrl: '#',
    paperTitle: 'Migration Patterns and Tourist Impact 2024',
    rating: 4.8
  },
  {
    id: 't2',
    title: 'Zanzibar Spice Route & Culinary History',
    description: 'Explore the ancient spice farms and Stone Town archives. Learn about the fusion of cultures through food.',
    price: 850,
    duration: '3 Days',
    location: 'Zanzibar',
    image: 'https://picsum.photos/id/106/800/600',
    studentId: 's2',
    tags: ['Culture', 'History', 'Culinary'],
    documentaryUrl: '#',
    paperTitle: 'Culinary Heritage as a Driver for Urban Preservation',
    rating: 4.6
  },
  {
    id: 't3',
    title: 'Rwanda Eco-Lodge Innovation Tour',
    description: 'Visit award-winning eco-lodges to understand sustainable architecture and community revenue sharing models.',
    price: 1500,
    duration: '6 Days',
    location: 'Rwanda',
    image: 'https://picsum.photos/id/1018/800/600',
    studentId: 's1',
    tags: ['Sustainability', 'Architecture', 'Education'],
    documentaryUrl: '#',
    paperTitle: 'Community Revenue Sharing in Volcanoes National Park',
    rating: 4.9
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'r1',
    title: 'Sustainable Interactions: Wildlife & Communities',
    abstract: 'An analysis of how community-led tourism initiatives reduce poaching incidents in the Serengeti ecosystem.',
    authorId: 's1',
    publishDate: '2023-11-15',
    category: 'Conservation',
    downloadUrl: '#'
  },
  {
    id: 'r2',
    title: 'The Stone Town Effect: Preservation vs. Modernization',
    abstract: 'Evaluating the economic impact of UNESCO heritage status on local businesses in Zanzibar.',
    authorId: 's2',
    publishDate: '2024-02-10',
    category: 'Urban Planning',
    downloadUrl: '#'
  },
  {
    id: 'r3',
    title: 'Visa Openness Report 2024',
    abstract: 'A policy brief for the African Union on the correlation between visa-on-arrival policies and tourism GDP growth.',
    authorId: 's3',
    publishDate: '2024-05-22',
    category: 'Policy',
    downloadUrl: '#'
  }
];
