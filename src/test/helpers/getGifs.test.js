import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en el archivo helpers/getGifs.js", () => {
  test("debe de mostrar 10 elementos cuando se le pasa una categoria", async () => {
    const gifs = await getGifs("Cat");

    expect(gifs.length).toBe(10);
  });

  test("debe de mostrar 0 elementos cuando no se le pasa una categoria", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
