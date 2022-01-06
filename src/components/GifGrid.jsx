const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=Jqf5dQm5O68ILNtxqqFHkIcq7wyLmNRH&q=superman&limit=10";

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default GifGrid;
