export interface Student {
  id: string;
  name: string;
  avatar: string;
  role: 'Undergraduate' | 'Postgraduate' | 'Think Tank Researcher';
  specialty: string;
  bio: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  studentId: string;
  tags: string[];
  documentaryUrl?: string;
  paperTitle?: string;
  rating: number;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authorId: string;
  publishDate: string;
  category: string;
  downloadUrl: string;
}

export type ViewState = 'HOME' | 'TOURS' | 'RESEARCH' | 'CAREERS' | 'STUDENTS' | 'FEEDBACK';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}