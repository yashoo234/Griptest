'use client';

import React, { useState } from 'react';
import Button from './Button';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
  };

  return (
    <div className='text-center bg-[linear-gradient(180deg,_#002B6B_36.53%,_#0F6FFF_100%)] py-16 md:py-40 px-4 space-y-8'>
      <h2 className='text-2xl md:text-5xl font-medium text-white md:leading-[60px] tracking-tight'>
        Join over 1 million
        <br />
        developers and designers
      </h2>

      <form onSubmit={handleSubmit}>
        <div className='relative w-full md:w-[375px] mx-auto'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your work email'
            className='w-full h-12 px-4 rounded-lg text-sm border border-lp14-border text-lp14-dark bg-white  placeholder:text-lp14-gray'
          />
          <Button type='submit' variant='tertiary' className='absolute right-1 top-1 h-10'>
            Subscribe
          </Button>
        </div>
      </form>

      <p className='text-white text-sm md:text-base font-light'>
        Want to Build Products on the Internet but don't know where to start?
      </p>
    </div>
  );
}
