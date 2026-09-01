import React from 'react';
import { Cloud, Network, Bot } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const WhatIsArchViz: React.FC = () => {
  const layers = [
    {
      icon: <Cloud className="w-5 h-5 text-[#858a85]" />,
      title: "Existing Cloud",
      desc: "Connect your AWS, Azure, or GCP accounts with read-only access. Zero agents to install, no changes to your current setup."
    },
    {
      icon: <Network className="w-5 h-5 text-[#38bdf8]" />,
      title: "Living Graph",
      desc: "A unified system model of your entire architecture, continuously synced with live state and relationships."
    },
    {
      icon: <Bot className="w-5 h-5 text-[#858a85]" />,
      title: "AI Agents",
      desc: "Specialized domain agents that operate on the graph to surface insights, detect anomalies, and recommend optimizations."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#080a08]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#f1f2ee] mb-6">
              What is ArcViz?
            </h2>
            <p className="text-base text-[#858a85] leading-relaxed">
              ArcViz bridges the gap between scattered cloud resources and intelligent operations through a three-layered approach.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl flex flex-col">
            {layers.map((layer, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-6 py-8 border-b border-white/[0.08] last:border-b-0"
              >
                <div className="mt-1 bg-[#0d100d] p-3 rounded-lg border border-white/[0.08]">
                  {layer.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#f1f2ee] mb-2">{layer.title}</h3>
                  <p className="text-[#858a85] leading-relaxed text-sm">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
