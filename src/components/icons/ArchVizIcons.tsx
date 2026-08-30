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
      fill="#38BDF8" 
      fillOpacity="0.25"
      stroke="#38BDF8" 
      strokeWidth="1.25" 
    />
    <circle cx="12" cy="12.5" r="1.5" fill="#F1F2EE" />
  </svg>
);

export const ArchVizBrand: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 font-sans font-medium tracking-tight text-[#f1f2ee] ${className}`}>
    <ArchVizLogo size={19} />
    <span className="text-[14px] font-mono tracking-tight font-medium text-[#f1f2ee]">ARCHVIZ</span>
    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#858a85]">OS</span>
  </div>
);

// Official Online Cloud Provider & Infrastructure Brand Logos
export const AwsIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws.svg"
    alt="Amazon Web Services"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const AzureIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/azure-icon.svg"
    alt="Microsoft Azure"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const GcpIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/google-cloud.svg"
    alt="Google Cloud Platform"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const KubernetesIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/kubernetes.svg"
    alt="Kubernetes"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const TerraformIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/terraform-icon.svg"
    alt="HashiCorp Terraform"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const DockerIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/docker-icon.svg"
    alt="Docker"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/github-icon.svg"
    alt="GitHub"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const PostgresIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/postgresql.svg"
    alt="PostgreSQL"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const RedisIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/redis.svg"
    alt="Redis"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const CloudWatchIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 13.5L7 9.5L11 13.5L16 6.5L21 11.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" strokeOpacity="0.3"/>
  </svg>
);

export const PolicyShieldIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
