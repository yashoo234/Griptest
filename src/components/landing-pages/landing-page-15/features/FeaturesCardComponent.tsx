'use client';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface CardProps {
  title: string
  index: number
  description: string
  color: string
  imageUrl: string | StaticImageData
  isFirst?: boolean
  progress: MotionValue<number>
  range: [number, number]    
  tiltDegree: number            
}

const CardComponent = ({
  index,
  description,
  color,
  imageUrl,
  isFirst,
  progress,
  range,
  tiltDegree,
}: CardProps) => {
  const container = useRef(null);
  const rotate = useTransform(progress, range, [0, index % 2 === 0 ? tiltDegree : -tiltDegree]);
  return (
    <motion.div
      ref={container}
      className='h-[100vh] flex items-center justify-center align-middle sticky top-0'
      style={{ rotate, top: `calc(-5vh + ${index * 15}px)` }}>
      <div className={`md:min-h-[400px] rounded-3xl overflow-hidden mb-10`}>
        <div className='container mx-0 px-0'>
          <div
            className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${index % 2 === 0 ? 'bg-[#FFF8F6]' : 'bg-[#FAF6FF]'}`}>
            <div className='w-full md:w-1/2 space-y-4 p-10'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                <span style={{ color: color }}>Build</span> your AI apps{' '}
                <span style={{ color: color }}>Fast</span>
              </h2>
              <p className='text-[#6E4E46] max-w-md text-sm sm:text-base'>{description}</p>
            </div>
            <div
              className={`w-full md:w-1/2 md:min-h-[600px] mt-6 md:mt-0 flex justify-center items-center`}
              style={{ backgroundColor: color }}>
              <div className='relative w-48 sm:w-56 py-4 md:w-64'>
                <Image
                  src={imageUrl || '/opengraph-image.png'}
                  alt='BuilderKit App Screenshot'
                  width={400}
                  height={600}
                  className='rounded-xl w-full h-auto'
                  priority={isFirst}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CardComponent;
