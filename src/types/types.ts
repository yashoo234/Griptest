import { Database } from './supabase';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type EnumSubscription = Database['public']['Enums']['subscriptiontype'];

export type EnumSubscriptionBillingCycle = Database['public']['Enums']['billingcycle'];

export type TypeUser = Database['public']['Tables']['users']['Row'];

// Custom types

export type TypeSubscriptionPlan = 'trial' | 'standard' | 'premium';

export type TypeSubscriptionInterval = 'monthly' | 'annually';

export type TypePaymentGatwayProvider = 'stripe' | 'lemonSqueezy';

export type FeatureCardContent = {
  tag: {
    icon: string;
    text: string;
    color: string;
  };
  title: string;
  description: string;
};

export type FeatureCardProps = {
  content: FeatureCardContent;
  imageUrl: string | StaticImageData;
  bgColor?: string;
  width?: string | number;
  height?: string | number;
  isFull?: boolean;
};

export type CardContent = {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBgColor?: string;
};
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  image: string | StaticImageData;
  slug: string;
  backgroundColor: string;
};
