import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import "./Home.scss";
import ProjectCard from "../../components/projectCard/projectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5} >
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>

      {/* Features */}
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your finger tips</h1>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              <span>The very best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              <span>The very best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              <span>The very best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              <span>The very best for every budget</span>
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>

          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h2 className="text-light">fiverr business</h2>
            <h2>A business solution designed for teams</h2>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to business.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>

          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>

      {/*  */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
