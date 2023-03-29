import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AboutStyled } from './AboutPageStyled';
import { faCameraRetro, faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <AboutStyled>
      <div className="about-columnOne">
        <img src="/assets/images/about-section.webp" alt="" />
      </div>
      <div className="about-columnTwo">
        <h2>Nuestra Historia</h2>
        <h1 className="about_title">Detrás de Estora Studio</h1>
        <p className="about_paragraph">
          Hola! Soy Antonio, la persona detrás de Estora Studio, siempre me ha
          interesado el diseño, la moda y la decoración y un día decidí lanzarme
          y dar vida a mis ideas usando la técnica del Tufting.
        </p>
        <p className="about_paragraph">
          Con Estora no solo quiero hacer alfombras artesanales, sino crear
          productos que de verdad emocionen a la gente.
        </p>
        <p className="about_paragraph">
          Me inspiran las formas y siluetas mediterráneas, mis diseños pueden ir
          de lo más clásico a lo más vanguardista pero todos con una idea en
          común, crear productos únicos que aporten un toque de arte y calidez a
          cualquier rincón
        </p>

        <h2>Síquenos en redes</h2>

        <Link className="about_ssnn" to="https://instagram.com/estorastudio">
          <img
            className="about__ssnn-icon"
            src="/assets/images/instagram.svg"
            alt="instagram-logo"
          />
          @estorastudio
        </Link>

        <Link
          className="about_ssnn"
          to="https://www.linkedin.com/in/srmelendez/"
        >
          <img
            className="about__ssnn-icon"
            src="/assets/images/linkedin-in.svg"
            alt="linkedin-logo"
          />
          LinkedIn
        </Link>
      </div>
    </AboutStyled>
  );
};
