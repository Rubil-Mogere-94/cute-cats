import React from 'react';
import CuteCats from './components/cute-cats.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-yellow-900 mb-8">
          Cat Gallery Manager
        </h1>
        <CuteCats />
      </div>
    </div>
  );
}

export default App;