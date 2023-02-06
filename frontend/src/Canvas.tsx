import React, { useState } from 'react';

const App = () => {
  const [points, setPoints] = useState<Array<{ x: number, y: number }>>([]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const canvas = event.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setPoints([...points, { x, y }]);
  };

  return (
    <div>
      <canvas onClick={handleClick} />
      <p>{JSON.stringify(points)}</p>
    </div>
  );
};

export default App;