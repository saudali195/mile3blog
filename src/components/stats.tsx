import { Youtube, Instagram, Rss } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
      <div className="flex flex-col items-center space-y-2">
        <Youtube className="h-8 w-8 text-gray-900" />
        <div className="text-3xl font-bold text-gray-900">1.2M+</div>
        <div className="text-gray-600 uppercase text-sm tracking-wide">Subscribers</div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Instagram className="h-8 w-8 text-gray-900" />
        <div className="text-3xl font-bold text-gray-900">1.8M+</div>
        <div className="text-gray-600 uppercase text-sm tracking-wide">Followers</div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <Rss className="h-8 w-8 text-gray-900" />
        <div className="text-3xl font-bold text-gray-900">800K+</div>
        <div className="text-gray-600 uppercase text-sm tracking-wide">Readers</div>
      </div>
    </div>
  )
}

