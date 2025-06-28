'use client'
import { motion } from 'framer-motion'

export default function Recommend() {
  return (
    <section id='recommend' className="bg-white px-4 py-20 flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row gap-12 max-w-[1280px] w-full items-center lg:items-start">
        
        {/* KIRI: Teks + Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 w-full lg:w-[55%]"
        >
          {/* Teks */}
          <div className="text-center lg:text-left">
            <h2 className="text-[48px] md:text-[64px] lg:text-[80px] leading-none font-normal tracking-[0.15em] text-black">
              BEST <br /> SELLER
            </h2>
            <p className="mt-4 md:mt-6 text-[18px] md:text-[20px] lg:text-[24px] font-light text-black">
              Our community’s favorite picks crafted<br className="hidden md:block" />
              for beauty lovers like you.
            </p>
          </div>

          {/* Produk Box */}
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center">
            {[{
              title: 'GlowBoost Serum',
              image: '/serum.png',
              position: '-40px -20px',
              size: '120% 110%',
              fontWeight: 'font-semibold',
              delay: 0
            }, {
              title: 'HydraCare Moisturizer',
              image: '/moisturizer.png',
              position: '-10px -100px',
              size: '115% 150%',
              fontWeight: 'font-bold',
              delay: 0.2
            }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="w-[260px] h-[360px] bg-[#B6B09F] rounded-br-[40px] flex flex-col items-center justify-between p-4 shadow-md"
              >
                <div
                  className="w-[210px] h-[240px] bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundPosition: item.position,
                    backgroundSize: item.size,
                  }}
                />
                <p className={`text-[20px] ${item.fontWeight} text-white mt-2`}>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KANAN: Gambar Besar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] flex items-stretch"
        >
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/your-main-image.png"
              alt="Main Recommend Image"
              className="object-cover w-full h-full max-h-[976px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
