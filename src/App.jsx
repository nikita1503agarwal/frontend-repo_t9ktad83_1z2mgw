import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResourceGrid from './components/ResourceGrid';
import UploadModal from './components/UploadModal';

const initialSeed = [
  { title: 'Data Structures Cheat Sheet', category: 'notes', course: 'CS201', author: 'A. Sharma', url: 'https://example.com/notes', createdAt: new Date().toISOString() },
  { title: 'Operating Systems PYQ 2022', category: 'pyq', course: 'CS205', author: 'Dept. Archive', url: 'https://example.com/pyq', createdAt: new Date(Date.now()-86400000).toISOString() },
  { title: 'NLP Paper: Transformers', category: 'paper', course: 'CS409', author: 'J. Vaswani', url: 'https://arxiv.org/abs/1706.03762', createdAt: new Date(Date.now()-172800000).toISOString() },
];

function App() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(initialSeed);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((i) => [i.title, i.category, i.course, i.author].some(v => (v || '').toLowerCase().includes(q)));
  }, [query, items]);

  const handleSubmit = (data) => {
    setItems((prev) => [data, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Header onSearch={setQuery} onUploadClick={() => setOpen(true)} />
      <Hero />

      <main id="explore" className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Latest resources</h2>
            <p className="text-gray-600">Notes, previous year questions, and research papers shared by your campus.</p>
          </div>
          <a href="#upload" onClick={() => setOpen(true)} className="text-indigo-700 font-medium hover:underline">Upload a resource</a>
        </div>
        <ResourceGrid items={filtered} />
      </main>

      <section className="bg-white border-t" id="upload">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-xl font-semibold">Contribute to the library</h3>
          <p className="text-gray-600 mt-1">Share your class notes, solved PYQs, or research. Link from Drive or any public URL.</p>
          <div className="mt-4">
            <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Open upload form</button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        Built for students and professors to collaborate.
      </footer>

      <UploadModal open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
