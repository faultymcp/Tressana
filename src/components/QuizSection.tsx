import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

const quizSteps = [
  { 
    title: "Hair Type", 
    description: "Select your natural hair pattern",
    showPatternSelector: true
  },
  { 
    title: "Hair Goals", 
    description: "What are you looking to achieve?",
    options: ["Growth", "Volume", "Shine", "Repair", "Moisture", "Strength"]
  },
  { 
    title: "Lifestyle", 
    description: "Tell us about your daily routine",
    options: ["Active", "Low Maintenance", "High Maintenance", "Professional"]
  },
  { 
    title: "Preferences", 
    description: "Your styling and budget preferences",
    options: ["Natural Products", "Salon Regular", "DIY Care", "Budget Friendly"]
  },
];

export function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: string}>({});

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOptions({...selectedOptions, [currentStep]: option});
  };

  if (!isStarted) {
    return (
      <section id="quiz" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-[#FDF3EB] p-8 border-2 border-[#F9DCC5]">
                <img
                  src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800"
                  alt="Diverse Hair Styles"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Quiz Info */}
            <div className="order-1 lg:order-2">
              <h2 className="mb-8 text-[#1A1A1A]">Your Hair Journey <span className="text-[#FF2F2F]">Starts Here</span></h2>
              <p className="text-[#6B6B6B] mb-12 text-lg">
                Our personalized quiz takes just 2 minutes and provides you with tailored recommendations that match your unique hair profile.
              </p>

              <div className="space-y-5 mb-12">
                {quizSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-6 rounded-xl transition-all duration-300 bg-white border-2 border-[#F9DCC5]/30 hover:border-[#FF2F2F]/50"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F9DCC5] text-[#1A1A1A]">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-[#1A1A1A]">{step.title}</h4>
                      <p className="text-[#6B6B6B] text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-[#FF2F2F] text-white hover:bg-[#E62828] px-12 py-6 tracking-wide"
                onClick={() => setIsStarted(true)}
              >
                Start Your Quiz Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#6B6B6B] text-sm tracking-wide">Step {currentStep + 1} of {quizSteps.length}</span>
            <span className="text-[#6B6B6B] text-sm tracking-wide">{Math.round(((currentStep + 1) / quizSteps.length) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-[#FDF3EB] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#FF2F2F] to-[#E62828] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Content */}
        <div className="bg-[#FDF3EB] rounded-3xl p-8 md:p-12 border-2 border-[#F9DCC5]">
          <div className="mb-10">
            <h2 className="mb-4 text-[#1A1A1A]">{quizSteps[currentStep].title}</h2>
            <p className="text-[#6B6B6B] text-lg">{quizSteps[currentStep].description}</p>
          </div>

          {/* Hair Pattern Selector for Step 1 */}
          {quizSteps[currentStep].showPatternSelector && (
            <div className="mb-10">
              <div className="bg-white rounded-2xl p-6 border-2 border-[#F9DCC5]">
                <img
                  src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800"
                  alt="Diverse Hair Types"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {["Protective", "Coily", "Curly", "Wavy", "Straight", "Bald/Shaved"].map((pattern) => (
                  <button
                    key={pattern}
                    onClick={() => handleOptionSelect(pattern)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedOptions[currentStep] === pattern
                        ? "bg-[#FF2F2F] border-[#FF2F2F] text-white"
                        : "bg-white border-[#F9DCC5] text-[#1A1A1A] hover:border-[#FF2F2F]"
                    }`}
                  >
                    <span className="block text-sm tracking-wide">{pattern}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Options for other steps */}
          {quizSteps[currentStep].options && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {quizSteps[currentStep].options!.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    selectedOptions[currentStep] === option
                      ? "bg-[#FF2F2F] border-[#FF2F2F] text-white"
                      : "bg-white border-[#F9DCC5] text-[#1A1A1A] hover:border-[#FF2F2F]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="tracking-wide">{option}</span>
                    {selectedOptions[currentStep] === option && (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="border-2 border-[#F9DCC5] text-[#1A1A1A] hover:bg-[#F9DCC5] disabled:opacity-50 px-8 py-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={currentStep === quizSteps.length - 1 ? () => alert('Quiz Complete! Results coming soon...') : handleNext}
              disabled={!selectedOptions[currentStep]}
              className="bg-[#FF2F2F] text-white hover:bg-[#E62828] disabled:opacity-50 px-8 py-6"
            >
              {currentStep === quizSteps.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}