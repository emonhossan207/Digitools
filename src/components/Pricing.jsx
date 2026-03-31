import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      highlight: false
    },
    {
      name: "Pro",
      price: "29",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      highlight: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="py-24 px-4 lg:px-20 bg-white" id="pricing">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">Simple, Transparent Pricing</h2>
        <p className="text-base text-slate-500 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`card rounded-[2rem] p-10 border transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${plan.highlight ? 'bg-primary-gradient text-white border-none shadow-2xl shadow-primary/30 scale-105 z-10' : 'bg-white border-slate-100 text-slate-900'} relative flex flex-col`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white px-6 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                {plan.badge}
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
              <p className={`font-medium ${plan.highlight ? 'text-white/80' : 'text-slate-500'}`}>{plan.description}</p>
            </div>
            
            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-6xl font-bold">${plan.price}</span>
              <span className={`text-xl font-medium ${plan.highlight ? 'text-white/70' : 'text-slate-400'}`}>/Month</span>
            </div>
 
            <div className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-4 font-semibold">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-white/20' : 'bg-green-100'}`}>
                    <Check size={14} className={plan.highlight ? 'text-white' : 'text-green-600'} />
                  </div>
                  <span className={plan.highlight ? 'text-white/90' : 'text-slate-600'}>{feature}</span>
                </div>
              ))}
            </div>

            <button className={`btn btn-lg ont-bold h-16 text-lg transition-all duration-300 ${plan.highlight ? 'bg-white text-primary border-none hover:bg-slate-100 shadow-xl' : 'btn-primary shadow-lg shadow-primary/20'}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
