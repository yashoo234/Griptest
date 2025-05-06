import { cardsContent } from '@/constants/LandingPage15/features2-card-content';
import FeatureCard from './Features2CardComponent';

interface FeatureCardGroupProps {
  title?: string;
}

export const FeatureCardGroup = ({ title }: FeatureCardGroupProps) => {
  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      {title && <h2 className='text-2xl font-bold text-center mb-8'>{title}</h2>}
      <div className='flex flex-col gap-4 min-w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center'>
          {cardsContent.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardGroup;
