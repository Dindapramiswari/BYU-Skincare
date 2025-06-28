'use client'
import Link from 'next/link'
import Stack from './Stack'
import { motion } from "framer-motion"

const images = [
  { id: 1, img: "/product1.png" },
  { id: 2, img: "/product2.png" },
  { id: 3, img: "/product3.png" },
]

export default function Navbar() {
  return (
    <section id="catalog">
      <div className="min-h-screen bg-white lg:bg-[url('/bg.png')] bg-cover bg-center">
        {/* Navbar */}
        <div className="w-full flex justify-center px-4 pt-2 pb-14">
          <div className="w-full max-w-[1280px] flex flex-wrap lg:flex-nowrap items-center gap-4">
            {/* Logo */}
            <div className="text-black font-normal text-[28px] sm:text-[36px] lg:text-[44px]" style={{ fontFamily: 'Inter' }}>
              BYU
            </div>

            {/* Menu + Contact */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 ml-auto">
              {/* Menu Wrapper */}
              <div className="w-full lg:w-auto flex justify-center">
                <div className="w-full lg:w-[520px] h-[64px] flex items-center justify-center bg-[#D9D9D9] rounded-[20px] shadow-[0px_20px_40px_rgba(0,0,0,0.2)] text-black text-[16px] lg:text-[18px] font-normal"
                  style={{ fontFamily: 'Inter' }}
                >
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 w-full text-center">
                    <Link href="/#catalog" className="hover:text-gray-500">Catalog</Link>
                    <Link href="/#aboutus" className="hover:text-gray-500">About Us</Link>
                    <Link href="/#recommend" className="hover:text-gray-500">Recommend</Link>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="w-full lg:w-auto flex justify-center">
                <div className="w-full sm:w-auto h-[56px] sm:h-[64px] px-6 flex items-center justify-center rounded-[20px] bg-[#D9D9D9] text-black text-[16px] lg:text-[18px] font-normal shadow-[0px_10px_20px_rgba(0,0,0,0.10),_0px_10px_6px_rgba(0,0,0,0.06)]"
                  style={{ fontFamily: 'Inter' }}
                >
                  <Link href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Judul */}
        <div className="flex justify-center lg:justify-end px-4">
          <motion.h1
            className="text-black max-w-[636px] w-full text-center lg:text-left"
            style={{ fontFamily: 'Inter' }}
          >
            <div className="text-[32px] md:text-[48px] lg:text-[64px] leading-tight">
              {["BEAUTY", "EFFICACY"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-block mr-4"
              >
                AND
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="font-bold text-[#504B38]"
              >
                SIMPLICITY
              </motion.span>
            </div>
          </motion.h1>
        </div>

        {/* Stack Section */}
        <div className="flex justify-center lg:justify-end mt-3 px-4 lg:mr-40">
          <Stack
            cardsData={images}
            cardDimensions={{ width: 300, height: 400 }}
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
          />
        </div>
      </div>
    </section>
  )
}
