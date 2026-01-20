"use client";

import FadeIn from "@/components/FadeIn";

interface LocationSEOContentProps {
  location: string;
}

function LocationSEOContent({ location }: LocationSEOContentProps) {
  const images = [
    "/assets/portfolio/bedroom.png",
    "/assets/portfolio/bedroom.png",
    "/assets/portfolio/bedroom.png",
  ];

  return (
    <section className="bg-[#1D1D1D] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Images Gallery - Left Side */}
          <FadeIn direction="right" duration={0.6} delay={0.2}>
            <div className="space-y-4">
              {/* Featured Large Image */}
              <div className="rounded-[24px] overflow-hidden border border-[#4A4A4A] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
                <img
                  src={images[0]}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  alt={`Interior design project in ${location}`}
                  loading="lazy"
                  width={600}
                  height={500}
                />
              </div>
              
              {/* Smaller Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {images.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className="rounded-[24px] overflow-hidden border border-[#4A4A4A] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
                  >
                    <img
                      src={src}
                      className="w-full h-[240px] md:h-[280px] object-cover"
                      alt={`Interior design project ${i + 2} in ${location}`}
                      loading="lazy"
                      width={300}
                      height={280}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Text Content - Right Side */}
          <FadeIn direction="left" className="lg:pt-8" duration={0.6} delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-white font-noto-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, lineHeight: '1.5', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
                Interior Design Services in {location}
              </h2>

              <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                We provide premium interior design and renovation services across
                {` ${location}`}, delivering bespoke luxury solutions for residential
                and commercial properties. Our work spans apartments, villas,
                penthouses, offices, and retail spaces.
              </p>

              <p className="text-white/90 font-dm-sans" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.125rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
                Whether you&apos;re renovating a modern apartment or transforming a full
                villa, our team ensures seamless execution with superior finishing
                and on-time delivery.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default LocationSEOContent;

