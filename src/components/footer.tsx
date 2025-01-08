import Link from "next/link";
import { Youtube, Instagram, Facebook } from "lucide-react";

export default function SiteFooter() {
  return (
    <div className="bg-[#1C1E26] py-16 mt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Call-to-Action Section */}
        <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
          Invite me to your restaurant.
          <br />
          Reach millions of food lovers.
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Collaborate with me to showcase your culinary expertise and elevate 
          your brand’s presence. Let’s create something amazing together!
        </p>
        <a
          href="#contact"
          className="bg-[#FFD700] text-[#1C1E26] font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#E6C200] transition-colors"
        >
          LET&#39;S TALK
        </a>
      </div>

      {/* Footer Main Section */}
      <footer className="w-full py-10 px-4 border-t border-gray-600">
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-4xl font-serif text-[#FFD700] hover:opacity-90 transition-opacity"
            >
              XYRON
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.youtube.com/channel/UCM_kddl-hlfMXGumB1VtCqQ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Youtube className="h-6 w-6 text-[#FFD700]" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/saudali195"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-6 w-6 text-[#FFD700]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/saud5036"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Facebook className="h-6 w-6 text-[#FFD700]" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2025 Food Blogger & Influencer. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Powered by Saud Muhammad Ali.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
