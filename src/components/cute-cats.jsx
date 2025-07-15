import React, { useState, useEffect } from "react";

function CuteCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-2">Cute Cats</h1>
      <p className="mb-4 text-lg">Enjoy a collection of adorable cat pictures!</p>
      {cats.length > 0 && (
        <img
          className="mx-auto rounded shadow-lg max-w-sm"
          src={cats[0].url}
          alt="Cute Cat"
        />
      )}
    </div>
  );
}

export default CuteCats;
