import Image from 'next/image';
import { hello, group, social } from '@/assets/landing-page-15/images';

const cardDetails = [
  {
    title: 'Build your AI apps Fast',
    content:
      'Transform your workflow with a suite of powerful, auto-generated AI apps that adapt to your needs and supercharge your productivity.',
    url: hello,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Transform your workflow with a suite of powerful, auto-generated AI apps that adapt to your needs and supercharge your productivity.',
    url: social,
  },
  {
    title: 'Build your AI apps Fast',
    content:
      'Transform your workflow with a suite of powerful, auto-generated AI apps that adapt to your needs and supercharge your productivity.',
    url: group,
  },
];

export default async function Features() {
  return (
    <div id='features' className='flex justify-center bg-lp15-bgdark'>
      <div className='md:max-w-6xl max-w-80 md:w-full flex flex-col md:my-32 my-24 items-center gap-14'>
        <div className='flex flex-col items-center gap-7 justify-between text-center'>
          <p className='md:text-4xl text-white text-2xl font-medium max-w-lg md:max-w-full flex flex-col gap-2'>
            All the things you need to build any AI app
          </p>
          <span className='text-[#DEDEEBCC] leading-6 max-w-2xl'>
            Builderkit takes care of everything from authentication to payments, get your production-ready app
            within hours.
          </span>
        </div>

        <div className='flex gap-4 flex-col mx-4 md:flex-row'>
          {cardDetails.map((card, index) => {
            return (
              <div
                key={index}
                className='rounded-2xl flex flex-col md:flex md:gap-8 gap-4 bg-[#FFFFFF]/5 border border-[#171717] md:py-8 pb-2 pt-4 md:px-4 px-2'>
                <div className='min-h-52 flex items-center justify-center rounded-xl overflow-hidden border-[#F84F39] border-2'>
                  <Image src={card.url} alt={card.title} width={200} height={200} />
                </div>
                <div className='gap-2 flex flex-col text-left'>
                  <p className='font-medium text-white md:text-2xl text-xl'>{card.title}</p>
                  <span className='text-[#DEDEEBCC] leading-relaxed text-sm'>{card.content}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
