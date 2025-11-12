import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { QuizSection } from "./components/QuizSection";
import { HowItWorks } from "./components/HowItWorks";
import { RoutineManager } from "./components/RoutineManager";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <QuizSection />
      <HowItWorks />
      <RoutineManager />
      <Footer />
    </div>
  );
}
