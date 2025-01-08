import { posts } from '@/app/lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Comments from '@/components/comment'

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === params.id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-20 pb-12"> {/* Add padding top to account for the fixed header */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-10">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 text-center">
                {post.description}
              </p>
              <div className="prose dark:prose-invert lg:prose-xl max-w-3xl mx-auto">
                <p className="mb-4">{post.content}</p>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-emerald-700 dark:text-emerald-400">
                  Key Highlights
                </h2>
                <ul>
                  <li>Unique flavors and textures</li>
                  <li>Fresh, locally-sourced ingredients</li>
                  <li>Expert preparation techniques</li>
                  <li>Perfect for food enthusiasts and casual diners alike</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-emerald-700 dark:text-emerald-400">
                  Why We Love It
                </h2>
                <p>
                This dish/place embodies the essence of culinary excellence. Whether you&#39;re a seasoned foodie or just looking for a delightful meal, the attention to detail and passion for quality shine through in every aspect.
                </p>
                <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-700 dark:text-emerald-400">Pro Tip</h3>
                  <p>
                  To fully appreciate the flavors, take your time and savor each bite. Don&#39;t hesitate to ask the chef or staff for their recommendations – they often have insider knowledge that can elevate your dining experience.
                  </p>
                </div>
              </div>
              <Comments postId={params.id} />
              <div className="mt-10 text-center">
                <Link href="/" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors text-lg font-semibold">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }))
}

