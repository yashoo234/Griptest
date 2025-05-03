import React from 'react';
import asana from '@/assets/landing-page-14/images/asana.png';
import shopify from '@/assets/landing-page-14/images/shopify.png';
import ghost from '@/assets/landing-page-14/images/ghost.png';
import rippling from '@/assets/landing-page-14/images/rippling.png';
import himalayas from '@/assets/landing-page-14/images/himalayas.png';
import square from '@/assets/landing-page-14/images/square.png';
import Image from 'next/image';

const imageSrc = [shopify, asana, ghost, rippling, himalayas, square];

export default function FeaturedOn() {
  return (
    <div className='flex flex-col items-center w-full gap-10 mt-16'>
      <h3 className='text-base font-semibold text-lp14-dark tracking-[-0.03em]'>As Featured On</h3>
      <div className='flex flex-wrap justify-center gap-8 items-center'>
        {imageSrc.map((src, index) => (
          <Image src={src} key={index} alt={`featured-on-${index}`} width={111.54} height={42.16} />
        ))}
      </div>
    </div>
  );
}
