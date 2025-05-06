import hero from '@/assets/landing-page-15/images/hero.png';
import Button from './Button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='flex flex-col lg:max-h-[560px] lg:flex-row justify-between items-center lg:items-start w-full bg-lp15-bg lg:px-0 px-6 lg:pl-32 py-12 lg:pb-0 gap-10 lg:gap-20 overflow-hidden'>
      <div className='flex flex-col w-full lg:w-1/3'>
        <div className='flex flex-col gap-5 lg:gap-[20px] mb-10 lg:mb-[40px] text-center lg:text-left'>
          <h1 className='font-semibold text-3xl lg:text-4xl lg:text-[52px] text-[#431A11] leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-0.05em]'>
            Generate modular AI Apps with ease and pace
          </h1>
          <p className='text-[#6E4E46] text-sm lg:text-base lg:text-[16px] font-medium leading-relaxed lg:leading-[1.8] tracking-tight lg:tracking-[-0.011em]'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>

        <div className='flex flex-col gap-3 lg:gap-[12px]  text-center items-center lg:items-start'>
          <Link href='#pricing' className='w-fit'>
            <Button variant='primary' size='default'>
              <span>Try now for free</span>
              <HiArrowRight />
            </Button>
          </Link>
          <p className='text-[#E07E5A] text-xs lg:text-[13px] font-semibold leading-relaxed lg:leading-[1.8] tracking-tight lg:tracking-[-0.014em]'>
            1 day free trial, no credit card required
          </p>
        </div>
      </div>

      <div className='w-full lg:w-2/3 h-[300px] md:h-[400px] lg:h-[800px] relative overflow-hidden flex items-start justify-start'>
        <Image
          src={hero}
          alt='Hero dashboard preview'
          className='object-cover rounded-2xl md:rounded-tl-2xl'
          priority
        />
      </div>
    </div>
  );
}
