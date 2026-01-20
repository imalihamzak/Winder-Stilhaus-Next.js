"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "@/components/location-based-page/testimonials/testi-card";
import {testimonials} from "@/components/location-based-page/testimonials/testi-data";
import FadeIn from "@/components/FadeIn";

interface TestimonialsSliderProps {
  location: string;
}

function TestimonialsSlider({location}: TestimonialsSliderProps) {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const startX = useRef<number>(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      setDirection(1);
      next();
    }
    if (endX - startX.current > 50) {
      setDirection(-1);
      prev();
    }
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#1D1D1D] text-white px-3 sm:px-4 md:px-6 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
        {/* Heading */}
        <FadeIn className="relative text-center mb-8 md:mb-10 px-2" duration={0.6}>
          <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] uppercase tracking-[0.32em] text-white font-dm-sans" style={{ fontSize: 'clamp(0.6875rem, 1vw, 0.875rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0.32em', fontFamily: 'DM Sans, sans-serif' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#F04E22' }} />
              Client confidence
            </span>
            <span className="text-xs text-white/60 font-dm-sans">
              Verified feedback • Premium finish • Reliable delivery
            </span>
          </div>

          <h2 className="mt-4 text-white font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
            What Our Clients Say in {location}
          </h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            Results-focused partnerships delivering high-end interiors on time,
            on budget, and on brand.
          </p>
        </FadeIn>

        {/* Slider */}
        <FadeIn className="relative" duration={0.6} delay={0.2}>
          <div
            className="relative max-w-3xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card shell */}
            <div className="relative rounded-[24px] border border-[#4A4A4A]/50 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <div className="relative overflow-hidden rounded-[24px] p-6 sm:p-8 md:p-10 min-h-[320px] flex items-center justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="w-full"
                  >
                    <TestimonialCard data={testimonials[index]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Side arrows (desktop) - positioned relative to card */}
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1D1D1D] items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-[#F5F5F5] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all duration-200 z-20"
                style={{ left: '-20px' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F04E22] text-white items-center justify-center shadow-[0_4px_12px_rgba(240,78,34,0.25)] hover:bg-[#E03D1A] hover:shadow-[0_6px_16px_rgba(240,78,34,0.35)] transition-all duration-200 z-20"
                style={{ right: '-20px', left: 'auto' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom controls */}
            <div className="mt-6 flex flex-col items-center gap-4">
              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`rounded-full cursor-pointer transition-all duration-300 ${
                      i === index 
                        ? "w-8 h-2 bg-[#214B57]" 
                        : "w-2 h-2 bg-[#4A4A4A]/30 hover:bg-[#4A4A4A]/50"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden justify-center gap-3">
                <button
                  onClick={prev}
                  className="min-w-[100px] min-h-[31px] px-5 py-2 rounded-md border border-[#4A4A4A]/30 bg-white text-[#1D1D1D] text-sm font-normal font-dm-sans shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#F5F5F5] transition-all duration-200"
                >
                  ← Prev
                </button>
                <button
                  onClick={next}
                  className="min-w-[100px] min-h-[31px] px-5 py-2 rounded-md bg-[#214B57] border-2 border-[#214B57] text-white text-sm font-normal font-dm-sans hover:bg-[#F04E22] hover:border-[#F04E22] transition-all duration-200 shadow-[0_2px_8px_rgba(33,75,87,0.2)]"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default TestimonialsSlider;

