'use client'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section id='aboutus'>
    <div className="min-h-screen flex flex-col items-center px-4 py-16 bg-white text-black">
      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[32px] md:text-[40px] lg:text-[48px] font-normal text-center max-w-[766px]"
      >
        Beauty For a Better <br className="hidden md:block" /> Future
      </motion.h1>

      {/* Deskripsi */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 text-[18px] md:text-[20px] lg:text-[24px] font-normal text-center max-w-[766px]"
      >
        At BY, we are committed to redefining beauty with a perfect blend of simplicity and effectiveness.
        Our mission is to empower individuals by offering products that enhance natural beauty effortlessly.
      </motion.p>

      {/* 3 Box Feature Section */}
      <div className="mt-16 max-w-[990px] w-full flex flex-wrap justify-center gap-6">
        {/* Box 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[278px] h-[296px] bg-[#EAE4D5] flex flex-col items-center justify-center text-center px-4"
        >
          <img src="/natural.svg" alt="Natural" className="w-[112px] h-[112px] mb-4" />
          <h3 className="text-[24px] font-normal mb-2">Natural Ingredients</h3>
          <p className="text-[14px] font-extralight leading-normal">
            We prioritize safety and sustainability by using only the finest natural ingredients.
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[278px] h-[296px] bg-[#EAE4D5] flex flex-col items-center justify-center text-center px-4"
        >
          <img src="/results.svg" alt="Proven Results" className="w-[108px] h-[108px] mb-4" />
          <h3 className="text-[24px] font-normal mb-2">Proven Results</h3>
          <p className="text-[14px] font-extralight leading-normal">
            Our products are backed by research to ensure they deliver real, visible results.
          </p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[278px] h-[296px] bg-[#EAE4D5] flex flex-col items-center justify-center text-center px-4"
        >
          <img src="/design.svg" alt="Minimalist Design" className="w-[101px] h-[101px] mb-4" />
          <h3 className="text-[24px] font-normal mb-2">Minimalist Design</h3>
          <p className="text-[14px] font-extralight leading-normal">
            Beauty meets functionality with our sleek, user-friendly designs.
          </p>
        </motion.div>
      </div>
    </div>
    </section>
  )
}
