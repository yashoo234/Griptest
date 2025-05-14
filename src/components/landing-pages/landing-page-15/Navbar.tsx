import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { HiBars3 } from 'react-icons/hi2';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/utils/utils';

const NavItems = [
  { label: 'Product', url: '#features2' },
  { label: 'Pricing', url: '#princing' },
  { label: 'Blog', url: '#blog' },

  { label: 'FAQ', url: '#faq' },
  { label: 'Affiliates', url: '#affiliates' },
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

const LoginButton = () => (
  <NavLink href='/login'>
    <Button variant='primary' size='default'>
      <span>Login</span>
    </Button>
  </NavLink>
);

const Navbar = () => (
  <nav className='bg-lp15-bg border-b border-lp15-border'>
    <div className='flex justify-between items-center py-4 mx-4 md:px-32 lg:mx-auto max-w-screen-2xl'>
      <Link href='https://www.builderkit.ai'>
        <Image src='/lp15-logo.svg' width={124} height={24} alt='logo' />
      </Link>

      {/* Desktop version */}
      <>
        <div className='hidden md:flex items-center space-x-4'>
          {NavItems.map((item) => (
            <NavLink key={item.label} href={item.url}>
              {item.label}
            </NavLink>
          ))}
          <div className='pl-5'>
            <LoginButton />
          </div>
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
              <LoginButton />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
);

export default Navbar;
