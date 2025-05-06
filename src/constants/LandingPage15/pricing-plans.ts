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
    id: 'Starter',
    name: 'Starter',
    price: {
      monthly: 0,
      annual: 0,
    },
    features: [
      { name: '200 mins/mo', included: true },
      { name: 'Unlimited Content', included: true },
      { name: 'Unlimited Audiograms', included: true },
      { name: 'Magic Chat', included: true },
    ],
    ctaLabel: 'Upgrade to PRO',
  },
  {
    id: 'Pro',
    name: 'Pro',
    price: {
      monthly: 25,
      annual: 20, // 20% off for annual
    },
    features: [
      { name: '600 mins/mo', included: true },
      { name: 'Unlimited Content', included: true },
      { name: 'Unlimited Audiograms', included: true },
      { name: 'Magic Chat', included: true },
    ],
    isPopular: true,
    ctaLabel: 'Upgrade to PRO',
  },
  {
    id: 'Agency',
    name: 'Agency',
    price: {
      monthly: 99,
      annual: 79.2, // 20% off for annual
    },
    features: [
      { name: '1200 mins/mo', included: true },
      { name: 'Unlimited Content', included: true },
      { name: 'Unlimited Audiograms', included: true },
      { name: 'Magic Chat', included: true },
    ],
    ctaLabel: 'Upgrade to PRO',
  },
];
