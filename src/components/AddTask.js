import React, { useState } from "react";

const NEXT = "Your next task is: ";
const PRIORITY = "Priority";

const AddTask = (props) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleIsChecked = (e) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value.length >= 3) {
      props.addTask(value, isChecked, date);
      setValue("");
      setIsChecked(false);
      setDate(minDate);
    } else {
      alert("Wpisałeś za krótkie zadanie!!!");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="container">
          <label>
            {NEXT}
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Write something..."
              value={value}
              size={50}
            />
          </label>
        </div>
        <div className="container">
          <label>
            {PRIORITY}
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleIsChecked}
            />
          </label>
        </div>
        <div className="container">
          <label>
            Finish date
            <input
              type="date"
              onChange={handleDate}
              value={date}
              min={minDate}
            />
          </label>
        </div>

        <button className="add" type="submit">
          Add task
        </button>
      </form>
    </>
  );
};

export default AddTask;
