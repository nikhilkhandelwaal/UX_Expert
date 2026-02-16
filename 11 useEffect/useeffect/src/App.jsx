import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const inc = () => {
    setCount(count + 1);

  };

  const decs = () => {
    setCount(count - 1);
  };


  useEffect(
    () => {
      setPrice(count * 100);
    }, [count]
  ) // Funtion, dependecnies


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center gap-8 bg-white shadow-md rounded-xl px-8 py-6">

        {/* Decrease Button */}
        <button
          className="w-12 h-12 text-2xl font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={decs}
        >
          -
        </button>

        {/* Counter Number */}
        <span className="text-4xl font-semibold w-70 text-center">
          Count is: {count}
        </span>

        {/* Increase Button */}
        <button
          className="w-12 h-12 text-2xl font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={inc}
        >
          +
        </button>
        <span className="text-4xl font-semibold w-70 text-center">
          Price is:{price}
        </span>

      </div>
    </div>
  );
}

export default App;
/*
  COmponant life Cycle
      MOunting
      unmouting
      updating  

*/