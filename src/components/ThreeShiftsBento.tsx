import React from 'react';

export const ThreeShiftsBento: React.FC = () => {
  const shifts = [
    {
      title: "Track your output",
      description: "Nouva monitors your daily output — tasks, words, and momentum — so nothing slips through the cracks.",
      image: "/assets/images/olzMK96vIDGJXNxO1xN2hJfnI6E.png",
      alt: "Dashboard card showing content output metrics: 24 drafts and 8,400 words"
    },
    {
      title: "Stay ahead of goals",
      description: "Set targets, track progress, and let Nouva keep your team on pace — automatically, every week.",
      image: "/assets/images/F7hv7r6RqW38qVtDt6WNuz3P9CQ.png",
      alt: "Dashboard card showing writing goal progress bar at 73%"
    },
    {
      title: "See where time goes",
      description: "Nouva breaks down every task by type — so you always know what's getting done and what needs attention.",
      image: "/assets/images/KhD21NAtOVUkyt8jr0NasjstDeg.png",
      alt: "Dashboard card showing weekly format breakdown: Blog post, Email copy, Social caption"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#080c12]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            What Nouva does
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Three shifts that change <span className="text-white/50">how your team works.</span>
          </h2>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {shifts.map((shift, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl md:rounded-3xl bg-[#0e131d]/70 border border-white/[0.08] hover:border-white/20 p-6 md:p-8 transition-all duration-300 group overflow-hidden shadow-lg"
            >
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#8cff2e] transition-colors">
                  {shift.title}
                </h3>
                <p className="text-sm sm:text-base text-[#99a0b0] leading-relaxed">
                  {shift.description}
                </p>
              </div>

              {/* Graphic Display */}
              <div className="relative rounded-xl overflow-hidden bg-[#080c12]/80 border border-white/[0.05] p-2 mt-auto">
                <img
                  src={shift.image}
                  alt={shift.alt}
                  className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
