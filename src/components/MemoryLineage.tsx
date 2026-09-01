import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Database, Activity, AlertTriangle, BookOpen, Shield } from 'lucide-react';

export const MemoryLineage: React.FC = () => {
  const layers = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "State Memory",
      description: "Point-in-time snapshots of every resource, configuration, and relationship."
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Event Memory",
      description: "Every deployment, scaling event, and configuration change recorded."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Incident Memory",
      description: "Full incident timelines with root cause, resolution, and impact analysis."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Procedural Memory",
      description: "Learned remediation runbooks from past successful resolutions."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Policy Memory",
      description: "OPA guardrails and approval patterns that evolve with your organization."
    }
  ];

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-[#080a08]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-wider mb-4">Persistent Memory</p>
            <h1 className="text-[#f1f2ee] text-4xl md:text-5xl font-medium mb-6">Infrastructure that remembers.</h1>
            <p className="text-[#858a85] text-lg max-w-2xl">
              ArchViz maintains a persistent memory of every state change, incident, and resolution, allowing AI agents to learn from your organization's unique operational history.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {layers.map((layer, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="flex items-start md:items-center py-6 border-b border-[#505551]/20 last:border-0 group">
                <div className="text-[#505551] group-hover:text-[#38bdf8] transition-colors duration-300 mt-1 md:mt-0 mr-6">
                  {layer.icon}
                </div>
                <div>
                  <h3 className="text-[#f1f2ee] text-lg font-medium mb-1">{layer.title}</h3>
                  <p className="text-[#858a85]">{layer.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
