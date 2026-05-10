import Button from "./Button";
import personLeft from "../assets/hero/left-person.png";
import personRight from "../assets/hero/right-person.png";
import personCenter from "../assets/hero/center-person.png";
import { useEffect, useState } from "react";

// factoryFunction
const createHeroFigureObj = (image, alt) => ({
  image,
  alt,
});

const heroFiguresArray = [
  createHeroFigureObj(personLeft, "light skinned man on underwears"),
  createHeroFigureObj(personCenter, "dark skinned woman on underwears"),
  createHeroFigureObj(personRight, "dark skinned man on underwears"),
];
function Hero() {
  return (
    <section id="hero" className="py-5">
      <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <p className="fs-4 mb-3">Your body deserves comfort</p>
            <h1 className="mb-5 fw-bold">
              Get the best for <AnimatedText />{" "}
            </h1>
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
                {heroFiguresArray.map((fig) => (
                  <div className="col-4">
                    <img src={fig.image} alt={fig.alt} className="w-100" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

const animatedTextValues = ["yourself", "Men", "Women", "kids"];

const NUM_OF_SECS = 5;

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(
      () =>
        setCurrentIndex((prev) =>
          prev < animatedTextValues.length - 1 ? prev + 1 : 0,
        ),
      NUM_OF_SECS * 1000,
    );
    return () => clearInterval(intervalID);
  }, []);

  return animatedTextValues[currentIndex];
}
