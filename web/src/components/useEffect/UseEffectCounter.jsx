import React, { useState, useEffect } from "react";

const UseEffectCounter = ({ initialValue, incrementValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + incrementValue);
  };
  // Simulate componentDidMount
  useEffect(() => {
    console.log("Component mounted");

    // Simulate componentWillUnmount
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Simulate componentDidUpdate (runs when someProp or count changes)
  useEffect(() => {
    console.log("Component updated because someProp or count changed");
  }, [count]);

  return (
    <>
      <div className="counter">
        <p>Count: {count}</p>
        <button onClick={increment}>Increment Count by {incrementValue}</button>
      </div>
    </>
  );
};

export default UseEffectCounter;
