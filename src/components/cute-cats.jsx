import React, { useState, useEffect } from "react";
import CatForm from './CatForm';

function CuteCats() {
  const [cats, setCats] = useState([]);
  const [editingCat, setEditingCat] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const API_URL = "http://localhost:3001/cats";

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setCats(data))
      .catch(error => console.error("Error fetching cats:", error));
  };

  const handleAddCat = (newCat) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCat)
    })
    .then(response => response.json())
    .then(data => {
      setCats([...cats, data]);
      setShowAddForm(false);
    })
    .catch(error => console.error("Error adding cat:", error));
  };

  const handleUpdateCat = (updatedCat) => {
    fetch(`${API_URL}/${editingCat.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editingCat, ...updatedCat })
    })
    .then(() => {
      setCats(cats.map(cat => cat.id === editingCat.id ? { ...cat, ...updatedCat } : cat));
      setEditingCat(null);
    })
    .catch(error => console.error("Error updating cat:", error));
  };

  const handleDeleteCat = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCats(cats.filter(cat => cat.id !== id));
      if (editingCat?.id === id) setEditingCat(null);
    })
    .catch(error => console.error("Error deleting cat:", error));
  };

  return (
    <div className="text-center p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cute Cats Gallery</h1>
      <p className="mb-6 text-lg">Manage your collection of adorable cat pictures!</p>

      {showAddForm ? (
        <CatForm 
          onSubmit={handleAddCat} 
          onCancel={() => setShowAddForm(false)} 
        />
      ) : (
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded mb-6 hover:bg-green-600"
        >
          Add New Cat
        </button>
      )}

      {editingCat ? (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Edit Cat</h2>
          <CatForm 
            cat={editingCat} 
            onSubmit={handleUpdateCat} 
            onCancel={() => setEditingCat(null)} 
          />
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map(cat => (
          <div key={cat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={cat.url}
              alt={cat.title}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-gray-600 mb-4">{cat.description}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => setEditingCat(cat)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCat(cat.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CuteCats;