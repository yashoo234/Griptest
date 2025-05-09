import { FeatureCardProps } from '@/types/types';
import Image from 'next/image';

const FeatureCard = ({
  content,
  imageUrl,
  bgColor = '#FCFCFC',
  width,
  height = 520,
  isFull = false,
}: FeatureCardProps) => {
  const textColor = bgColor === '#003079' ? '#FFFFFF' : '#3E3E3E';
  const subTextColor = textColor === '#3E3E3E' ? '#757679' : '#ffffffb3';

  return (
    <div
      className='flex flex-col items-center gap-8 rounded-lg border border-[#EDEDED] overflow-hidden'
      style={{
        backgroundColor: bgColor,
        width: width || (isFull ? '100%' : 'auto'),
        height: height,
      }}>
      <div className='flex flex-col self-stretch gap-3 px-6 pt-6 pb-0 w-full'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center justify-center size-6 rounded-sm'>
            <Image
              src={content.tag.icon}
              alt={content.tag.text}
              width={16}
              height={16}
              className='object-contain'
            />
          </div>
          <span
            style={{ color: content.tag.color }}
            className='text-[14px] font-semibold tracking-[-0.04em] leading-[1.21em]'>
            {content.tag.text}
          </span>
        </div>
        <div className='flex flex-col self-stretch gap-1.5'>
          <h3
            className='text-[20px] font-semibold tracking-[-0.02em] leading-[1.21em]'
            style={{ color: textColor }}>
            {content.title}
          </h3>
          <p
            className='text-[16px] font-normal leading-[1.86em] tracking-[-0.02em]'
            style={{ color: subTextColor }}>
            {content.description}
          </p>
        </div>
      </div>
      <div className='relative rounded-md z-50 w-full grow'>
        <Image src={imageUrl} alt={content.title} fill className='object-contain' />
      </div>
    </div>
  );
};

export default FeatureCard;
