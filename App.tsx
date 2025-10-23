import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0717] text-gray-300 overflow-x-hidden">
      <Header />
      <Hero />
    </div>
  );
};

export default App;