import React from 'react';

export const ArchVizLogo: React.FC<{ className?: string; size?: number }> = ({ 
  className = "text-white", 
  size = 20 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2L21 7.5V16.5L12 22L3 16.5V7.5L12 2Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round" 
    />
    <path 
      d="M12 7.5L17 10.5V14.5L12 17.5L7 14.5V10.5L12 7.5Z" 
      fill="#0EA5E9" 
      fillOpacity="0.25"
      stroke="#0EA5E9" 
      strokeWidth="1.25" 
    />
    <circle cx="12" cy="12.5" r="1.5" fill="#EDEDED" />
  </svg>
);

export const ArchVizBrand: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 font-sans font-semibold tracking-tight text-white ${className}`}>
    <ArchVizLogo size={20} />
    <span className="text-[15px] font-mono tracking-tight font-medium text-[#ededed]">ARCHVIZ</span>
    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-surface-subtle border border-surface-border text-text-muted">OS</span>
  </div>
);

// Cloud & Tool Logos
export const AwsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.74 15.65c-2.3 1.69-5.63 2.59-8.5 2.59-4.04 0-7.68-1.53-10.43-4.09-.22-.2-.03-.49.24-.33 2.97 1.73 6.64 2.76 10.42 2.76 2.55 0 5.43-.65 7.97-2.02.39-.21.68.16.3.09zm1.18-1.32c-.29-.37-1.92-.18-2.65-.09-.22.03-.26-.14-.06-.28 1.3-1 3.44-.71 3.7-.38.26.34-.07 2.51-1.3 3.6-.19.17-.37.08-.29-.14.28-.71.89-2.34.6-2.71zM14.7 9.87c0 1.25-.09 2.29-.83 3.32-.61.85-1.47 1.34-2.42 1.34-1.32 0-2.07-1-2.07-2.47 0-2.88 2.52-3.4 5.32-3.4v1.21zm2.34 5.34c-.16.14-.38.16-.54.06-.73-.55-.86-.8-1.25-1.38-.94.95-2.04 1.5-3.37 1.5-2.03 0-3.52-1.32-3.52-3.5 0-1.74 1-3.03 2.5-3.72 1.29-.6 3.09-.72 4.46-.87v-.48c0-.75-.16-1.57-.75-2.11-.53-.48-1.28-.68-1.99-.68-1.38 0-2.6.59-2.92 2.05-.04.22-.2.38-.41.37l-2.04-.21c-.2-.04-.38-.2-.33-.43.51-2.48 2.59-3.44 5.56-3.44 1.5 0 3.12.39 4.23 1.5 1.13 1.13 1.21 2.65 1.21 4.22v3.74c0 1.13.48 1.63.93 2.24.16.22.14.47-.07.65l-1.99 1.49z"/>
  </svg>
);

export const TerraformIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.67 8.35v7.3l6.33-3.65V4.7l-6.33 3.65zm-7.34 4.22v7.3l6.34-3.65v-7.3L7.33 12.57zM1 4.7v7.3l6.33-3.65V1.05L1 4.7zm6.33 7.87L1 8.92v7.3l6.33 3.65v-7.3z"/>
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export const CloudWatchIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 13.5L7 9.5L11 13.5L16 6.5L21 11.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" strokeOpacity="0.3"/>
  </svg>
);

export const TopologyIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M12 8V13M12 13L5 16M12 13L19 16" />
  </svg>
);

export const PolicyShieldIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
