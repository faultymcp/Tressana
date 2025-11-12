import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Plus, Clock, Droplets, Wind, Sun, Moon } from "lucide-react";

const sampleRoutines = [
  {
    time: "Morning",
    icon: Sun,
    steps: [
      { name: "Gentle Cleanse", duration: "5 min", type: "Wash" },
      { name: "Hydrating Serum", duration: "2 min", type: "Treatment" },
      { name: "Light Styling Cream", duration: "3 min", type: "Style" },
    ],
  },
  {
    time: "Evening",
    icon: Moon,
    steps: [
      { name: "Deep Conditioning", duration: "10 min", type: "Treatment" },
      { name: "Scalp Massage", duration: "5 min", type: "Care" },
      { name: "Overnight Serum", duration: "2 min", type: "Treatment" },
    ],
  },
];

export function RoutineManager() {
  const [activeRoutine, setActiveRoutine] = useState(0);

  return (
    <section id="routines" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-[#FDF3EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6 text-[#1A1A1A]">Manage Your <span className="text-[#FF2F2F]">Hair Care Routine</span></h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-lg">
            Build and track personalized routines that fit seamlessly into your lifestyle. Never miss a step with our smart reminders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Routine Tabs */}
          <div className="flex gap-5 mb-10 justify-center">
            {sampleRoutines.map((routine, index) => {
              const Icon = routine.icon;
              return (
                <Button
                  key={index}
                  variant={activeRoutine === index ? "default" : "outline"}
                  className={`gap-3 px-8 py-6 tracking-wide ${activeRoutine === index ? "bg-[#FF2F2F] text-white hover:bg-[#E62828]" : "border-2 border-[#F9DCC5] text-[#1A1A1A] hover:bg-[#F9DCC5]"}`}
                  onClick={() => setActiveRoutine(index)}
                >
                  <Icon className="w-5 h-5" />
                  {routine.time}
                </Button>
              );
            })}
          </div>

          {/* Routine Steps */}
          <Card className="p-10 border-2 border-[#F9DCC5]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[#1A1A1A]">{sampleRoutines[activeRoutine].time} Routine</h3>
              <Button variant="outline" className="gap-2 border-2 border-[#FF2F2F] text-[#FF2F2F] hover:bg-[#FF2F2F] hover:text-white">
                <Plus className="w-4 h-4" />
                Add Step
              </Button>
            </div>

            <div className="space-y-4">
              {sampleRoutines[activeRoutine].steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-white rounded-xl hover:bg-[#FDF3EB] transition-colors border border-[#F9DCC5]/30"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2F2F] to-[#E62828] text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-2 text-[#1A1A1A]">{step.name}</h4>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-[#6B6B6B] text-sm">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                        <Badge variant="secondary" className="bg-[#F9DCC5] text-[#1A1A1A] hover:bg-[#E8CBB4]">{step.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-[#6B6B6B] hover:text-[#FF2F2F]">
                    Edit
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-[#FDF3EB] rounded-xl border-2 border-[#F9DCC5]">
              <div className="flex items-start gap-4">
                <Droplets className="w-6 h-6 text-[#FF2F2F] mt-1" />
                <div>
                  <h4 className="mb-3 text-[#1A1A1A]">Hydration Reminder</h4>
                  <p className="text-[#6B6B6B] text-sm">
                    Don't forget to drink water! Hydration is key for healthy hair growth.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-10 text-center">
            <Button size="lg" className="bg-[#FF2F2F] text-white hover:bg-[#E62828] px-12 py-6 tracking-wide">
              Create Custom Routine
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}