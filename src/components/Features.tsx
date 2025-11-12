import { Scissors, MapPin, ShoppingBag, Calendar } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Personalized Hairstyles",
    description: "Discover hairstyles that complement your face shape, hair type, and personal style.",
  },
  {
    icon: MapPin,
    title: "Find Top Salons",
    description: "Locate the best hair salons near you with verified reviews and ratings.",
  },
  {
    icon: ShoppingBag,
    title: "Product Recommendations",
    description: "Get curated product suggestions based on your specific hair needs and goals.",
  },
  {
    icon: Calendar,
    title: "Routine Management",
    description: "Create and track your personalized hair care routine for optimal results.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-36 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hair Type Showcase */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6 text-[#1A1A1A]">Know Your <span className="text-[#FF2F2F]">Hair Type</span></h2>
            <p className="text-[#6B6B6B] text-lg mb-8">
              Understanding your hair pattern is the first step to finding the perfect care routine. From protective styles to natural textures, we celebrate all hair types.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Protective", "Coily", "Curly", "Wavy", "Straight", "Bald/Shaved"].map((type) => (
                <div key={type} className="flex items-center gap-3 p-4 bg-[#FDF3EB] rounded-lg border border-[#F9DCC5] hover:border-[#FF2F2F] transition-all cursor-pointer group">
                  <div className="w-2 h-2 rounded-full bg-[#FF2F2F] group-hover:scale-150 transition-transform" />
                  <span className="text-sm tracking-wide text-[#1A1A1A]">{type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#FDF3EB] rounded-2xl p-8 border-2 border-[#F9DCC5]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
                alt="Diverse Hair Types Guide"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-20">
          <h2 className="mb-6 text-[#1A1A1A]">Everything You Need for Hair Care</h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto text-lg">
            Tressana combines expert knowledge with personalized insights to help you achieve your best hair ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#FDF3EB] p-10 rounded-lg hover:shadow-xl transition-all duration-300 border border-[#F9DCC5]/30 group hover:border-[#FF2F2F]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF2F2F] to-[#E62828] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-4 text-[#1A1A1A]">{feature.title}</h3>
                <p className="text-[#6B6B6B]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}