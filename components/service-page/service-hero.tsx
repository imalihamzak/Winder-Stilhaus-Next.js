"use client";

import FadeIn from "@/components/FadeIn";
import MonogramUnderlay from "@/components/MonogramUnderlay";

interface Service {
  title?: string;
  tagline?: string;
}

interface ServiceHeroProps {
  service?: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  if (!service) {
    return null;
  }

  return (
    <section 
      className="relative mx-auto text-white pt-28 sm:pt-32 md:pt-36 pb-7 sm:pb-10 md:pb-28 overflow-hidden -mt-20 sm:-mt-24 md:-mt-24 md:min-h-[100svh] md:flex md:items-center"
  style={{
    background: 'linear-gradient(135deg, #214B57 0%, #183941 80%, #142F36 100%)'
  }}
    >
      {/* Ring pattern underlay: large scale, cropped off-edge, visible opacity, subtle parallax */}
      <MonogramUnderlay opacity={0.5} />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10 w-full">
        <FadeIn className="text-center" duration={0.6} delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#CED3D7] text-sm font-medium text-[#1D1D1D] mb-6 font-dm-sans" style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1rem)', fontWeight: 400, lineHeight: '1.2', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#F04E22' }}></span>
            {service?.title || "Service"}
          </div>
          
          <h1 className="text-white font-noto-serif mt-6" style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
            fontWeight: 700, 
            lineHeight: '1.25', 
            letterSpacing: '-0.02em', 
            fontFamily: 'Noto Serif, serif', 
            color: '#FFFFFF',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility',
            WebkitTextSizeAdjust: '100%'
          }}>
          {service?.title || "Service"}
        </h1>
          
          <p className="text-white/90 max-w-2xl mx-auto mt-6 font-dm-sans lead" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
            {service?.tagline || "Premium interior design and renovation services."}
          </p>
          
          <a
          href="/contact-us"
            className="inline-flex items-center justify-center gap-2 min-w-[122px] min-h-[31px] px-8 py-2 rounded-md bg-white border-2 border-[#214B57] text-[#214B57] text-sm font-normal font-dm-sans hover:bg-[#214B57] hover:text-white hover:border-[#F04E22] hover:shadow-[0_0_0_2px_rgba(240,78,34,0.2)] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#F04E22] focus:ring-offset-2 active:bg-[#214B57] active:text-white active:border-[#F04E22] transform translateZ-0 mt-6"
        >
          Get Free Consultation →
        </a>
        </FadeIn>
      </div>
    </section>
  );
}

