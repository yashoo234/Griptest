import Hero from './Hero';
import Footer from './Footer';
import Headers from './Header';
import Navbar from './Navbar';
import Features from './features/Features';
import Features2 from './features2/Features2';
import Feedback from './Feedback';
import Pricing from './pricing/Pricing';
import Subscribe from './Subscribe';
import Faq from './Faq';
import Image from 'next/image';
import hero from '@/assets/landing-page-13/images/hero.png';
import FeaturedOn from './FeaturedOn';
import Features3 from './features3/Features3';
import Blog from './blog/Blog';

export default function LandingPage14() {
  return (
    <div>
      <Headers />
      <Navbar />
      <div className='max-w-6xl mx-auto py-16 px-4 '>
        <Hero />
      </div>
      <div className='w-full border border-transparent bg-gradient-to-b from-white via-[#E1EDFF] to-white md:mt-16 py-12'>
        <Image src={hero} width={1042} height={550} alt='hero' className='mx-auto rounded-xl' />
      </div>
      <FeaturedOn />
      <Features />
      <Features2 />
      <Features3 />
      <Feedback />
      <Pricing />
      <Subscribe />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
}
