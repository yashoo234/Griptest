import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import footer from '@/assets/landing-page-13/images/footer.svg';

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
    <div className='bg-lp14-bg px-4 pt-12 md:pt-20 mt-32 border-t border-lp14-border'>
      <div className='max-w-7xl mx-auto space-y-14 md:space-y-28'>
        <div className='flex flex-col md:flex-row gap-10 lg:gap-40'>
          <div className='md:w-1/2 space-y-8'>
            <Image src='/lp13-logo.svg' alt='logo' width={124} height={124} className='w-32' />
            <p className='w-3/4 text-lp14-dark leading-7 font-medium'>
              Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
            </p>
            <Button variant='tertiary' size='md'>
              <Link href='#' className='text-base flex justify-center items-center gap-2'>
                Try now for free
                <ArrowRightIcon className='ml-2' />
              </Link>
            </Button>
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

        <Image src={footer} alt='logo' width={1150} height={200} className='mx-auto' />
      </div>
    </div>
  );
}
