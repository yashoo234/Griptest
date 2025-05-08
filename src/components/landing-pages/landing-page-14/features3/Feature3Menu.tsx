'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import FeatureImage from '@/assets/landing-page-14/images/Image.png';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  isActive = false,
  onClick,
}) => {
  return (
    <Card
      className={`rounded-3xl w-full border-none p-0 transition-all duration-300 cursor-pointer ${isActive ? 'bg-lp14-bg' : 'bg-white'}`}
      onClick={onClick}>
      <CardContent className='flex items-start gap-4 p-5 md:p-6'>
        <div
          className={`text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-lp14-primary' : 'text-lp14-gray'}`}>
          {number}
        </div>
        <div className='flex flex-col gap-2'>
          <h3
            className={`text-lg font-semibold transition-colors duration-300 ${isActive ? 'text-black' : 'text-lp14-dark'}`}>
            {title}
          </h3>
          <p className='text-sm text-lp14-muted'>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Feature3Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      number: '01',
      title: 'NextJS Boilerplate',
      description: "Get access to the BuilderKit's Private Github Repo",
    },
    {
      number: '02',
      title: 'Pre-Built apps',
      description: 'Explore a dynamic collection of AI applications .',
    },
    {
      number: '03',
      title: 'Admin Dashboard',
      description: 'Maintain data from all your apps into beautifully designed dashboards.',
    },
    {
      number: '04',
      title: 'Integrations',
      description: 'Authentication, Payments, Customer Support, Emails, All Major AI Models Supported',
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className='bg-white'>
      <div className='container px-2'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          <div className='w-full lg:w-1/3 flex flex-col gap-4'>
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.number}
                {...feature}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          <div className='w-full lg:w-2/3 relative overflow-hidden rounded-3xl flex items-center justify-center'>
            <Image
              src={FeatureImage}
              alt='Feature Overlay'
              width={800}
              height={500}
              className='rounded-3xl shadow-md'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3Menu;
