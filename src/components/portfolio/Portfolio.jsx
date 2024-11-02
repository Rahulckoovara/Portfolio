import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* ----------------portfolio contents---------------------------------------- */}
    
        {/* first itemm */}
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Teranis 2023</h3>
          <div className="portfolio_subtitle">
            <p>
              Developed an Android application seamlessly integrating event
              details and real-time results for the events of college's
              technical fest.
            </p>
          </div>
          <div className="list_footer">
            <a
              href="https://github.com/Teranis-LBSCEK/teranis23-mobile-app"
              target="_blank"
              className="btn"
            >
              {" "}
              Github
            </a>
            <p>#Flutter</p>
          </div>
        </article>

        {/* //second itemm */}
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG2} alt="" />
          </div>

          <h3>Home Rental application</h3>
          <div className="portfolio_subtitle">
            <p>
              Developed an android application using the flutter Getx framework
              ,for finding the rental homes.
            </p>
          </div>
          <div className="list_footer">
            <a
              href="https://github.com/Rahulckoovara/homerent_app.git"
              target="_blank"
              className="btn"
            >
              {" "}
              Github
            </a>
            <p>#Flutter,#Nodejs,#MongoDB</p>
          </div>
        </article>

        {/* //third itemm */}
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG3} alt="" />
          </div>

          <h3> E Blood Bank</h3>
          <div className="portfolio_subtitle">
            <p>Developed an android application Blood bank management.</p>
          </div>
          <div className="list_footer">
            <a
              href="https://github.com/athulll7/EBloodBank"
              target="_blank"
              className="btn"
            >
              {" "}
              Github
            </a>
            <p>#Flutter</p>
          </div>
        </article>

        {/* //fourth itemm */}
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG4} alt="" />
          </div>

          <h3>Parking Management</h3>
          <div className="portfolio_subtitle">
            <p>
              Creating an application to modernize payment methods for parking
              bays, facilitating seamless digital transactions
            </p>
          </div>
          <div className="list_footer">
            <a
              href="https://github.com/athulll7/Vision-Based-Parking-Booth"
              target="_blank"
              className="btn"
            >
              {" "}
              Github
            </a>
            <p>#Python</p>
          </div>
        </article>

        {/* //fifth itemm */}
        <article className="portfolio__item">
          <div className="portfolio__img">
            <img src={IMG5} alt="" />
          </div>

          <h3>Club App</h3>
          <div className="portfolio_subtitle">
            <p>Application for managing the overall system for a club.</p>
          </div>
          <div className="list_footer">
            <a
              href="https://github.com/Rahulckoovara/CLUB"
              target="_blank"
              className="btn"
            >
              {" "}
              Github
            </a>

            <p>#Flutter</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
