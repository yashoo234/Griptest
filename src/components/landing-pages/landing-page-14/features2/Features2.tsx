import FeatureCardGroup from './Features2CardGrid';

const Features2 = () => {
  return (
    <div id='features' className='max-w-7xl mx-auto px-4 pt-40'>
      <div className='text-center mb-20'>
        <p className='text-sm font-semibold text-lp14-primary'>Features</p>
        <h2 className='text-3xl md:text-4xl font-medium mt-6 text-lp14-dark md:leading-[100%] tracking-tighter'>
          Structure you need to build any AI app
        </h2>
        <p className='text-lg font-normal mt-4 leading-[180%] tracking-tight text-zinc-600'>
          Builderkit takes care of everything from authentication to
          <br />
          payments, get your production-ready app within hours.
        </p>
      </div>
      <div className='mt-14 mx-auto max-w-[1024px]'>
        <FeatureCardGroup />
      </div>
    </div>
  );
};

export default Features2;
