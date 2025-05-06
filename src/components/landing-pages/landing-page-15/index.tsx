import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import Features from './features/Features';
import Features2 from './features2/Features2';
import Feedback from './feedback/Feedback';
import Pricing from './pricing/Pricing';
import Faq from './Faq';
import FeaturedOn from './FeaturedOn';
import Features3 from './features3/Features3';

export default function LandingPage15() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedOn />
      <Features />
      <Features3 />
      <Features2 />
      <Feedback />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
