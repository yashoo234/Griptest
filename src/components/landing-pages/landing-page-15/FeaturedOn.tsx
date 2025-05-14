import React from 'react';
import { asana, shopify, ghost, rippling, himalayas, square } from '@/assets/landing-page-15/icons';
import Image from 'next/image';

const imageSrc = [shopify, asana, ghost, rippling, himalayas, square];

export default function FeaturedOn() {
  return (
    <div className='flex flex-col items-center w-full gap-10 pt-16 bg-[linear-gradient(180deg,_#FAF5F3_0%,_#FFFFFF_100%)]'>
      <h3 className='text-base font-medium text-lp15-accent tracking-[-0.03em]'>As Featured On</h3>
      <div className='flex flex-wrap justify-center gap-8 items-center'>
        {imageSrc.map((src, index) => (
          <Image src={src} key={index} alt={`featured-on-${index}`} width={111.54} height={42.16} />
        ))}
      </div>
    </div>
  );
}
