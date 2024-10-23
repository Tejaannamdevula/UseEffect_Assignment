import React, { useState } from "react";
import UseEffectCounter from "./UseEffectCounter";

function UseEffectCounters() {
  const [visibleCounters, setVisibleCounters] = useState([
    { id: "counter1", state: true, count: 0, increment: 1 },
    { id: "counter5", state: true, count: 0, increment: 5 },
    { id: "counter10", state: true, count: 0, increment: 10 },
    { id: "counter15", state: true, count: 0, increment: 15 },
  ]);

  const handleRemoveCounter = (e) => {
    e.preventDefault();
    const counterToRemove = e.target.elements.selectCounter.value;

    setVisibleCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterToRemove ? { ...counter, state: false } : counter
      )
    );
  };

  const handleAddCounter = (e) => {
    e.preventDefault();
    const countValue = parseInt(e.target.elements[0].value);

    if (isNaN(countValue) || countValue <= 0) {
      return;
    }

    const newCounterId = `counter${countValue}`;

    const counterExists = visibleCounters.some(
      (counter) => counter.increment === countValue && counter.state
    );

    if (counterExists) {
      alert(`Counter with increment value ${countValue} already exists.`);
      return;
    }

    const newCounter = {
      id: newCounterId,
      state: true,
      count: 0,
      increment: countValue,
    };

    setVisibleCounters((prevCounters) => [...prevCounters, newCounter]);
  };

  return (
    <>
      <section className="counters-container">
        <section className="counters">
          {visibleCounters.map((counter) => {
            return (
              counter.state && (
                <UseEffectCounter
                  initialValue={counter.count}
                  key={counter.id}
                  incrementValue={counter.increment}
                />
              )
            );
          })}
        </section>

        <section className="remove-con">
          <form className="remove-form" onSubmit={handleRemoveCounter}>
            <select name="selectCounter" id="selectCounter">
              <option value="">Select Counter to Remove</option>
              {visibleCounters
                .filter((counter) => counter.state) // Only show visible counters
                .map((counter) => (
                  <option key={counter.id} value={counter.id}>
                    Remove {counter.id}
                  </option>
                ))}
            </select>
            <button
              type="submit"
              disabled={!visibleCounters.some((counter) => counter.state)}
            >
              Remove Counter
            </button>
          </form>
        </section>

        <section className="add-con">
          <form className="add-form" onSubmit={handleAddCounter}>
            <label>Add counter</label>
            <input type="number" min="1" required />
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "10px",
                fontSize: "1em",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Add Counter
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default UseEffectCounters;
