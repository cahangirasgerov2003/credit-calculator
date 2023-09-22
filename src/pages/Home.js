import React from "react";
import "../styles/home.css";
import butaGroup from "../assets/buta.jpeg";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="about__bank__content">
            <h2>Our mission</h2>
            <p>
              With our professional and open-minded team we refresh the banking
              experience of individuals and entrepreneurs. Together with our
              customers we introduce new opportunities and ideas to financial
              services in Azerbaijan and contribute to their greater success by
              delivering flexible and transparent service.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="about__bank__content">
            <h2>Our vision</h2>
            <p>
              To be a reliable partner for individuals and entrepreneurs making
              their daily life easier by providing simple and accessible
              financial solutions.
            </p>
          </div>
        </div>

        <div className="col-4 d-flex align-items-center">
          <div className="bank__info__left bank__info">
            <h2>Committed to the same goal</h2>
            <p>
              We take initiative and work together towards our common goals. We
              build our work on mutual trust and responsibility.
            </p>
          </div>
        </div>

        <div className="col-4 bank__logo__section my-3">
          <img alt="Buta Group" src={butaGroup}></img>
          <h1>Buta Bank</h1>
        </div>

        <div className="col-4 d-flex align-items-center">
          <div className="bank__info__right bank__info">
            <h2>We keep it simple</h2>
            <p>
              We keep our communication simple, services and processes
              convenient.
            </p>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className=" w-50 mx-auto">
            <div className="bank__info bank__info__bottom">
              <h2>Get credit now</h2>
              <p>
                If you are logged in, you can log in to your account from the
                login section and get detailed information about the credit you
                have received and also get to know your credit table. If you are
                logging in for the first time, you can create an account in the
                registration section and get your first credit from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
