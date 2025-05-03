import { BlogPost } from '@/types/types';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='flex flex-col gap-3 p-4 pb-5 rounded-2xl border border-lp14-border bg-white shadow-md w-full max-w-[384px]'>
      <div className='relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#EEEEEE]'>
        <Image src={post.image} alt={post.title} fill className='object-cover object-center' />
      </div>
      <p className='text-sm font-semibold text-lp14-gray leading-relaxed'>{post.formattedDate}</p>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-semibold leading-snug tracking-tight text-lp14-dark'>{post.title}</h3>
        <p className='text-base leading-relaxed text-lp14-muted'>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;
