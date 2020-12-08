import "./sobrecursos.css";
import cursos from "../../../assets/img/imagen2.jpg"

function SobreCursos (){
    return(
        <section className="cursos container d-flex align-items-center" id="Cursos">
      <div className="row align-items-center">
        <picture className="col-md-6">
          <img
            className="img-fluid imgcursos"
            src={cursos}
            width="685px"
            alt="Sobre los cursos"
          />
        </picture>
        <div className="col-md-6">
          <article className="articulo">
            <h2 className="titulos text-center">sobre los cursos</h2>
            <p className="textos text-justify">
              Ofrecemos el aprendizaje de técnicas, diseños y uso de productos
              para maquillaje y cuidado de la piel. Queremos que las personas
              comprendan y apliquen los procedimientos asociados en la
              decoración y coloreado para mejorar la apariencia del rostro. Te
              brindamos la alternativa de recibir nuestros tutoriales desde la
              comodidad de tu hogar, el horario lo escoges tú.
            </p>
          </article>
          <a span className="botones" href="#">inscribirse</a>
        </div>
      </div>
    </section>
    );
}

export default SobreCursos;