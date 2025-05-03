import { cardsContent } from '@/constants/LandingPage14/features2-card-content';
import FeatureCard from './Features2CardComponent';

interface FeatureCardGroupProps {
  title?: string;
}

export const FeatureCardGroup = ({ title }: FeatureCardGroupProps) => {
  const firstRowCards = cardsContent.slice(0, 3);
  const secondRowCards = cardsContent.slice(3, 6);

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      {title && <h2 className='text-2xl font-bold text-center mb-8'>{title}</h2>}
      <div className='flex flex-col gap-4 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center'>
          {firstRowCards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full place-items-center'>
          {secondRowCards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardGroup;
