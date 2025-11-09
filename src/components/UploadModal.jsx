import React, { useState } from 'react';
import { X, FileText, Link as LinkIcon } from 'lucide-react';

const categories = [
  { id: 'notes', label: 'Notes' },
  { id: 'pyq', label: 'Previous Year Question' },
  { id: 'paper', label: 'Research Paper' },
];

const UploadModal = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('notes');
  const [course, setCourse] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ title, category, course, author, url, createdAt: new Date().toISOString() });
    onClose?.();
    setTitle('');
    setCourse('');
    setAuthor('');
    setUrl('');
    setCategory('notes');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold text-lg">Upload Resource</h3>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-gray-600">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Course / Subject</label>
              <input value={course} onChange={(e) => setCourse(e.target.value)} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Author</label>
              <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Professor / Student" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Link</label>
              <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://drive.google.com/..." required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
            <button type="submit" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              <FileText className="w-4 h-4" />
              Save Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
