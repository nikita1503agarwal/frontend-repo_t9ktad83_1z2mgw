import React from 'react';
import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6JiKcUSZx8u5S6iX/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          All your campus knowledge in one place
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Share and discover notes, previous year questions, and research papers created by students and professors.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#upload" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition">
            <Rocket className="w-4 h-4" /> Get started
          </a>
          <a href="#explore" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-md border hover:bg-gray-50 transition">
            <Star className="w-4 h-4 text-yellow-500" /> Explore
          </a>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>
    </section>
  );
};

export default Hero;
