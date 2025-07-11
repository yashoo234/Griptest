'use client';
import card from '@/constants/LandingPage15/card-content';
import CardComponent from './FeaturesCardComponent';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <div id='features' className='max-w-[90%] mx-auto px-4 pt-40'>
      <div className='text-center mb-20'>
        <h2 className='text-3xl md:text-[40px] font-medium mt-6 text-lp15-accent md:leading-[120%] tracking-tighter'>
          Explore the power of
          <br />
          AI apps generation Workflow
        </h2>
        <p className='text-lg font-medium mt-4 leading-[180%] tracking-tight text-lp15-gray'>
          All the necessary features to create your next AI App
        </p>
      </div>
      <div className='mx-auto' ref={container}>
        {card.map((item, index) => {
          const tiltDegree = 2;
          return (
            <CardComponent
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              color={item.color}
              imageUrl={item.imageUrl}
              isFirst={index === 0}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              tiltDegree={tiltDegree}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
