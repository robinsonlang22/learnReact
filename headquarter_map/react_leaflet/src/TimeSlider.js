import React from "react";

const TimeSlider = ({ onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const startTime = new Date("2024-01-01T00:00:00Z");
    const endTime = new Date("2024-12-31T23:59:59Z");

    const selectedTime = new Date(startTime.getTime() + value * (endTime.getTime() - startTime.getTime()));
    onChange(selectedTime);
  };

  return (
    <input type="range" min="0" max="1" step="0.01" onChange={handleChange} />
  );
};

export default TimeSlider;