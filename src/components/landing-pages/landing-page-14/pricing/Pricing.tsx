import Plans from './Plans';

const Pricing = () => {
  return (
    <section id='pricing' className='w-full py-24 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-10'>
          <div className='text-center mb-20'>
            <p className='text-sm font-semibold text-lp14-primary leading-6'>Pricing</p>
            <h2 className='text-3xl md:text-4xl font-medium mt-6 text-lp14-dark md:leading-snug tracking-[-1.68px]'>
              Flexible Pricing Plans to Suit Your Needs
            </h2>
          </div>
          <Plans />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
