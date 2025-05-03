'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import FeatureImage from '@/assets/landing-page-14/images/Image.png';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, isActive = false }) => {
  return (
    <Card
      className={`rounded-3xl w-full p-0 border-none transition-all duration-300 ${isActive ? 'bg-white shadow-lg scale-105' : 'bg-lp14-bg'}`}>
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
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      number: '01',
      title: 'NextJS Boilerplate',
      description: "Get access to the BuilderKit's Private Github Repo",
    }, // isActive removed, will be dynamic
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollCenterInSection = scrollY + viewportHeight / 2 - sectionTop;
      const progress = Math.max(0, Math.min(1, scrollCenterInSection / sectionHeight));
      const newIndex = Math.min(features.length - 1, Math.floor(progress * features.length));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [features.length, activeIndex]);

  return (
    <section ref={sectionRef} className='bg-white'>
      <div className='container px-2'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          <div className='w-full lg:w-1/3 flex flex-col gap-4'>
            {features.map((feature, index) => (
              <FeatureCard key={feature.number} {...feature} isActive={index === activeIndex} />
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
