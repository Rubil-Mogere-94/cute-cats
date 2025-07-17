import React, { useState } from 'react';

function CatForm({ cat, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    url: cat?.url || '',
    title: cat?.title || '',
    description: cat?.description || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Image URL</label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div className="mb-3">
        <label className="block text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        ></textarea>
      </div>
      
      <div className="flex space-x-2">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {cat ? 'Update' : 'Add'} Cat
        </button>
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default CatForm;