import { CardContent } from "@/types/types";
import { Key, Db,  Dollar, Next, Robot, Seo} from "@/assets/landing-page-14/icons";
export const cardsContent: CardContent[] = [
    {
      id: "card1",
      title: "Modular NextJS Boilerplate",
      description: "Server Side Rendering, Pre Built Components, Edge Functions, Clean Typesafe Code",
      icon: Next,
      iconBgColor: "#0F6FFF"
    },
    {
      id: "card2",
      title: "AI Modules",
      description: "Chat Module, Text Generation Module Image Generation Module, Speech to Text Module and many more",
      icon: Robot,
      iconBgColor: "#FF0F65"
    },
    {
      id: "card3",
      title: "Database",
      description: "Postgres Tables on Supabase, Row Level Security, Realtime webhook response",
      icon: Db,
      iconBgColor: "#FFCA0B"
    },
    {
      id: "card4",
      title: "Authentication",
      description: "Supabase powered Gauth, Magic Link, Email Login, Save user in Supabase, Private/protected pages & API calls",
      icon: Key,
      iconBgColor: "#09CF88"
    },
    {
      id: "card5",
      title: "Payments",
      description: "Stripe Payment Link Support, Lemon Squeezy Payment Link Support",
      icon: Dollar,
      iconBgColor: "#850BFF"
    },
    {
      id: "card6",
      title: "SEO",
      description: "All meta tags to rank on Google, OpenGraph tags to share on social media, SEO-optimized UI components",
      icon: Seo,
      iconBgColor: "#FA0BFF"
    }
  ]; 