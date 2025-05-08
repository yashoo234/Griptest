import FeatureGrid from './FeaturesGrid';

const Features = () => {
  return (
    <div id='features' className='max-w-7xl mx-auto px-4 pt-40'>
      <div className='text-center mb-20'>
        <p className='text-sm font-semibold text-lp14-primary leading-6'>What can you do with builderkit?</p> 
        <h2 className='text-3xl md:text-4xl font-medium mt-6 text-lp14-dark md:leading-snug tracking-[-1.68px]'>
          Explore the power of
          <br />
          AI apps generation Workflow
        </h2>
        <p className='text-base font-normal mt-4 leading-[180%] tracking-tight text-zinc-600'>
          All the necessary features to create your next AI App
        </p>
      </div>
      <div className='mt-20 mx-auto max-w-[1024px]'>
        <FeatureGrid />
      </div>
    </div>
  );
};

export default Features;
