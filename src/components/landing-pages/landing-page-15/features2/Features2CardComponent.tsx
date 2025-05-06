import Image from 'next/image';
import { CardContent } from '@/types/types';

interface FeatureCardProps {
  card: CardContent;
}

export const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <div className='group flex flex-col min-h-56 gap-4 p-6 bg-lp14-bg rounded-2xl min-w-80 hover:shadow-sm'>
      <div className='flex items-center justify-center w-12 min-h-12 p-2 rounded-lg'>
        <Image
          src={card.icon}
          alt={`${card.title} icon`}
          width={40}
          height={40}
          className='w-10 h-10 text-white'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-[20px] font-semibold leading-[1.21em] tracking-[-0.02em] text-lp14-dark'>
          {card.title}
        </h3>
        <p className='text-[15px] font-normal leading-[1.72em] tracking-[-0.02em] text-lp14-muted'>
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
