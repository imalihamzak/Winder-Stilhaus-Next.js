"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

interface LocationHeroProps {
  location: string;
}

export default function LocationHero({ location }: LocationHeroProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#1D1D1D] text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <FadeIn className="text-center" duration={0.6} delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-6 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
              {location}
            </div>
            
            <h1 className="text-white font-noto-serif mt-6" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: '1.25', letterSpacing: '-0.02em', fontFamily: 'Noto Serif, serif' }}>
            Luxury Interior Design in {location}
          </h1>

            <p className="text-white/90 mt-6 max-w-2xl mx-auto font-dm-sans lead" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            Premium interior design and renovation services tailored specifically
            for homes and commercial spaces in {location}.
          </p>

            <button
            onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border-2 border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:shadow-[0_0_0_2px_rgba(240,78,34,0.2)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F04E22] transform translateZ-0 mt-6"
          >
            Get a Free Quote →
            </button>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE MODAL */}
      {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[28px] border border-black/10 bg-white/95 backdrop-blur shadow-[0_30px_90px_rgba(15,22,36,0.08)] p-6 sm:p-8 relative"
            >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#214B57] text-xl hover:opacity-70 transition"
            >
              ✕
            </button>

              <h3 className="font-semibold text-[#214B57] mb-6 text-center font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.17rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
              Get a Free Quote
            </h3>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
              />
              <input
                type="email"
                placeholder="Email"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
              />
              <input
                type="tel"
                placeholder="Phone"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
              />
              <input
                type="text"
                placeholder="Property Location"
                defaultValue={location}
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
              />
              <textarea
                rows={3}
                placeholder="Tell us about your project…"
                  className="w-full p-3 rounded-xl bg-white/80 border border-black/10 text-[#1D1D1D] placeholder:text-[#85929D] focus:outline-none focus:ring-1 focus:ring-[#F04E22]/40 focus:border-[#F04E22]/60 font-dm-sans"
              />

                <button
                type="submit"
                  className="min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border-2 border-[#214B57] text-[#214B57] font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:shadow-[0_0_0_2px_rgba(240,78,34,0.2)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F04E22] mt-4 shadow-[0_18px_45px_rgba(26,29,41,0.08)] transform translateZ-0"
              >
                Submit Quote Request
                </button>
            </form>
            </div>
          </div>
      )}
    </>
  );
}

