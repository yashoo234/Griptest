'use client';

import { useState } from 'react';
import PricingCard from './pricing-card';
import PricingToggle from './pricing-toggle';
import { pricingPlans } from '@/constants/LandingPage14/pricing-plans';
import type { PricingPeriod } from '@/constants/LandingPage14/pricing-plans';

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState<PricingPeriod>('monthly');

  return (
    <div className='w-full flex flex-col items-center gap-14'>
      <PricingToggle period={billingPeriod} onChange={setBillingPeriod} />

      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full'>
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} period={billingPeriod} />
          ))}
        </div>
        <div className='w-full mt-6 bg-lp14-bg rounded-lg p-4'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-wrap items-center gap-2'>
              <h3 className='text-xl font-semibold text-lp14-dark tracking-[-0.02em]'>Student Discount</h3>
              <span className='text-xs font-semibold bg-lp14-accent px-2 py-0.5 rounded-md text-lp14-dark'>
                Upto 50% Discount
              </span>
            </div>
            <p className='text-sm text-lp14-muted tracking-[-0.02em]'>
              Signup with your student email and save on the pro plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
