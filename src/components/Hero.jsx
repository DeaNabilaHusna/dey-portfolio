import Flowers from "./Flowers";
import Deyy from "../assets/deyy_ilustration.svg";
import "./hero.scss";
import "../css/main.scss";

export default function Hero() {
  return (
    <section className="hero">
      <Flowers />
      <div className="hero-content">
        <div>
          <h1>Hi there, I'm Dea Nabila!</h1>
          <p>
            A Computer Science student at Airlangga University passionate about
            software engineering, particularly front-end development. I enjoy
            creating user-friendly interfaces and have gained skills in various
            programming languages and frameworks.
          </p>
          <div className="hero-button">
            <a
              href="https://www.linkedin.com/in/deanabilahusna/"
              target="_blank"
            >
              Let's Connect
            </a>
          </div>
        </div>
        <div>
          <img src={Deyy} alt="" />
        </div>
      </div>
    </section>
  );
}
