import React from 'react';

export type BadgeStatus = 'healthy' | 'warning' | 'incident' | 'info' | 'syncing';

interface SystemBadgeProps {
  status: BadgeStatus;
  label?: string;
  className?: string;
  showDot?: boolean;
}

export const SystemBadge: React.FC<SystemBadgeProps> = ({
  status,
  label,
  className = "",
  showDot = true
}) => {
  const configs = {
    healthy: {
      bg: "bg-[#10b981]/10",
      border: "border-[#10b981]/30",
      text: "text-[#10b981]",
      dot: "bg-[#10b981]",
      defaultLabel: "Healthy"
    },
    warning: {
      bg: "bg-[#f59e0b]/10",
      border: "border-[#f59e0b]/30",
      text: "text-[#f59e0b]",
      dot: "bg-[#f59e0b]",
      defaultLabel: "Warning"
    },
    incident: {
      bg: "bg-[#ef4444]/10",
      border: "border-[#ef4444]/30",
      text: "text-[#ef4444]",
      dot: "bg-[#ef4444]",
      defaultLabel: "Incident"
    },
    info: {
      bg: "bg-[#0ea5e9]/10",
      border: "border-[#0ea5e9]/30",
      text: "text-[#0ea5e9]",
      dot: "bg-[#0ea5e9]",
      defaultLabel: "Live Sync"
    },
    syncing: {
      bg: "bg-[#0ea5e9]/10",
      border: "border-[#0ea5e9]/30",
      text: "text-[#0ea5e9]",
      dot: "bg-[#0ea5e9] animate-ping",
      defaultLabel: "Syncing"
    }
  };

  const config = configs[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono tracking-tight border ${config.bg} ${config.border} ${config.text} ${className}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />}
      <span>{label || config.defaultLabel}</span>
    </span>
  );
};
