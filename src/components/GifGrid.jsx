import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div
      className="container p-5 m-5"
      style={{ backgroundColor: "#333C83", borderRadius: "10px" }}
    >
      <h1 className="p-2 text-warning">{category}</h1>
      <hr className="bg-warning" />
      {loading && (
        <h4 className="p-2 text-white text-center animate__animated animate__heartBeat animate__infinite infinite">
          Cargando...
        </h4>
      )}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
