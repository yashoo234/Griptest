import { CardContent } from '@/types/types';
import { folder,key,db,thunder,dollar,chat } from '@/assets/landing-page-15/icons';
export const cardsContent: CardContent[] = [
  {
    id: 'card1',
    title: 'Modular NextJS Boilerplate',
    description: 'Server Side Rendering, Pre Built Components, Edge Functions, Clean Typesafe Code',
    icon: folder,
  },
  {
    id: 'card2',
    title: 'AI Modules',
    description:
      'Chat Module, Text Generation Module Image Generation Module, Speech to Text Module and many more',
    icon: chat,
  },
  {
    id: 'card3',
    title: 'Database',
    description: 'Postgres Tables on Supabase, Row Level Security, Realtime webhook response',
    icon: db,
  },
  {
    id: 'card4',
    title: 'Authentication',
    description:
      'Supabase powered Gauth, Magic Link, Email Login, Save user in Supabase, Private/protected pages & API calls',
    icon: key,
  },
  {
    id: 'card5',
    title: 'Payments',
    description: 'Stripe Payment Link Support, Lemon Squeezy Payment Link Support',
    icon: dollar,
  },
  {
    id: 'card6',
    title: 'SEO',
    description:
      'All meta tags to rank on Google, OpenGraph tags to share on social media, SEO-optimized UI components',
    icon: thunder,
  },
];
