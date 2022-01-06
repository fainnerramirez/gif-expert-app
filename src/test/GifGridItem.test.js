import { shallow } from "enzyme";
import GifGridItem from "../components/GifGridItem";

describe("Pruebas en el archivo gifGridItem.js", () => {
  test("Se debe mostrar el componente correctamente", () => {
    const view = shallow(<GifGridItem />);

    expect(view).toMatchSnapshot();
  });
});
