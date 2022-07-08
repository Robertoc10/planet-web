import React from "react";
import { Link } from "react-scroll";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="nav">
        <nav className="nav-container">
          <ul>
            <li className="fontsforweb_fontid_2802">
              <Link activeClass="active" smooth spy to="home">
                Inicio
              </Link>
            </li>
            <li className="fontsforweb_fontid_2802">
              <Link activeClass="active" smooth spy to="info">
                Información
              </Link>
            </li>
            <li className="fontsforweb_fontid_2802">
              <Link activeClass="active" smooth spy to="contact">
                Contáctanos
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="home" id="home">
        <div id="vines"></div>
        <div className="main-container">
          <div className="text-container">
            <h1 className="fontsforweb_fontid_2802" id="title">
              Plan(e)t
            </h1>
            <h2 className="fontsforweb_fontid_2802" id="subtitle">
              Para los amantes de<br></br>la jardinería por diversión
            </h2>
            <a href="https://drive.google.com/drive/folders/1H9ovQDnNIlnbzqu4VNevRTyrr0myII82?usp=sharing" id="download" className="fontsforweb_fontid_2802">
              Descargar ya
            </a>
          </div>
          <div className="image-container">
            <div id="image"></div>
          </div>
        </div>
      </section>
      <section className="info" id="info">
        <div className="care">
          <div className="text-container">
            <span>
              <h1>Cuida</h1>
              <p>
                Aprende los cuidados que tus plantas necesitan e identifica
                enfermedades que pueden perjudicarlas
              </p>
            </span>
          </div>
        </div>
        <div className="remember">
          <div className="text-container">
            <span>
              <h1>Recuerda</h1>
              <p>
                Establece alarmas y recordatorios para saber cuando atender a
                tus plantas
              </p>
            </span>
          </div>
        </div>
        <div className="socialize">
          <div className="text-container">
            <span>
              <h1>Socializa</h1>
              <p>
                Comparte tus ideas con otros usuarios o intercambien consejos
                para sus plantas
              </p>
            </span>
          </div>
        </div>
        <div className="change">
          <div className="text-container">
            <span>
              <h1>Cambia</h1>
              <p>
                Crea tu propio rincón floral y contribuye a un mundo más verde
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div class="card">
          <h2 className="fontsforweb_fontid_2802">Contáctanos</h2>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label className="fontsforweb_fontid_2802">Nombre</label>
                <input type="text" />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label className="fontsforweb_fontid_2802">Apellido</label>
                <input type="text" />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label className="fontsforweb_fontid_2802">Email</label>
                <input type="text" />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label className="fontsforweb_fontid_2802">Teléfono</label>
                <input type="text" />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label className="fontsforweb_fontid_2802">Mensaje</label>
                <textarea></textarea>
              </div>
            </div>

            <div class="col">
              <input
                type="submit"
                value="Submit"
                className="fontsforweb_fontid_2802"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
