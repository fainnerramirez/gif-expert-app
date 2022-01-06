import { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=Jqf5dQm5O68ILNtxqqFHkIcq7wyLmNRH&q=car&limit=10";

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <div>
      <h1>{category}</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
