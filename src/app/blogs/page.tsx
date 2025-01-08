import Link from 'next/link'
import Image from 'next/image'
import { posts } from '../lib/posts'

export default function BlogPage() {
  return (
          <div className="min-h-screen bg-[#FAF3E3]">
            <div className="container mx-auto px-12 py-36">
              <h1 className="text-5xl font-extrabold text-[#6B4226] mb-12 text-center tracking-wide">
                Explore Our Latest Food Stories 🍴
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-[#E4D1C1] rounded-lg shadow-xl bg-white overflow-hidden transition-transform transform hover:scale-105"
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-3xl font-semibold text-[#6B4226] mb-4">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {post.description}
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-block bg-[#FFB347] text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-[#FFA931] transition-all"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      );
    }
    

