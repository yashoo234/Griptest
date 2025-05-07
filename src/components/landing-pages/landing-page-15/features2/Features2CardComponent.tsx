import Image from 'next/image';
import { CardContent } from '@/types/types';

interface FeatureCardProps {
  card: CardContent;
}

export const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <div className='group flex flex-col min-h-56 gap-4 p-6 bg-lp14-bg rounded-2xl min-w-80 hover:shadow-sm'>
      <div className='flex items-center justify-center w-16 -ml-4 min-h-12 py-2 size-14'>
        <Image
          src={card.icon}
          alt={`${card.title} icon`}
          width={40}
          height={40}
          className='text-white object-cover'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-[22px] font-semibold leading-[1.21em] tracking-[-0.02em] text-lp15-accent'>
          {card.title}
        </h3>
        <p className='text-base font-normal leading-[180%] tracking-[-0.02em] text-lp15-gray'>
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
