import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [img, setImg] = useState("");

  async function onFetch() {
    await fetch('https://dog.ceo/api/breeds/image/random')
      .then((resp) => resp.json())
      .then((data) => setImg(data.message));
  };

  useEffect(() => {
    onFetch();
}, []);

  return (
    <div className="App">
      <img className='dogImg' src={img} alt='Dog'/>
      <button onClick={onFetch}>Fetch more pups</button>
    </div>
  );
}

export default App;
