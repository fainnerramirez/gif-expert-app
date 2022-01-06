import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe("Pruebas en el archivo gifGridItem.js", () => {
  const title = "Title example";
  const url = "http://localhost/image.png";
  const view = shallow(<GifGridItem title={title} url={url} />);

  test("Se debe mostrar el componente correctamente", () => {
    expect(view).toMatchSnapshot();
  });

  test("El componente debe tener los atributos obligatorios", () => {
    const view = shallow(<GifGridItem title={title} url={url} />);

    expect(view).toMatchSnapshot();
  });

  test("debe de tener un pàrrafo con el tìtulo", () => {
    const view = shallow(<GifGridItem title={title} url={url} />);
    const parrafoTitulo = view.find("h5");
    const text = parrafoTitulo.text().trim();

    expect(text).toBe(title);
  });

  test("Debe de mostrar la url y el alt props de la etiqueta img", () => {
    const view = shallow(<GifGridItem title={title} url={url} />);

    const img = view.find("img");

    const alt = img.props().alt;
    const src = img.props().src;

    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
});
