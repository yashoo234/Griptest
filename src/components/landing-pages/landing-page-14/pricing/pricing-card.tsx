import Image from 'next/image';
import Button from '../Button';
import type { PricingPlan, PricingPeriod } from '@/constants/LandingPage14/pricing-plans';
import { TickCircle } from '@/assets/landing-page-14/icons';
import Link from 'next/link';

interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
}

export const PricingCard = ({ plan, period }: PricingCardProps) => {
  const price = period === 'monthly' ? plan.price.monthly : plan.price.annual;
  const isPopular = plan.isPopular;

  return (
    <div
      className={`flex flex-col gap-4 p-6 rounded-2xl border bg-white w-full max-w-sm ${
        isPopular
          ? 'relative shadow-[0px_-8px_0px_0px_rgba(15,111,255,1)]'
          : 'shadow-[0px_-8px_0px_0px_rgba(248,249,250,1)]'
      }`}>
      {isPopular && <div className='absolute top-0 left-0 right-0 h-2 rounded-t-2xl' aria-hidden='true' />}

      <div className='flex flex-col gap-4'>
        <h3 className='text-base font-medium text-lp14-dark tracking-[-0.03em]'>{plan.name}</h3>

        <div className='flex items-end gap-2'>
          <span className='text-[44px] font-medium leading-[32px] tracking-[-0.04em] text-lp14-dark'>
            ${price}
          </span>
          <span className='text-sm text-lp14-gray mb-1 tracking-[-0.02em]'>/{period}</span>
        </div>
        <Link href={'#'}>
        <Button
          variant={isPopular ? 'tertiary' : 'secondary'}
          className='w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold'>
          {plan.ctaLabel}
        </Button>
        </Link>
        <ul className='flex flex-col gap-4'>
          {plan.features.map((feature, index) => (
            <li key={index} className='flex items-center gap-2'>
              <div className='w-5 h-5 flex-shrink-0'>
                <Image src={TickCircle} alt='' width={20} height={20} />
              </div>
              <span className='text-[15px] font-medium text-lp14-dark tracking-[-0.02em]'>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
