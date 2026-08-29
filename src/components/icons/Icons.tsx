import React from 'react';

// Nouva 4-Spark Mark Logo
export const NouvaSparkLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 12 12" fill="currentColor" className={className}>
    <path d="M 7.369 5.717 C 6.456 5.717 5.691 6.464 5.691 7.403 L 5.691 11.093 L 5.352 11.093 L 5.352 7.403 C 5.352 6.464 4.587 5.717 3.653 5.717 L 0 5.717 L 0 5.376 L 3.653 5.376 C 4.587 5.376 5.352 4.629 5.352 3.69 L 5.352 0 L 5.691 0 L 5.691 3.69 C 5.691 4.629 6.456 5.376 7.369 5.376 L 11.043 5.376 L 11.043 5.717 Z" />
  </svg>
);

export const NouvaLogo: React.FC<{ className?: string; textClassName?: string }> = ({ 
  className = "h-6", 
  textClassName = "text-lg font-bold tracking-tight text-white font-sans" 
}) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,45,70,0.2)]">
      <NouvaSparkLogo className="w-4 h-4 text-[#ff2d46]" />
    </div>
    <span className={textClassName}>Nouva</span>
  </div>
);

// Partner Brand Logos
export const RampLogo: React.FC<{ className?: string }> = ({ className = "h-5 text-white/50 hover:text-white transition-colors" }) => (
  <svg viewBox="0 0 113 23" fill="currentColor" className={className}>
    <path d="M 3.138 2.749 C 4.67 1.247 6.75 0.369 8.858 0.26 C 9.579 0.26 10.303 0.264 11.024 0.258 C 10.987 1.053 11.024 1.85 11.002 2.645 C 10.9 4.421 10.261 6.158 9.185 7.552 C 7.785 9.427 5.644 10.685 3.138 11.455 L 3.138 2.749 Z" />
    <path d="M 16.924 15.769 L 12.562 15.769 L 12.562 0.232 L 16.924 0.232 L 16.924 15.769 Z" />
  </svg>
);

export const LoomLogo: React.FC<{ className?: string }> = ({ className = "h-5 text-white/50 hover:text-white transition-colors" }) => (
  <svg viewBox="0 0 146 17" fill="currentColor" className={className}>
    <path d="M 21.631 8.149 C 21.631 11.42 18.976 14.073 15.7 14.073 L 7.327 14.073 C 4.051 14.073 1.396 11.42 1.396 8.149 C 1.396 4.877 4.051 2.225 7.327 2.225 L 15.7 2.225 C 18.976 2.225 21.631 4.877 21.631 8.149 Z" />
  </svg>
);

export const LinearLogo: React.FC<{ className?: string }> = ({ className = "h-5 text-white/50 hover:text-white transition-colors" }) => (
  <svg viewBox="0 0 83 20" fill="currentColor" className={className}>
    <path d="M 42.193 3.111 C 40.706 3.98 39.309 5.012 38.001 6.21 C 36.693 7.377 35.415 8.575 34.165 9.803 C 33.452 10.491 32.753 11.195 32.069 11.913 L 30.018 14.069 C 29.647 14.503 29.261 14.922 28.858 15.3 Z" />
  </svg>
);

export const RaycastLogo: React.FC<{ className?: string }> = ({ className = "h-5 text-white/50 hover:text-white transition-colors" }) => (
  <svg viewBox="0 0 95 25" fill="currentColor" className={className}>
    <path d="M 29.417 16.91 L 29.417 7.719 L 32.058 7.719 L 34.512 12.99 C 34.574 13.124 34.655 13.311 34.753 13.552 C 34.85 13.784 34.948 14.025 35.046 14.274 C 35.152 14.524 35.251 14.756 35.339 14.97 L 35.41 Z" />
  </svg>
);

export const RetoolLogo: React.FC<{ className?: string }> = ({ className = "h-5 text-white/50 hover:text-white transition-colors" }) => (
  <svg viewBox="0 0 124 16" fill="currentColor" className={className}>
    <path d="M 123.845 15.769 L 119.483 15.769 L 119.483 0.232 L 123.845 0.232 L 123.845 15.769 Z M 113.658 15.769 L 109.296 15.769 L 109.296 0.232 L 113.658 0.232 L 113.658 15.769 Z M 121.734 9.925 L 110.433 Z" />
  </svg>
);

// Feature Icons
export const BrandConsistencyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 5.166 19.221 C 3.801 17.238 2.997 14.824 2.997 12.219 C 2.997 8.844 5.684 6.109 8.997 6.109 C 12.311 6.109 14.997 8.844 14.997 12.219 C 14.997 14.824 14.193 17.238 12.828 19.221" />
    <path d="M 8.997 9.109 C 7.34 9.109 5.997 10.452 5.997 12.109 C 5.997 13.766 7.34 15.109 8.997 15.109 C 10.654 15.109 11.997 13.766 11.997 12.109 C 11.997 10.452 10.654 9.109 8.997 9.109 Z" />
    <path d="M 18.5 4.5 L 18.5 19.5" />
    <path d="M 21.5 8.5 L 21.5 15.5" />
  </svg>
);

export const MultiFormatIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 20 9 L 10 14 L 0 9 M 20 13 L 10 18 L 0 13 M 0 5 L 10 0 L 20 5 L 10 10 Z" />
  </svg>
);

export const BuiltInOptimizationIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 15 15 L 20 20 M 17.5 8.75 C 17.5 13.582 13.582 17.5 8.75 17.5 C 3.918 17.5 0 13.582 0 8.75 C 0 3.918 3.918 0 8.75 0 C 13.582 0 17.5 3.918 17.5 8.75 Z" />
  </svg>
);

export const TeamCollaborationIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 0 18 L 0 14 C 0 12.895 0.895 12 2 12 L 12 12 C 13.105 12 14 12.895 14 14 L 14 18" />
    <path d="M 7 8 C 8.657 8 10 6.657 10 5 C 10 3.343 8.657 2 7 2 C 5.343 2 4 3.343 4 5 C 4 6.657 5.343 8 7 8 Z" />
    <path d="M 16 11 C 17.105 11 18 11.895 18 13 L 18 17" />
    <path d="M 14 3 C 14.86 3.22 15.623 3.721 16.168 4.422 C 16.713 5.123 17.009 5.986 17.009 6.875 C 17.009 7.764 16.713 8.627 16.168 9.328 C 15.623 10.029 14.86 10.53 14 10.75" />
  </svg>
);

export const AnalyticsInsightsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 0 0 L 0 18 L 18 18 M 4 13 L 9.25 7.75 L 12.75 11.25 L 18 6" />
  </svg>
);

export const UnlimitedOutputIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 0.111 11.12 L 8.451 0 L 7.451 8 L 15.277 8 C 15.743 8 15.998 8.544 15.699 8.902 L 6.451 20 L 7.451 12 L 0.551 12 C 0.098 12 -0.2 11.492 0.111 11.12 Z" />
  </svg>
);

// Comparison & UI Icons
export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 2 12 L 8 18 L 22 4" />
  </svg>
);

export const CrossIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-white/30" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 5 5 L 19 19 M 5 19 L 19 5" />
  </svg>
);

export const PlusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-white" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 12 4 L 12 20 M 4 12 L 20 12" />
  </svg>
);

export const MinusIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-white" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 4 12 L 20 12" />
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M 5 12 L 19 12 M 12 5 L 19 12 L 12 19" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-[#ff2d46]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M 12 0 L 14.5 9.5 L 24 12 L 14.5 14.5 L 12 24 L 9.5 14.5 L 0 12 L 9.5 9.5 Z" />
  </svg>
);
