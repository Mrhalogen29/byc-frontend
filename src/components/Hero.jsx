import Button from "./Button";
import personLeft from "../assets/hero/left-person.png";
import personRight from "../assets/hero/right-person.png";
import personCenter from "../assets/hero/center-person.png";

function Hero() {
  return (
    <section id="hero">
      <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <p className="fs-4 mb-3">Your body deserves comfort</p>
            <h1 className="mb-5 fw-bold">Get the best for yourself</h1>
            <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center align-items-center">
              <Button variant="solid-btn" className="action-btn shop-btn">
                Shop Now
              </Button>
              <Button
                variant="outline-btn"
                className="action-btn learn-more-btn"
              >
                Learn more
              </Button>
            </div>
            <div className="col-xl-10 mt-5 mx-auto ">
              <div className="row align-items-end justify-content-center gx-2 gx-sm-3">
                <div className="col-4 col-sm-3">
                  <img
                    src={personLeft}
                    alt="man on underwears"
                    className="w-100"
                  />
                </div>
                <div className="col-4">
                  <img
                    src={personCenter}
                    alt="man on underwears"
                    className="w-100"
                  />
                </div>
                <div className="col-4 col-md-3">
                  <img
                    src={personRight}
                    alt="man on underwears"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
