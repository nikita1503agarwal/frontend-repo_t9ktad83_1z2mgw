import React from 'react';
import { FileText, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const categoryColor = {
  notes: 'bg-indigo-50 text-indigo-700',
  pyq: 'bg-amber-50 text-amber-700',
  paper: 'bg-emerald-50 text-emerald-700',
};

const ResourceCard = ({ item }) => {
  const badge = categoryColor[item.category] || 'bg-gray-100 text-gray-700';
  return (
    <a href={item.url || '#'} target="_blank" rel="noreferrer" className="block group">
      <div className="border rounded-lg p-4 bg-white hover:shadow-md transition">
        <div className="flex items-center justify-between">
          <div className={`px-2 py-1 rounded text-xs font-medium ${badge}`}>{item.category?.toUpperCase()}</div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        </div>
        <h3 className="mt-3 font-semibold line-clamp-2 group-hover:text-indigo-700">{item.title}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> {item.course || 'General'}</div>
          <div className="flex items-center gap-2"><FileText className="w-4 h-4" /> {item.author || 'Anonymous'}</div>
          <div className="flex items-center gap-2 col-span-2 text-xs"><Calendar className="w-4 h-4" /> {new Date(item.createdAt).toLocaleString()}</div>
        </div>
      </div>
    </a>
  );
};

const Empty = () => (
  <div className="text-center py-16 border rounded-xl bg-white">
    <p className="text-gray-600">No resources yet. Be the first to upload!</p>
  </div>
);

const ResourceGrid = ({ items }) => {
  if (!items?.length) return <Empty />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <ResourceCard key={item.createdAt + item.title} item={item} />
      ))}
    </div>
  );
};

export default ResourceGrid;
