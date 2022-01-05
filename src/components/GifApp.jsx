import "../App.css";
import AddCategory from "./AddCategory";
import { useState } from "react";

const GifApp = () => {
  const [categorys, setCategory] = useState([
    "one category",
    "two category",
    "two category",
  ]);

  return (
    <div className="App">
      <h1>Gif App</h1>
      <AddCategory setCategory={setCategory} />
      <hr />
      <div>
        <ol>
          {categorys.map((category, i) => {
            return <li key={i}>{category}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default GifApp;
