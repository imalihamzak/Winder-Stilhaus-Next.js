"use client";

interface StarsProps {
  rating?: number;
}

function Stars({ rating = 5 }: StarsProps) {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#F04E22]" : "text-[#E0E0E0]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface TestimonialData {
  name: string;
  location: string;
  property: string;
  rating: number;
  review: string;
  img?: string;
}

interface TestimonialCardProps {
  data: TestimonialData;
}

function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className="text-center w-full max-w-xl mx-auto">
      {/* Avatar */}
      <div className="mb-4">
        {data.img ? (
          <img
            src={data.img}
            alt={data.name}
            className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
          />
        ) : (
          <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white text-lg font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.1)] border-2 border-white" style={{ backgroundColor: '#214B57' }}>
            {data.name[0]}
          </div>
        )}
      </div>

      {/* Name */}
      <h4 className="text-[#1D1D1D] font-semibold mb-1.5 font-noto-serif" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', fontWeight: 600, lineHeight: '1.4', letterSpacing: '0px', fontFamily: 'Noto Serif, serif' }}>
        {data.name}
      </h4>

      {/* Location & Property */}
      <p className="text-[#85929D] text-xs mb-4 font-dm-sans">
        {data.property} · {data.location}
      </p>

      {/* Stars */}
      <div className="flex justify-center mb-4">
        <Stars rating={data.rating} />
      </div>

      {/* Review */}
      <p className="text-[#4A4A4A] leading-relaxed font-dm-sans" style={{ fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)', fontWeight: 400, lineHeight: '1.625', letterSpacing: '0px', fontFamily: 'DM Sans, sans-serif' }}>
        &quot;{data.review}&quot;
      </p>
    </div>
  );
}

export default TestimonialCard;

