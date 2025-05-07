import FeatureCardGroup from './Features2CardGrid';

const Features2 = () => {
  return (
    <div id='features' className='max-w-7xl mx-auto px-4 pt-24'>
      <div className='text-center mb-20'>
        <h2 className='text-3xl md:text-[40px] font-medium mt-6 text-lp15-accent md:leading-[120%] tracking-tighter'>
          Structure you need to build any AI app
        </h2>
        <p className='text-lg font-medium mt-4 leading-[180%] tracking-tight text-lp15-gray'>
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
