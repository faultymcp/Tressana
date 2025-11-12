import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Take the Quiz",
    description: "Answer simple questions about your hair type, goals, and lifestyle.",
    image: "https://images.unsplash.com/photo-1624939461078-66a124b3539c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2Mjg1Mjc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "02",
    title: "Get Recommendations",
    description: "Receive personalized hairstyle ideas, salon matches, and product suggestions.",
    image: "https://images.unsplash.com/photo-1760038548850-bfc356d88b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJlYXRtZW50JTIwc2Fsb258ZW58MXx8fHwxNzYyODc3MDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    number: "03",
    title: "Build Your Routine",
    description: "Create a custom hair care routine and track your progress over time.",
    image: "https://images.unsplash.com/photo-1583743599150-3b6048ecf084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBoYWlyc3R5bGV8ZW58MXx8fHwxNzYyODg5MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-white">How <span className="text-[#FF2F2F]">Tressana</span> Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Three simple steps to transform your hair care journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3] border-2 border-[#2D2D2D] group-hover:border-[#FF2F2F] transition-all duration-300">
                <ImageWithFallback
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 text-[#FF2F2F]/60 tracking-[0.2em] text-4xl font-light">
                  {step.number}
                </div>
              </div>
              <h3 className="mb-4 text-white">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}