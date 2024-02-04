import React, { useState } from "react";
import "./App.css";

// react -icons
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { TbWritingSign } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" onClick={()=> setOpen(!open)}>
            <FiMenu className="nav_icon" />
          </div>
          <div>
            <IoSunnyOutline className="nav_icon" />
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            {open && (<ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  Service
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Works
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>)}
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <div className="home__data">
              <div className="home__img">
                <img src="./assets/img-2.png" alt="" />
              </div>

              <h1 className="home__title">Atharva Pandharikar</h1>
              <span className="home__profession">Frontend Developer</span>

              <div className="home__social">
                <a
                  href="https://instagram.com/atharva_pandharikar?igshid=ZDdkNTZiNTM="
                  className="home__social-link"
                  target="_blank"
                >
                  <IoLogoInstagram />{" "}
                </a>
                <a
                  href="https://github.com/atharvap2003"
                  className="home__social-link"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/atharva-pandharikar"
                  className="home__social-link"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <span className="section-subtitle">My Intro</span>
          <h2 className="section-title">About Me</h2>
          <p className="about__description">
            Welcome to my website! I'm a passionate Frontend Engineer with
            expertise in crafting exceptional user experiences. My tech-stack
            includes Next.js, JavaScript, React, Redux, Tailwind CSS, SCSS, and
            HTML/CSS3. With a rich background in frontend development, I've
            honed my skills through hands-on experience and projects. I've had
            the privilege of working with KarmaActs Systems, where I've
            contributed significantly using the same technology stack. This
            experience has deepened my understanding and proficiency in building
            scalable, performant, and intuitive web applications. Explore my
            portfolio to witness the fusion of creativity and technical prowess,
            and feel free to reach out for collaboration opportunities or to
            discuss how we can bring your vision to life. Let's innovate
            together!
          </p>
        </section>

        <section className="services section" id="services">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>

          <div className="services__container bd-grid">
            <div className="services__content">
              <a>
                <MdOutlineDesignServices className="services_icon" />
              </a>
              <h3 className="services__title">Frontend Developer</h3>
              <p className="services__description">
                Crafting immersive web experiences with "Next.js" & "React.js",
                blending functionality with aesthetics to captivate users and
                drive engagement.
              </p>
            </div>
            <div className="services__content">
              <a>
                <FaUserEdit className="services_icon" />
              </a>
              <h3 className="services__title">Javascript Developer</h3>
              <p className="services__description">
                Leveraging the power of JavaScript to build dynamic, interactive
                web applications that deliver seamless user experiences and
                drive business growth.
              </p>
            </div>
            <div className="services__content">
              <TbWritingSign className="services_icon" />
              <h3 className="services__title">Content-Writing</h3>
              <p className="services__description">
                Creating intuitive interfaces and captivating user experiences
                that blend aesthetics with functionality, ensuring engagement
                and satisfaction across digital platforms.
              </p>
            </div>
          </div>
        </section>

        {/* 
      <!-- <section className="works section" id="works">
            <span className="section-subtitle">My portfolio</span>
            <h2 className="section-title">Recent Works</h2>

            <div className="works__container bd-grid">
                <div className="works__img">
                    <img src="/New folder/img-3.jfif" alt="image">

                    <div className="works__data">
                        <a href="#" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Work 1</span>
                    </div>
                </div>
            </div>

            <div className="works__container bd-grid">
                <div className="works__img">
                    <img src="/New folder/img-4.jfif" alt="image">

                    <div className="works__data">
                        <a href="#" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Work 2</span>
                    </div>
                </div>
            </div>

            <div className="works__container bd-grid">
                <div className="works__img">
                    <img src="/New folder/img-5.jfif" alt="image">

                    <div className="works__data">
                        <a href="#" className="works__link"><i className="bx bx-link-alt"></i></a>
                        <span className="works__title">Work 3</span>
                    </div>
                </div>
            </div>

        </section> --> */}

        {/* <!-- Contact Section --> */}

        <section className="contact section" id="contact">
          <span className="section-subtitle">Contact Me</span>
          <h2 className="section-title">Get In Touch</h2>

          <div className="contact__container bd-grid">
            <form action="" className="contact__form">
              <div className="contact__inputs">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__input"
                />
                <input
                  type="mail"
                  placeholder="Email"
                  className="contact__input"
                />
              </div>

              <input
                type="text"
                placeholder="Project"
                className="contact__input"
              />

              <textarea
                name=""
                id=""
                cols="0"
                rows="10"
                placeholder="Message"
                className="contact__input"
              ></textarea>

              <input type="submit" className="button contact__button" />
            </form>

            <div>
              <div className="contact__info">
                <h3 className="contact__subtitle">Call me</h3>
                <span className="contact__text">+91 9876543210</span>
              </div>
              <div className="contact__info">
                <h3 className="contact__subtitle">E-mail</h3>
                <span className="contact__text">
                  atharvapandharikar5@gmail.com
                </span>
              </div>
              <div className="contact__info">
                <h3 className="contact__subtitle">Location</h3>
                <span className="contact__text">
                  Devgiri Boys Hostel,
                  <br />
                  Ambegaon(BK), Pune.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container bd-grid">
          <h1 className="footer__title">Atharva</h1>
          <p className="footer__description">
            I am Atharva and this is my personal website, consult me here.
          </p>

          <div className="footer__socials">
            <a href="#" className="footer__links">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="footer__links">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__links">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>

          <p className="footer__copy">&copy; All right are reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
