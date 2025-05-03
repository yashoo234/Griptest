export type PricingPeriod = 'monthly' | 'annual';

export type PlanFeature = {
  name: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: PlanFeature[];
  isPopular?: boolean;
  ctaLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: {
      monthly: 0,
      annual: 0,
    },
    features: [
      { name: 'NextJS Boilerplate', included: true },
      { name: 'AI Modules', included: true },
      { name: '5 Demo Apps', included: true },
      { name: 'GAuth & Magic Link', included: true },
      { name: 'Stripe & Lemon Squeezy Payments', included: true },
      { name: 'Privacy Policy & ToS', included: true },
    ],
    ctaLabel: 'Subscribe'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 25,
      annual: 20, // 20% off for annual
    },
    features: [
      { name: 'NextJS Boilerplate', included: true },
      { name: 'AI Modules', included: true },
      { name: '5 Demo Apps', included: true },
      { name: 'GAuth & Magic Link', included: true },
      { name: 'Stripe & Lemon Squeezy Payments', included: true },
      { name: 'Privacy Policy & ToS', included: true },
    ],
    isPopular: true,
    ctaLabel: 'Subscribe'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 99,
      annual: 79.2, // 20% off for annual
    },
    features: [
      { name: 'NextJS Boilerplate', included: true },
      { name: 'AI Modules', included: true },
      { name: '5 Demo Apps', included: true },
      { name: 'GAuth & Magic Link', included: true },
      { name: 'Stripe & Lemon Squeezy Payments', included: true },
      { name: 'Privacy Policy & ToS', included: true },
    ],
    ctaLabel: 'Subscribe'
  }
]; 