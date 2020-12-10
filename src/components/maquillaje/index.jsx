import "./maquillaje.css"
import Diseños from "../../assets/img/DiseñosMaquillaje.png"
import TipsMaquillaje from "../../assets/img/TipsMaquillaje.png";

function Maquillaje(){
    return(
        <section class="consejos" id="Maquillaje">
      <div class="container">
        <h2 class="text-center my-5">Maquillaje</h2>
        <div class="row flex-row flex-wrap text-center">
          <a class="col-md-6" href="https://co.pinterest.com/makeupcourses20/boards/">
            <picture>
              <img src={Diseños} width="250px" alt="" />
            </picture>
            <h4>
              <span class="subtitulo">Diseños</span>
            </h4>
          </a>
          <a class="col-md-6" href="https://co.pinterest.com/makeupcourses20/boards/">
            <picture>
              <img src={TipsMaquillaje} width="250px" alt="" />
            </picture>
            <h4>
              <span class="subtitulo">Tips</span>
            </h4>
          </a>
        </div>
      </div>
    </section>
    );
}

export default Maquillaje;