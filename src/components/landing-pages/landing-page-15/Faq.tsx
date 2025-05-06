'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/utils/utils';
import ArrowDown from '@/assets/landing-page-14/icons/ArrowDown';

const faqItems = [
  {
    id: 'item-1',
    question: 'What is builderkit? Tell me more about your service',
    answer:
      "BuilderKit is for any developer who wants to build an AI SaaS. It's a great starting point for your next project.",
  },
  {
    id: 'item-2',
    question: 'Can I use this product on Mobile/tab?',
    answer:
      'Yes, BuilderKit is fully responsive and works on all devices including mobile phones and tablets. The user interface adapts seamlessly to different screen sizes.',
  },
  {
    id: 'item-3',
    question: 'When I unsubscribe from your pricing plan, do the remaining credits disappear?',
    answer:
      'No, your remaining credits will stay valid until their expiration date, even if you unsubscribe from your current plan. You can still use them within the validity period.',
  },
  {
    id: 'item-4',
    question: 'Who owns the app I generate here?',
    answer:
      "You own 100% of the app you generate using BuilderKit. We don't claim any ownership rights to your creations. You are free to use, modify, and distribute them as you wish.",
  },
];

const FAQ = () => {
  return (
    <div id='faq' className='w-full flex flex-col items-center gap-14 py-16 px-4'>
      <div className='text-center mb-20'>
        <h2 className='text-3xl md:text-4xl font-medium mt-6 text-lp14-dark md:leading-[100%] tracking-tighter'>
          Frequently Asked Questions
        </h2>
      </div>
      <div className='border border-lp14-border rounded-2xl overflow-hidden w-full max-w-[640px]'>
        <Accordion type='single' collapsible defaultValue='item-1' className='w-full'>
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={cn(
                'border-b border-lp14-border last:border-b-0',
                'data-[state=open]:bg-lp14-bg data-[state=closed]:bg-white',
                'transition-colors duration-300',
                index === 0 ? 'rounded-t-2xl' : '',
                index === faqItems.length - 1 ? 'rounded-b-2xl' : ''
              )}>
              <AccordionTrigger className='px-4 py-[18px] hover:no-underline group [&>svg]:hidden'>
                <div className='flex items-center gap-4 w-full'>
                  <div
                    className={cn(
                      'min-w-6 min-h-6 rounded-full transition-colors duration-300',
                      'group-data-[state=open]:bg-lp15-primary group-data-[state=closed]:bg-[#FFE3DF]'
                    )}></div>
                  <span className='text-base font-medium text-lp14-dark tracking-tight text-left'>
                    {faq.question}
                  </span>
                </div>
                <div className='shrink-0'>
                  <ArrowDown />
                </div>
              </AccordionTrigger>
              <AccordionContent className='pl-[40px] pr-8 text-lp14-muted text-base font-medium leading-relaxed tracking-tight'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
