import type { PricingPeriod } from '@/constants/LandingPage15/pricing-plans';

interface PricingToggleProps {
  period: PricingPeriod;
  onChange: (period: PricingPeriod) => void;
}

export const PricingToggle = ({ period, onChange }: PricingToggleProps) => {
  return (
    <div className='inline-flex p-1 gap-3 w-56 rounded-2xl border border-lp15-border bg-lp14-bg'>
      <button
        type='button'
        onClick={() => onChange('monthly')}
        className={`py-2 px-4 rounded-xl text-base font-semibold tracking-[-0.02em] transition-colors ${
          period === 'monthly' ? 'bg-white border border-lp15-border text-lp15-accent' : 'text-lp14-muted'
        }`}>
        Monthly
      </button>

      <button
        type='button'
        onClick={() => onChange('annual')}
        className={`relative py-2 w-full pr-8 rounded-xl text-base font-semibold tracking-[-0.02em] transition-colors ${
          period === 'annual' ? 'bg-white border border-lp15-border text-lp15-accent' : 'text-lp14-muted'
        }`}>
        Annual
        <span className='absolute text-xs font-bold py-[4px] px-[6px] text-lp15-primary'>-20%</span>
      </button>
    </div>
  );
};

export default PricingToggle;
