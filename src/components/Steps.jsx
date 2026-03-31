import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: "https://i.ibb.co.com/h0NLsSm/user.png"
    },
    {
      number: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: "https://i.ibb.co.com/C3HJs8CD/package.png"
    },
    {
      number: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "https://i.ibb.co.com/Q30pXvSD/rocket.png"
    }
  ];

  return (
    <div className="py-25 px-4 lg:px-20 bg-slate-50" id="features">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">Get Started In 3 Steps</h2>
        <p className="text-base text-slate-500 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="card bg-white rounded-[2rem] p-10 relative border-none shadow-sm hover:shadow-xl transition-all duration-500 group">
            
            {/* Numbering Color Changed to Gradient */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-[#8F43FF] to-[#BD34FE] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg shadow-purple-200">
              {step.number}
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;