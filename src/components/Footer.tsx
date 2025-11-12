import { Sparkles, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-[#FF2F2F]" />
              <span className="tracking-[0.3em] text-sm font-light">TRESSANA</span>
            </div>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Your personalized hair care companion for discovering the perfect styles, salons, and routines.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-6 text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Take the Quiz</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Find Salons</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Products</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Routines</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#FF2F2F] transition-colors font-light">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-sm font-light tracking-wide">
            © 2025 Tressana. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/60 hover:text-[#FF2F2F] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#FF2F2F] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#FF2F2F] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}