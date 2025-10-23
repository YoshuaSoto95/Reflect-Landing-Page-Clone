import React, { useState, useEffect, useRef } from 'react';
import { SparkleIcon, PlayIcon, SearchIcon, PencilIcon, FolderIcon, CheckIcon, MapIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const Calendar = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const dates = [27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const isFaded = (day: number) => day > 25;
    
    return (
        <div className="bg-[#19142A] p-3 rounded-lg w-[240px]">
            <div className="flex justify-between items-center mb-3">
                <span className="text-white text-xs font-semibold">April 2023</span>
                <div className="flex space-x-2">
                    <ChevronLeftIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
                    <ChevronRightIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-7 gap-y-1 text-center">
                {days.map(day => <div key={day} className="text-xs font-bold text-gray-500">{day}</div>)}
                {dates.map((date, i) => (
                    <div key={i} className={`text-xs p-1 rounded ${date === 2 ? 'bg-purple-600 text-white' : 'text-gray-400'} ${isFaded(date) && i > 5 ? 'text-gray-600' : ''}`}>
                        {date}
                    </div>
                ))}
            </div>
        </div>
    );
};


const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className="relative pt-16 pb-32 text-center overflow-hidden">
      
      {/* Animated Gradient Blobs */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          <div 
              className="absolute top-[-10rem] left-[-10rem] w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"
              style={{ animationDuration: '18s' }}
          ></div>
          <div 
              className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-float"
              style={{ animationDuration: '22s', animationDelay: '-5s' }}
          ></div>
           <div 
              className="absolute top-[10rem] right-[10rem] w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float"
              style={{ animationDuration: '25s', animationDelay: '-10s' }}
          ></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className={`flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm cursor-pointer hover:bg-white/20 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SparkleIcon className="h-4 w-4 text-purple-400" />
          <span className="text-gray-300">New: Our AI integration just landed</span>
        </div>

        {/* Main Heading */}
        <h1 className={`mt-6 text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Think better with Reflect
        </h1>
        <p className={`mt-6 text-lg text-gray-400 max-w-xl transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Never miss a note, idea or connection.
        </p>

        {/* CTA Buttons */}
        <div className={`mt-10 flex justify-center items-center gap-4 transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="#" className="relative inline-flex items-center justify-center text-base font-medium text-white p-px rounded-lg group transition-transform duration-300 ease-in-out hover:scale-105">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-[length:200%_auto] transition-all duration-500 ease-out group-hover:bg-[position:100%_0]"></span>
              <span className="relative block px-6 py-3 bg-[#171133] rounded-lg group-hover:bg-opacity-90 transition-all duration-200">
                  Start free trial
              </span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors duration-200 text-base font-medium">
            <PlayIcon className="h-5 w-5" />
            <span>Watch demo</span>
          </a>
        </div>


        {/* Mock UI */}
        <div className={`mt-20 w-full max-w-5xl h-[500px] relative transition-all duration-700 ease-out delay-[600ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute inset-0 bg-[#100C20]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/20 flex p-2 gap-2 text-left">
                {/* Sidebar */}
                <div className="w-48 bg-[#19142A]/50 rounded-lg p-3 space-y-2 flex-shrink-0">
                    <div className="flex items-center bg-white/5 rounded-md px-2 py-1.5">
                        <SearchIcon className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-400 text-xs">Search anything...</span>
                    </div>
                    <div className="pt-2">
                        <div className="flex items-center space-x-2 px-2 py-1.5 rounded-md bg-white/5">
                            <PencilIcon className="h-4 w-4 text-gray-300" />
                            <span className="text-white text-xs font-semibold">Daily notes</span>
                        </div>
                        <div className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-white/5">
                            <FolderIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400 text-xs">All notes</span>
                        </div>
                         <div className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-white/5">
                            <CheckIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400 text-xs">Tasks</span>
                        </div>
                         <div className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-white/5">
                            <MapIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400 text-xs">Map</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-[#19142A]/50 rounded-lg p-6 text-gray-400 text-sm overflow-y-auto">
                    <p className="text-white font-semibold mb-4">| Sun, April 2nd, 2023</p>
                    <ul className="space-y-3 list-disc list-inside text-xs leading-relaxed">
                        <li>Today I started using Reflect.</li>
                        <li>What is Reflect?
                            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
                                <li>A note-taking tool designed to mirror the way we think.</li>
                                <li>Our brains remember things through associations. Reflect mimics this by backlinking notes to each other (read more on backlinking <span className="text-purple-400 underline">here</span>).</li>
                                <li>Over time, this gives you a second brain you can recall easily. Reflect becomes an extension of your long-term memory.</li>
                            </ul>
                        </li>
                        <li>What should I create within Reflect?</li>
                    </ul>
                </div>

                {/* Calendar */}
                <div className="hidden md:block">
                  <Calendar />
                </div>
            </div>
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button className={`w-20 h-20 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 pointer-events-auto group transition-all duration-700 ease-out delay-[800ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <PlayIcon className="h-8 w-8 text-white transform transition-transform duration-200 group-hover:scale-110" />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;