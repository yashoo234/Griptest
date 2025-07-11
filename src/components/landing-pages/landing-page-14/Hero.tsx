import Button from './Button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <div className='flex flex-col items-center space-y-8 mt-4'>
      <div className='inline-flex items-center gap-2 bg-[#FFFBFB] rounded-[30px] py-1 pl-1 pr-4 border border-[#FFECEC]'>
        <div className='bg-gradient-to-b from-[#FF4C4C]/70 to-[#FF4C4C] text-white text-xs font-medium rounded-[24px] px-1.5 py-0.5 border-2 border-[#D82626]'>
          NEW
        </div>
        <span className='text-sm font-semibold text-lp14-dark'>Unlock Your Creative Spark!</span>
        <div className='size-5 flex items-center justify-center'>
          <HiArrowRight />
        </div>
      </div>
      <h1 className=' md:max-w-[738px] font-medium text-3xl md:text-5xl text-center mx-auto tracking-[-1.68px] md:leading-[56px] bg-clip-text'>
        Generate modular AI
        <br /> Apps with ease and pace
      </h1>

      <p className='text-[#878787] text-sm md:text-base md:leading-8 text-center tracking-tight mb-2'>
        Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps
        <br />
        within days. Save Hours of Effort and Use our robust Deployable code.
      </p>

      <div className='md:flex-row gap-4 md:gap-3 items-center justify-center'>
        <Link href='#pricing' className='block'>
          <Button variant='tertiary' size='default'>
            <span>Get Started for free</span>
            <HiArrowRight />
          </Button>
        </Link>
        <p className='text-neutral-300 text-sm md:text-sm md:leading-8 text-center tracking-tight my-2'>
          1 day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
