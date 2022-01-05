import React, { useState } from "react";

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategory((cat) => [...cat, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Search"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default AddCategory;
