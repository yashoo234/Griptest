import Plans from './Plans';

const Pricing = () => {
  return (
    <section id='pricing' className='w-full py-24 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-10'>
          <div className='text-center mb-20'>
            <h2 className='text-3xl md:text-4xl font-medium mt-6 text-lp14-dark md:leading-[100%] tracking-tighter'>
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
