import { Innovation, Efficiency, InstantSolutions } from '@/assets/landing-page-14/icons';
import innovationImage from '@/assets/landing-page-14/images/innovation.jpg';
import efficiencyImage from '@/assets/landing-page-14/images/efficiency.jpg';
import instantSolutionsImage from '@/assets/landing-page-14/images/instant.jpg';
import centralizedPowerImage from '@/assets/landing-page-14/images/centralized.jpg';
import { FeatureCardContent } from '@/types/types';
import { StaticImageData } from 'next/image';

type FeatureDataType = FeatureCardContent & {
  imageUrl: string | StaticImageData;
  bgColor?: string;
  isFull?: boolean;
  height?: number;
};

export const featuresData: FeatureDataType[] = [
  {
    tag: {
      icon: Innovation,
      text: 'Innovation Edge',
      color: '#0F6FFF',
    },
    title: 'Pre Built AI apps, all in one place',
    description:
      'Elevate your business with cutting-edge AI apps that drive growth, streamline processes, and bring innovative solutions right to your fingertips.',
    imageUrl: innovationImage,
    isFull: true,
  },
  {
    tag: {
      icon: Efficiency,
      text: 'Efficiency Boost',
      color: '#0FFFD4',
    },
    title: 'Unleash AI Magic',
    description:
      'Transform your workflow with a suite of powerful, auto-generated AI apps that adapt to your needs and supercharge your productivity.',
    imageUrl: efficiencyImage,
    bgColor: '#003079',
    height: 571,
  },
  {
    tag: {
      icon: InstantSolutions,
      text: 'Instant Solutions',
      color: '#0F6FFF',
    },
    title: 'Pre-Built, Ready to Rock',
    description:
      'Dive into a diverse collection of AI apps that come pre-built and ready to deploy, saving you time and effort while delivering powerful results.',
    imageUrl: instantSolutionsImage,
    height: 571,
  },
  {
    tag: {
      icon: Innovation,
      text: 'Centralized Power',
      color: '#0F6FFF',
    },
    title: 'One Place, All the Power',
    description:
      'Access a centralized hub of cutting-edge AI applications designed to streamline your tasks, enhance efficiency, and keep everything you need in one convenient location.',
    imageUrl: centralizedPowerImage,
    isFull: true,
  },
];
