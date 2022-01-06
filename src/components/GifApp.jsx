import "../App.css";
import AddCategory from "./AddCategory";
import { useState } from "react";
import GifGrid from "./GifGrid";

const GifApp = () => {
  const [categorys, setCategory] = useState([]);

  return (
    <div className="App">
      <h1>Gif App</h1>
      <AddCategory setCategory={setCategory} />
      <hr />
      <div>
        <>
          {categorys.map((category, i) => {
            return <GifGrid key={category} category={category} />;
          })}
        </>
      </div>
    </div>
  );
};

export default GifApp;
