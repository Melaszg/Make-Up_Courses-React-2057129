import "./headerblog.css";
import logo from "../../assets/img/logo.png";

function HeaderBlog(){
    const navbaritemsblog = ["maquillaje", "piel", "cursos"];

    return (
        <section class="home-blog">
      <header class="container py-2">
        <nav class="navbar navbar-expand-lg">
          <h1 class="navbar-brand">
            <a href="/">
              <img
                class="img-fluid"
                src={logo}
                width="130px"
                alt="Make Up Courses"
              />
            </a>
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="menu">
            <ul class="navbar-nav main">
            {navbaritemsblog.map((item, key) => (
                  <li menus = {key} className="nav-item">
                  <a href={`#${item}`} className="nav-link text-white">{item}</a>
                </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
    </section>
    );
}

export default HeaderBlog;
