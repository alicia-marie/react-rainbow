import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';
import React, { useState } from 'react';

const DEFAULT_COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet'
];

function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS)

  const onAddColor = (newColor) => setColors([...colors, newColor])

  const colorMap = colors.map(
    (color, index) => <ColorBlock key={index} color={color}/>
  );

  return (
    <div className="App">
      {colorMap}
      <ColorForm onAddColor={onAddColor}/>
    </div>
  );
}

export default App;
