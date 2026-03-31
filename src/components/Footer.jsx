import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <div className="text-3xl font-extrabold mb-6 text-white tracking-tight">
              DigiTools
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8 text-base font-medium">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          
          {/* Product Links */}
          <div className="lg:col-span-2">
            <h6 className="text-lg font-bold mb-8 text-white uppercase tracking-wider text-sm">Product</h6> 
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><a className="hover:text-primary transition-colors cursor-pointer">Features</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Templates</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h6 className="text-lg font-bold mb-8 text-white uppercase tracking-wider text-sm">Company</h6> 
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><a className="hover:text-primary transition-colors cursor-pointer">About</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Blog</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Careers</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-2">
            <h6 className="text-lg font-bold mb-8 text-white uppercase tracking-wider text-sm">Resources</h6> 
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><a className="hover:text-primary transition-colors cursor-pointer">Documentation</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Community</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Social Links (Image Matching image_1.png) */}
          <div className="lg:col-span-2">
            <h6 className="text-lg font-bold mb-8 text-white uppercase tracking-wider text-sm">Social Links</h6> 
            <div className="flex gap-4">
              
              {/* Instagram */}
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer">
                <i className="fa-brands fa-instagram text-[#0F172A] text-xl"></i>
              </a>

              {/* Facebook */}
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer">
                <i className="fa-brands fa-square-facebook text-[#0F172A] text-xl"></i>
              </a>

              {/* X (Twitter) */}
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer">
                <i className="fa-brands fa-x-twitter text-[#0F172A] text-lg"></i>
              </a>

            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500 font-medium">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            <a className="hover:text-white transition-colors cursor-pointer">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;