import React from 'react';
import { BookOpen, Upload, Search } from 'lucide-react';

const Header = ({ onSearch, onUploadClick }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-indigo-600">
          <BookOpen className="w-6 h-6" />
          <span className="font-semibold text-lg">CampusHub</span>
        </div>
        <div className="flex-1" />
        <div className="hidden md:flex items-center gap-3 w-full max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              onChange={(e) => onSearch?.(e.target.value)}
              placeholder="Search notes, PYQs, papers..."
              className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button
          onClick={onUploadClick}
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          <Upload className="w-4 h-4" />
          <span className="hidden sm:inline">Upload</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
