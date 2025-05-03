import type { PricingPeriod } from '@/constants/LandingPage14/pricing-plans';

interface PricingToggleProps {
  period: PricingPeriod;
  onChange: (period: PricingPeriod) => void;
}

export const PricingToggle = ({ period, onChange }: PricingToggleProps) => {
  return (
    <div className='inline-flex p-1 w-56 rounded-lg border border-lp14-border bg-lp14-bg'>
      <button
        type='button'
        onClick={() => onChange('monthly')}
        className={`py-1 px-4 rounded-md text-sm font-semibold tracking-[-0.02em] transition-colors ${
          period === 'monthly' ? 'bg-white border border-lp14-border text-lp14-dark' : 'text-lp14-muted'
        }`}>
        Monthly
      </button>

      <button
        type='button'
        onClick={() => onChange('annual')}
        className={`relative py-1 w-full px-4 rounded-md text-sm font-semibold tracking-[-0.02em] transition-colors ${
          period === 'annual' ? 'bg-white border border-lp14-border text-lp14-dark' : 'text-lp14-muted'
        }`}>
        Annual
        <span className='absolute text-xs font-bold py-[2px] px-[6px] rounded-full text-lp14-primary'>
          -20%
        </span>
      </button>
    </div>
  );
};

export default PricingToggle;
