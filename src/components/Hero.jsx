import Button from "./Button";

function Hero() {
  return (
    <section id="hero">
      <div className="container">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
