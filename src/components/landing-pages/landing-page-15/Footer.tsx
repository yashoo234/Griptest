import React from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

interface FooterLink {
  label: string;
  link?: string;
}

const footerSections: { [key: string]: FooterLink[] } = {
  ALL: [
    { label: 'About', link: '#' },
    { label: 'Company', link: '#' },
    { label: 'Careers', link: '#' },
    { label: 'Newsletter', link: '#' },
  ],
  INFO: [
    { label: 'Features', link: '#features' },
    { label: 'Product', link: '#product' },
    { label: 'Pricing', link: '#pricing' },
    { label: "FAQ's", link: '#faq' },
  ],
  CONTACTS: [{ label: 'hello@builderkit.ai', link: 'mailto:hello@builderkit.ai' }, { label: 'India' }],
};

export default function Footer() {
  return (
    <div className='bg-lp15-secondary px-4 pt-12 md:pt-20 md:pb-12 mt-32 border-t border-[#DEDEDE]'>
      <div className='flex flex-col items-center justify-center md:px-44 gap-10 mb-28 max-w-7xl mx-auto'>
        <div className='text-4xl md:text-7xl font-semibold text-center text-lp15-accent md:leading-[120%] tracking-tighter md:tracking-[-4px]'>
          Join over 1 million developers to build your next AI app
        </div>
        <Link href={'#'}>
          <Button variant='primary' size='lg' className='text-lg md:text-xl md:px-20 md:py-8 rounded-full'>
            Try now for free
          </Button>
        </Link>
      </div>
      <div className='max-w-7xl mx-auto space-y-14 md:space-y-28'>
        <div className='flex flex-col md:flex-row gap-10 lg:gap-40'>
          <div className='md:w-1/2 space-y-8'>
            <Image src='/lp15-logo.svg' alt='logo' width={124} height={124} className='w-32' />
            <p className='w-3/4 text-lp15-accent leading-7 font-medium'>
              Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
            </p>
          </div>

          {/* Footer links */}
          <div className='flex flex-1 flex-col md:flex-row gap-10 md:gap-20'>
            {Object.entries(footerSections).map(([title, links]) => {
              const isContacts = title === 'CONTACTS';
              const textSize = isContacts ? 'text-sm' : 'text-base';

              return (
                <div key={title} className='space-y-4'>
                  <p className='text-[12px] text-[#303850] opacity-50'>{title}</p>
                  <div className='space-y-3 text-lp14-dark font-medium'>
                    {links.map((item) =>
                      item.link ? (
                        <Link href={item.link} key={item.label} className={`block ${textSize}`}>
                          {item.label}
                        </Link>
                      ) : (
                        <p className={`${textSize} text-lp14-dark`} key={item.label}>
                          {item.label}
                        </p>
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex justify-center text-[12px] text-[#303950] opacity-50'>
          © {new Date().getFullYear()} — Builderkit
        </div>
      </div>
    </div>
  );
}
