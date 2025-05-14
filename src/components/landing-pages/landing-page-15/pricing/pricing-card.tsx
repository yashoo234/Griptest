import Image from 'next/image';
import Button from '../Button';
import type { PricingPlan, PricingPeriod } from '@/constants/LandingPage15/pricing-plans';
import { tick, line } from '@/assets/landing-page-15/icons';
import { cn } from '@/utils/utils';

interface PricingCardProps {
  plan: PricingPlan;
  period: PricingPeriod;
}

export const PricingCard = ({ plan, period }: PricingCardProps) => {
  const price = period === 'monthly' ? plan.price.monthly : plan.price.annual;
  const isPopular = plan.isPopular;

  return (
    <div
      className={cn(
        'flex flex-col gap-4 p-6 rounded-2xl border bg-white w-full max-w-sm',
        isPopular
          ? 'relative shadow-[0px_-8px_0px_0px_#FF4F00] pt-20'
          : 'shadow-[0px_-8px_0px_0px_rgba(248,249,250,1)] max-h-96'
      )}>
      {isPopular && (
        <span
          className='absolute w-32 flex items-center justify-center text-sm font-semibold px-[1px] rounded-md py-[2px] top-8 left-4 right-0 bg-[#FFF6EF] text-lp15-primary uppercase'
          aria-hidden='true'>
          Most Popular
        </span>
      )}

      <div className='flex flex-col gap-4'>
        <h3 className='text-base font-medium text-lp14-dark tracking-[-0.03em]'>{plan.name}</h3>

        <div className='flex items-end gap-2'>
          <span className='text-[44px] font-medium leading-[32px] tracking-[-0.04em] text-lp14-dark'>
            ${price}
          </span>
          <span className='text-sm text-lp14-gray mb-1 tracking-[-0.02em]'>/{period}</span>
        </div>

        <Button variant={isPopular ? 'primary' : 'secondary'} size='lg'>
          {plan.ctaLabel}
        </Button>
        <Image src={line} width={400} height={2} alt='dashed line'></Image>
        <div className='text-lp15-muted text-sm tracking-tight'>{plan.name} plan includes</div>
        <ul className='flex flex-col gap-4'>
          {plan.features.map((feature, index) => (
            <li key={index} className='flex items-center gap-2'>
              <div className='size-5 shrink-0'>
                <Image src={tick} alt='' width={20} height={20} />
              </div>
              <span className='text-[15px] font-medium text-lp15-dark tracking-[-0.02em]'>
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
