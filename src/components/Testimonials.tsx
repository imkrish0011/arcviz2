import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Nouva cut our team's workload in half. Tasks that used to take hours now take minutes.",
      name: "Sarah Mitchell",
      role: "Platform Engineer",
      image: "/assets/images/GTixWkG3xzgCHSiGEGlw2ImbJNk.png"
    },
    {
      quote: "I was skeptical about AI tools. Nouva changed my mind in the first ten minutes.",
      name: "James Okafor",
      role: "CMO at BrightLayer",
      image: "/assets/images/62rLb7wkZinJCVN6AjgjzxxGU.png"
    },
    {
      quote: "It feels like having an extra team member on call — without the overhead.",
      name: "Emma Larsson",
      role: "Head of Marketing at Volta",
      image: "/assets/images/1PWXtzoNrtZs6WoKsh73praY5k.png"
    },
    {
      quote: "Before Nouva, coordinating our workflow took longer than the actual work. Not anymore.",
      name: "Daniel Park",
      role: "Founder at Stackly",
      image: "/assets/images/TkBs2WgWXtsX5vbQ8a56tURZ0w.png"
    },
    {
      quote: "Our team produces twice the output with the same headcount. That's the only metric that matters.",
      name: "Priya Nair",
      role: "Freelance Consultant",
      image: "/assets/images/Pcc6eNI9kI6w61JRhGQQrK0ew4.png"
    },
    {
      quote: "I stopped dreading Monday mornings. Nouva handles the heavy lifting before I even sit down.",
      name: "Tom Eriksson",
      role: "Growth Lead at Novu",
      image: "/assets/images/AR5O3jk64IZQ6ybHBtJ5xK1n4E.png"
    },
    {
      quote: "Every output sounds exactly like us — consistent, on-brand, and ready to go.",
      name: "Aisha Kamara",
      role: "Brand Strategist at Fuse",
      image: "/assets/images/1fpphqCQ7qk4J87HhsxN2tXbs.png"
    },
    {
      quote: "Nouva doesn't just automate — it thinks about structure, tone, and audience before I even ask.",
      name: "Lucas Webb",
      role: "Digital Marketing Manager",
      image: "/assets/images/FG6UEr7nt81hSAUv0qeYL0bAfeo.png"
    },
    {
      quote: "Every format, every tone, every audience — It adapts without us explaining ourselves.",
      name: "Nina Hoffman",
      role: "Co-founder at Loopkit",
      image: "/assets/images/8tLNmX0goyWycvA9KVcWrWVe4.png"
    },
    {
      quote: "We replaced three separate tools with Nouva. Our workflow is cleaner and improved.",
      name: "Marcus Chen",
      role: "Social Media Lead at Pylon",
      image: "/assets/images/iP1zyPg7UBj8Sw9nQtlrAD4Ubw.png"
    },
    {
      quote: "Optimization used to be an afterthought. Now every deliverable we ship is structured from the start.",
      name: "Rachel Torres",
      role: "Content Strategist at Merge",
      image: "/assets/images/zFPMqU0KyETAR5SeBQMhyAYA.png"
    },
    {
      quote: "We onboarded Nouva on a Friday. By Monday, the entire team was already using it daily.",
      name: "Oliver Grant",
      role: "Head of Product at Briefcase",
      image: "/assets/images/G5Hh3PCX6gSc2eYxGXMloz5xzA.png"
    }
  ];

  const col1 = testimonials.slice(0, 4);
  const col2 = testimonials.slice(4, 8);
  const col3 = testimonials.slice(8, 12);

  const renderCard = (item: typeof testimonials[0], index: number) => (
    <div
      key={index}
      className="p-6 rounded-2xl bg-[#0e131d]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between mb-6 shadow-md"
    >
      <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-normal">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover border border-white/10"
        />
        <div>
          <h4 className="text-sm font-semibold text-white">{item.name}</h4>
          <p className="text-xs text-[#99a0b0]">{item.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-[#080c12]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            Real results
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Teams who <br className="hidden sm:inline" />
            <span className="text-white/50">never looked back.</span>
          </h2>
        </div>

        {/* 3 Columns Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            {col1.map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="flex flex-col">
            {col2.map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            {col3.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
};
