import "../App.css";
import AddCategory from "./AddCategory";
import { useState } from "react";
import GifGrid from "./GifGrid";

const GifApp = () => {
  const [categorys, setCategory] = useState([]);

  return (
    <div className="App">
      <div className="row p-5">
        <h1 className="text-center animate__animated animate__backInDown">
          Gif App
        </h1>
      </div>
      <AddCategory setCategory={setCategory} />
      <hr />
      <div>
        {categorys.length === 0 ? (
          <h3 className="text-center p-5 animate__animated animate__pulse animate__infinite infinite">
            Busca cuaquier cosa
          </h3>
        ) : (
          <>
            {categorys.map((category, i) => {
              return <GifGrid key={category} category={category} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GifApp;
