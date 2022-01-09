import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="container">
      <h1 className="p-2 text-warning">{category}</h1>
      <hr />
      {loading && (
        <h4 className="p-2 text-center animate__animated animate__heartBeat animate__infinite infinite">
          Cargando...
        </h4>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
