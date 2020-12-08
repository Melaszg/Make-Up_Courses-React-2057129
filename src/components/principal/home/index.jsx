import "./home.css";
import logo from "../../../assets/img/logo.png";

function Home(){
    return (
        <main className="home">
      <div className="container">
        <header className="py-2">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="#" className="navbar-brand"
              ><img className="img-fluid" src={logo} width="130px" alt="Make-Up Courses"
            /></a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#menu"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ml-auto main-menu">
                <li className="nav-item">
                  <a href="#Cursos" className="nav-link text-white">Cursos</a>
                </li>
                <li className="nav-item">
                  <a href="#Nosotras" className="nav-link text-white">Nosotras</a>
                </li>
                <li className="nav-item">
                  <a href="#Tecnicas" className="nav-link text-white">Técnicas</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </main>
    );
}

export default Home;
