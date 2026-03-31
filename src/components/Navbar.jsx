import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = ({ cartCount, onViewToggle, currentView }) => {
  return (
    <nav className="navbar bg-white px-6 lg:px-24 py-5 sticky top-0 z-50 border-b border-slate-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-0 mr-4">
            <Menu size={24} className="text-slate-700" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-xl bg-white rounded-2xl w-64 text-slate-700 border border-slate-50 gap-2">
            <li><a href="#products" onClick={() => onViewToggle('products')} className="py-3 px-4 active:bg-primary/10">Products</a></li>
            <li><a href="#features" className="py-3 px-4">Features</a></li>
            <li><a href="#pricing" className="py-3 px-4">Pricing</a></li>
            <li><a href="#testimonials" className="py-3 px-4">Testimonials</a></li>
            <li><a href="#faq" className="py-3 px-4">FAQ</a></li>
          </ul>
        </div>
        
        <div 
          className="text-3xl lg:text-4xl font-black text-primary-gradient cursor-pointer tracking-tight" 
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
      <div className="navbar-end gap-5 lg:gap-8">
        <div className="flex items-center gap-6 lg:gap-8">
          
          <div 
            className="indicator cursor-pointer text-slate-700 hover:text-primary transition-transform hover:scale-110" 
            onClick={() => onViewToggle('cart')}
          >
            {cartCount > 0 && (
              <span className="indicator-item badge bg-primary-gradient border-none text-white text-[10px] font-bold h-5 min-w-5">
                {cartCount}
              </span>
            )}
            <ShoppingCart size={22} strokeWidth={2.2} />
          </div>
          
  
          <button className="text-[#101727] font-extrabold hover:text-primary transition-colors hidden md:inline-flex text-base tracking-tight">
            Login
          </button>
        </div>

        <button className="btn btn-primary h-12 lg:h-14 px-8 lg:px-10 rounded-full font-bold text-base shadow-xl shadow-primary/25 border-none transition-all hover:brightness-110 active:scale-95 active:translate-y-0.5">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;