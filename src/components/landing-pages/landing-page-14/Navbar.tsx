import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utils/utils';

const NavItems = [
  { label: 'Features', url: '#features' },
  { label: 'Product', url: '#features2' },
  { label: 'Testimonial', url: '#testimonial' },
  { label: 'FAQ', url: '#faq' },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, className }) => (
  <Link
    href={href}
    className={cn(
      'text-sm tracking-tight leading-6 font-semibold text-lp14-dark hover:text-lp14-dark',
      className
    )}>
    {children}
  </Link>
);

const GetStartedButton = () => (
  <NavLink href='/login'>
    <Button variant='tertiary' size='default'>
      <span>Get started</span>
    </Button>
  </NavLink>
);
const LoginButton = () => (
  <NavLink href='/login'>
    <Button variant='secondary' size='default'>
      <span>Login</span>
    </Button>
  </NavLink>
);

const Navbar = () => (
  <nav className='bg-white border-b border-lp14-border'>
    <div className='max-w-[90rem] flex justify-between items-center mx-auto p-4'>
      <Link href='https://www.builderkit.ai'>
        <Image src='/lp13-logo.svg' width={124} height={24} alt='logo' />
      </Link>

      {/* Desktop version */}
      <>
        <div className='hidden md:flex items-center space-x-4'>
          {NavItems.map((item) => (
            <NavLink key={item.label} href={item.url}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className='hidden md:flex items-center gap-[10px]'>
          <LoginButton />
          <GetStartedButton />
        </div>
      </>

      {/* Mobile version */}
      <Sheet>
        <SheetTrigger className='md:hidden'>
          <HiBars3 size={25} />
        </SheetTrigger>
        <SheetContent side='top' className='bg-white text-black w-full overflow-hidden'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-2 text-sm'>
              {NavItems.map((item) => (
                <SheetClose key={item.label} asChild>
                  <NavLink href={item.url} className='py-2'>
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
            <SheetClose asChild>
              <GetStartedButton />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
);

export default Navbar;
