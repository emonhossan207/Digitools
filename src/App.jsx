import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// All Section Components
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import CartSection from './components/CartSection';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import productsData from './data/products.json';

function App() {
  const [basket, setBasket] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // loading the data into state
    if (productsData) {
      setItems(productsData);
    }
  }, []);

  
  const addToCart = (product) => {
    setBasket((prev) => [...prev, { ...product, cartId: Date.now() }]);
    
    toast.success(`${product.name} added!`, {
      position: "bottom-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  
  const removeFromCart = (id) => {
    const updatedBasket = basket.filter(item => item.id !== id);
    setBasket(updatedBasket);
    
    toast.info("Item removed", {
      position: "bottom-right",
      autoClose: 1200,
    });
  };

  
  const handleCheckout = () => {
    setBasket([]);
    setActiveTab('products');
    toast.success("Order Successful!", {
      position: "top-center",
      autoClose: 2500,
    });
  };

  return (
    <>
      <Navbar 
        cartCount={basket.length} 
        onViewToggle={setActiveTab} 
        currentView={activeTab}
      />
      
      <Banner />
      <Stats />
      
      <div className="main-section py-20 px-5 lg:px-24 bg-white" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">
            Premium Digital Tools
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10 text-lg">
            Our handpicked collection of premium digital products to boost your workflow.
          </p>
          
          {/* Toggler */}
          <div className="inline-flex p-1 bg-slate-50 rounded-2xl border border-slate-200 mb-10">
            <button 
              className={`px-10 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'products' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-white'}`}
              onClick={() => setActiveTab('products')}
            >
              All Products
            </button>
            <button 
              className={`px-10 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'cart' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-white'}`}
              onClick={() => setActiveTab('cart')}
            >
              My Cart ({basket.length})
            </button>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto">
          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((singleItem) => (
                <ProductCard 
                  key={singleItem.id} 
                  product={singleItem} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          ) : (
            <CartSection 
              cartItems={basket} 
              onRemoveFromCart={removeFromCart} 
              onCheckout={handleCheckout}
              onViewToggle={setActiveTab}
            />
          )}
        </div>
      </div>

      <Steps />
      <Pricing />
      
      {/* Footer CTA Section */}
      <section className="bg-primary-gradient py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="relative z-10 px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-4xl mx-auto font-medium">
            Join thousands of professionals who are already using <span className="text-white font-bold">Digitools</span> to work smarter. <br className="hidden lg:block" /> Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="btn bg-white text-primary border-none hover:bg-slate-100 btn-lg rounded-full px-10 font-bold text-lg h-16 shadow-2xl">
              Explore Products
            </button>
            <button className="btn btn-outline text-white border-white hover:bg-white/10 btn-lg rounded-full px-10 font-bold text-lg h-16">
              View Pricing
            </button>
          </div>
          <p className="text-base text-white/60 font-medium">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
      
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
    </>
  )
}

export default App;