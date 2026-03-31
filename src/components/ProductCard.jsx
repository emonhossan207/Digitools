import React from 'react';
import { Check } from 'lucide-react';
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative">
      <div className={`absolute top-6 right-6 badge ${product.tagType === 'Best Seller' ? 'bg-orange-100 text-orange-600 border-orange-100' : product.tagType === 'Popular' ? 'bg-purple-100 text-purple-600 border-purple-100' : 'bg-green-100 text-green-600 border-green-100'} p-3 font-bold text-xs`}>
        {product.tag}
      </div>
      
      <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors overflow-hidden">
        <img src={product.icon} alt={product.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
      </div>

      <h3 className="text-2xl font-bold mb-3 text-slate-900">{product.name}</h3>
      <p className="text-slate-500 mb-6 line-clamp-clear text-sm leading-relaxed">{product.description}</p>
      
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-3xl font-bold text-slate-900">${product.price}</span>
        <span className="text-slate-400 font-medium">/{product.period === 'Monthly' ? 'Mo' : 'One-Time'}</span>
      </div>

      <div className="space-y-4 mb-10">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={12} className="text-green-600" />
            </div>
            {feature}
          </div>
        ))}
      </div>

      <button 
        className="btn btn-primary w-full rounded-2xl font-bold h-14 text-lg shadow-lg shadow-primary/20"
        onClick={() => onAddToCart(product)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
