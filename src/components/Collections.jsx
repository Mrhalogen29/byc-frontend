import kidsCollection from "../assets/collections/kids.png";
import mensCollection from "../assets/collections/men.png";
import womenCollection from "../assets/collections/women.png";
import Button from "./Button";

const collections = [
  {
    isTextType: true,
    title: "BYC Collection",
    subtitle: "BYC Collection 2021",
    desc: "The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you\
100 percent stylish. Be smart & trendy with us.",
    buttonText: "Explore",
  },
  { image: kidsCollection, imageAlt: "kids Collection" },
  { image: womenCollection, imageAlt: "women Collection" },
  { image: mensCollection, imageAlt: "mens Collection" },
];

console.log("collections", collections);

function Collections() {
  return (
    <section id="collection" className="py-5">
      <div className="container">
        <div className="row">
          {collections.map((collection) => (
            <div
              className="col-sm-6 g-3"
              key={collection.title || collection.imageAlt}
            >
              <CollectionsCard {...collection} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <Button variant="outline-btn">View All</Button>
        </div>
      </div>
    </section>
  );
}

export default Collections;

function CollectionsCard({
  isTextType = false,
  image,
  imageAlt,
  subtitle,
  title,
  desc,
  buttonText,
}) {
  return (
    <div
      className={
        "collections-card h-100" +
        (isTextType &&
          " p-3  p-lg-5 d-flex justify-content-center align-items-center")
      }
    >
      {isTextType ? (
        <div className="col-11 col-lg-10">
          <h3 className="fw-semibold text-secondary">{subtitle}</h3>
          <h2 className="fw-semibold">{title}</h2>
          <p>{desc}</p>
          <Button variant="outline-btn">{buttonText}</Button>
        </div>
      ) : (
        <img
          src={image}
          alt={imageAlt}
          className="w-100 h-100 object-fit-cover"
        />
      )}
    </div>
  );
}
