import "./tecnicas.css";
import Strobing from "../../../assets/img/strobing.png";
import Baking from "../../../assets/img/baking.png";
import Contouring from "../../../assets/img/contouring.png";
import Mancha from "../../../assets/img/mancha.png";


function Tecnicas(){
    return (
        <section className="tecnicas" id="Tecnicas">
      <div className="container">
        <h2 className="text-center">Técnicas De Maquillaje</h2>
        <div className="row">
          <ul className="elementos flex-row flex-wrap d-flex justify-content-around text-justify">
            <li className="col-mb-3 col-sm-4">
              <div className="text-center">
                <img src={Strobing} width="250px" alt="" />
              </div>
              <h4 className="text-center">
                <span className="subtitulo">Strobing</span>
              </h4>
              <p className="text-justify">
                Consiste en perfeccionar los rasgos altos de la cara a través de
                la luz. Se emplea en los pómulos, tabique y mentón para definir
                los rasgos.
              </p>
            </li>
            <li className="col-mb-3 col-sm-4">
              <div className="text-center">
                <img src={Baking} width="250px" alt="" />
              </div>
              <h4 className="text-center"><span className="subtitulo">Baking</span></h4>
              <p className="text-justify">
                Busca disimular las imperfecciones como manchas, ojeras y líneas
                de expresión.
              </p>
            </li>
            <li className="col-mb-3 col-sm-4">
              <div className="text-center">
                <img src={Contouring} width="250px" alt="" />
              </div>
              <h4 className="text-center">
                <span className="subtitulo">Contouring</span>
              </h4>
              <p className="text-justify">
                Consiste en perfeccionar las facciones del rostro con la ayuda
                de luces y sombras para que luzcan más definidas.
              </p>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <a span className="boton3" href="https://co.pinterest.com/makeupcourses20/boards/">Ver Más</a>
        </div>
      </div>
    </section>
    );
}

export default Tecnicas;