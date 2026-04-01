import { ShoppingCart, Menu, X } from 'lucide-react'; 
import { useState } from 'react';

const Navbar = ({ cartCount, onViewToggle, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuClick = (view) => {
    onViewToggle(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar bg-white px-4 lg:px-24 py-4 sticky top-0 z-50 border-b border-slate-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle text-slate-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-[90vw] left-0 text-slate-700 border border-slate-50 gap-2 animate-in fade-in zoom-in duration-200">
              <li><a href="#products" onClick={() => handleMobileMenuClick('products')} className="py-4 px-4 text-lg font-semibold active:bg-primary/10">Products</a></li>
              <li><a href="#features" onClick={() => setIsMenuOpen(false)} className="py-4 px-4 text-lg font-semibold">Features</a></li>
              <li><a href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-4 px-4 text-lg font-semibold">Pricing</a></li>
              <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="py-4 px-4 text-lg font-semibold">Testimonials</a></li>
              <li><a href="#faq" onClick={() => setIsMenuOpen(false)} className="py-4 px-4 text-lg font-semibold">FAQ</a></li>
              <div className="divider"></div>
              <li><button className="btn btn-primary w-full rounded-xl">Get Started</button></li>
            </ul>
          )}
        </div>
        
        <div 
          className="text-2xl lg:text-4xl font-black text-primary-gradient cursor-pointer tracking-tight" 
          onClick={() => onViewToggle('products')}
        >
          DigiTools
        </div>
      </div>

     
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-slate-600 gap-6">
          <li>
            <a 
              href="#products" 
              onClick={() => onViewToggle('products')} 
              className={`hover:text-primary transition-all duration-300 ${currentView === 'products' ? 'text-primary' : ''}`}
            >
              Products
            </a>
          </li>
          <li><a href="#features" className="hover:text-primary transition-all duration-300">Features</a></li>
          <li><a href="#pricing" className="hover:text-primary transition-all duration-300">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-primary transition-all duration-300">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-primary transition-all duration-300">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3 lg:gap-8">
        <div className="flex items-center gap-4 lg:gap-8">
       
          <div 
            className="indicator cursor-pointer text-slate-700 hover:text-primary transition-transform hover:scale-110 p-2" 
            onClick={() => onViewToggle('cart')}
          >
            {cartCount > 0 && (
              <span className="indicator-item badge bg-primary border-none text-white text-[10px] font-bold h-5 min-w-5">
                {cartCount}
              </span>
            )}
            <ShoppingCart size={22} strokeWidth={2.2} />
          </div>
          
          <button className="text-[#101727] font-extrabold hover:text-primary transition-colors hidden sm:inline-flex text-base">
            Login
          </button>
        </div>

      
        <button className="btn btn-primary hidden sm:flex h-12 px-8 rounded-full font-bold text-base shadow-lg shadow-primary/25 border-none transition-all hover:brightness-110 active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;