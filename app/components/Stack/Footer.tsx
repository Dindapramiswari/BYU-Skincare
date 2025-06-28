'use client'

export default function Footer() {
  return (
    <section id="footer">
    <footer className="bg-[#B6B09F] text-white px-6 py-10">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold tracking-wider">BYU</h3>
          <p className="text-sm max-w-[300px]">
            Redefining beauty with simplicity and efficacy. Crafted with care for beauty lovers like you.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Explore</h4>
          <ul className="text-sm flex flex-col gap-1">
            <li><a href="/catalog" className="hover:underline">Catalog</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/recommend" className="hover:underline">Recommend</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold">Connect</h4>
          <ul className="text-sm flex flex-col gap-1">
            <li><a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" className="hover:underline">TikTok</a></li>
            <li><a href="mailto:hello@byu.com" className="hover:underline">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/70">
        &copy; {new Date().getFullYear()} BYU. All rights reserved.
      </div>
    </footer>
    </section>
  )
}
