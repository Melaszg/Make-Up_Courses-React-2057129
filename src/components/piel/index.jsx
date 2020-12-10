import "./piel.css"
import Mascarillas from "../../assets/img/MascarillasPiel.png"
import TipsPiel from "../../assets/img/TipsPiel.png";

function Piel(){
    return(
        <section class="consejos" id="Piel">
      <div class="container">
        <h2 class="text-center my-5">Piel</h2>
        <div class="row flex-row flex-wrap text-center">
          <a class="col-md-6" href="https://co.pinterest.com/makeupcourses20/boards/">
            <picture>
              <img src={Mascarillas} width="250px" alt="" />
            </picture>
            <h4>
              <span class="subtitulo">Mascarillas</span>
            </h4>
          </a>
          <a class="col-md-6" href="https://co.pinterest.com/makeupcourses20/boards/">
            <picture>
              <img src={TipsPiel} width="250px" alt="" />
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

export default Piel;