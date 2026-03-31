import React from 'react';

const Banner = () => {
  return (
    <section className="hero min-h-[85vh] bg-white px-6 lg:px-24 py-16" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
        
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group">
           
            <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://i.ibb.co.com/8nSSmKjz/banner.png" 
              className="relative w-full max-w-xl rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]" 
              alt="Digital Workflow illustration"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

       
        <div className="w-full lg:w-1/2">
          
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#E1E7FF] text-primary px-5 py-2 rounded-full text-sm font-bold mb-8">
            <img 
              src="https://i.ibb.co.com/KYdkrqr/Group-5.png" 
              alt="icon" 
              className="w-4 h-4 object-contain" 
              referrerPolicy="no-referrer" 
            />
            <span>New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-[#101727] tracking-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-5 items-center">
           
            <button className="btn btn-primary h-[58px] px-10 rounded-full font-bold text-lg shadow-xl shadow-primary/20">
              Explore Products
            </button>
            
            <button className="btn border-2 border-[#9514FA] bg-transparent text-[#9514FA] hover:bg-[#9514FA]/5 hover:border-[#4F39F6] hover:text-[#4F39F6] h-[58px] px-10 rounded-full font-bold text-lg flex items-center gap-3">
            <img src="https://i.ibb.co.com/9k5JpV11/Play.png" alt="Play" className="w-5 h-5" /> Watch Demo</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;