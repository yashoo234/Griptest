import { blogPosts } from '@/constants/LandingPage14/blog-content';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <section className='w-full py-24 lg:py-32 border-b border-dashed border-zinc-200'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-sm font-semibold text-lp14-primary leading-6'>Blogs</p>
        <h2 className='mt-6 text-3xl md:text-4xl font-semibold text-zinc-800 md:leading-snug tracking-[-1.68px]'>
          Latest Blogs
        </h2>
        <p className='mt-4 text-base text-zinc-600 leading-relaxed'>
          Explore tutorials from builderkit to get started on{' '}
          <span className='hidden sm:inline'>your journey of building your next AI app.</span>
        </p>

        <div className='mt-16 flex flex-wrap justify-center gap-6'>
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
