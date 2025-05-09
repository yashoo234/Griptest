import { BlogPost } from '@/types/types';
import Thumbnail from '@/assets/landing-page-14/images/Thumbnail.png';
import Thumbnail1 from '@/assets/landing-page-14/images/Thumbnail-1.png';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Create a Public URL for Local Webhook Testing',
    excerpt:
      "Are you developing a web application that uses webhooks? Do you need to test these webhooks but aren't sure how to do it on your local machine?",
    date: '2024-08-13',
    formattedDate: 'August 13, 2024',
    image: Thumbnail,
    slug: '#',
    backgroundColor: '#0F6FFF',
  },
  {
    id: '2',
    title: 'Build a GPT-Powered Blog Generator in 5 Minutes',
    excerpt:
      "Welcome to this step-by-step guide on creating a blog generator using artificial intelligence! We'll be using Next.js, TypeScript, and OpenAI's GPT-4 ..",
    date: '2024-07-08',
    formattedDate: 'July 08, 2024',
    image: Thumbnail1,
    slug: '#',
    backgroundColor: '#040811',
  },
];
