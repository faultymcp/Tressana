import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "figma:asset/fe601b647c5609e7790d7d7901f13ab958f81870.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img
            src={heroImage}
            alt="Beautiful Hair Art"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]/50" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-[#FF2F2F]" />
            <span className="text-white tracking-[0.3em] text-sm font-light">TRESSANA</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide">Features</a>
            <a href="#quiz" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide">Quiz</a>
            <a href="#routines" className="text-white/80 hover:text-white transition-colors text-sm tracking-wide">Routines</a>
            <Button className="bg-[#FF2F2F] text-white hover:bg-[#E62828] border-0">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-left md:text-left">
        <h1 className="text-white mb-8 leading-tight max-w-3xl">
          Discover Your Perfect
          <br />
          <span className="text-[#F9DCC5]">Hair Journey</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl">
          Take our personalized quiz to find the ideal hairstyles, salons, and products tailored to your unique hair type and lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Button size="lg" className="bg-[#FF2F2F] text-white hover:bg-[#E62828] px-10 py-6 tracking-wide">
            Take the Quiz
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-[#F9DCC5] text-[#F9DCC5] hover:bg-[#F9DCC5] hover:text-[#1A1A1A] px-10 py-6 tracking-wide">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#FF2F2F] to-transparent" />
      </div>
    </div>
  );
}