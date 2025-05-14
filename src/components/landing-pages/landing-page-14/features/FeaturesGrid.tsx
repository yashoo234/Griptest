import { featuresData } from '@/constants/LandingPage14/features-content';
import FeatureCard from './FeaturesCardComponent';

const FeatureGrid = () => {
  return (
    <div className='flex flex-col gap-8 w-full overflow-hidden'>
      {featuresData.map((feature, idx) => {
        if (idx === 1) {
          return (
            <div key={idx} className='flex flex-col md:flex-row gap-8 w-full'>
              {[featuresData[1], featuresData[2]].map((item, i) => (
                <div key={i} className='w-full md:w-1/2'>
                  <FeatureCard
                    content={{
                      tag: item.tag,
                      title: item.title,
                      description: item.description,
                    }}
                    imageUrl={item.imageUrl}
                    bgColor={item.bgColor}
                    height={item.height}
                  />
                </div>
              ))}
            </div>
          );
        }
        if (idx === 2) return null;

        return (
          <FeatureCard
            key={idx}
            content={{
              tag: feature.tag,
              title: feature.title,
              description: feature.description,
            }}
            imageUrl={feature.imageUrl}
            bgColor={feature.bgColor}
            height={feature.height}
            isFull={feature.isFull}
          />
        );
      })}
    </div>
  );
};

export default FeatureGrid;
