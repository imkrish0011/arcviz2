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
    src="/assets/images/azure-logo.png"
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

export const DatadogIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/datadog.svg"
    alt="Datadog"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const PrometheusIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/prometheus.svg"
    alt="Prometheus"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const SlackIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <img
    src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/slack-icon.svg"
    alt="Slack"
    className={`inline-block object-contain ${className}`}
    loading="lazy"
  />
);

export const OpenTofuIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#FFDA1A" fillOpacity="0.2" stroke="#FFDA1A" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 7l-5 3.5v7L12 21l5-3.5v-7L12 7z" fill="#FFDA1A" fillOpacity="0.4" stroke="#FFDA1A" strokeWidth="1.2"/>
  </svg>
);

export const OpaIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="1.5"/>
    <path d="M9 12l2 2 4-4" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

