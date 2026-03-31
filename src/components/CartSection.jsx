import React from 'react';
import { ShoppingBag } from 'lucide-react';

const CartSection = ({ cartItems, onRemoveFromCart, onCheckout, onViewToggle }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 text-slate-300 shadow-sm">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-extrabold mb-3 text-[#101727]">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-sm font-medium leading-relaxed">
          Looks like you haven't added any premium digital tools yet. Explore our collection to get started.
        </p>
        <button 
          className="btn btn-primary h-14 px-10 rounded-full font-bold text-base shadow-xl shadow-primary/20 transition-all hover:scale-105"
          onClick={() => onViewToggle('products')}
        >
          Explore Products
        </button>
      </div>
    );
  }

  // Active Cart State
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 lg:p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-[#101727]">Your Cart</h2>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
              {cartItems.length} Items
            </span>
          </div>

          {/* Cart Items List */}
          <div className="space-y-3 mb-10">
            {cartItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`} 
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl transition-all hover:bg-slate-100/50 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-slate-50">
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-6 h-6 object-contain" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-base font-bold text-[#101727]">{item.name}</h3>
                    <p className="text-primary font-bold text-sm">${item.price}</p>
                  </div>
                </div>
                
                <button 
                  className="text-red-400 font-bold text-xs uppercase tracking-wider hover:text-red-600 transition-colors px-2 py-1"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          
          <div className="pt-6 border-t border-slate-100">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-500 font-medium">Total Amount:</span>
              <span className="text-3xl font-black text-[#101727] tracking-tight">
                ${totalPrice}
              </span>
            </div>
            
            <button 
              className="btn btn-primary w-full h-[60px] rounded-full text-lg font-bold shadow-2xl shadow-primary/30 transition-all hover:brightness-110 active:scale-[0.98]"
              onClick={onCheckout}
            >
              Proceed To Checkout
            </button>
            
            <p className="text-center text-slate-400 text-xs mt-6">
              Secure Checkout • Instant Digital Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;