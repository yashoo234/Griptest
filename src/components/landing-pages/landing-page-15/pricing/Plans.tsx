'use client';

import { useState } from 'react';
import PricingCard from './pricing-card';
import PricingToggle from './pricing-toggle';
import { pricingPlans } from '@/constants/LandingPage15/pricing-plans';
import type { PricingPeriod } from '@/constants/LandingPage15/pricing-plans';

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState<PricingPeriod>('monthly');

  return (
    <div className='w-full flex flex-col items-center gap-14'>
      <PricingToggle period={billingPeriod} onChange={setBillingPeriod} />

      <div className='w-full max-w-6xl'>
        <div className='flex flex-col md:flex-row gap-5 w-full items-end'>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={billingPeriod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
