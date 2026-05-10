import menUnderwears from "../assets/new-arrivals/men-underwears.png";
import womenUnderwears from "../assets/new-arrivals/women-underwears.png";
import underwears from "../assets/new-arrivals/underwears.png";
import Button from "./Button";

const newArrivalsList = [
  {
    image: menUnderwears,
    title: "Men Underwears",
    description: "Lorem ipsum hhsk",
  },
  {
    image: womenUnderwears,
    title: "Women Underwears",
    description: "Lorem ipsum hhsk",
  },
  {
    image: underwears,
    title: "Underwears",
    description: "Lorem ipsum hhsk",
  },
];

<div className="col-md-6 col-lg-4">
  <NewArrivalsCard
    image={menUnderwears}
    title="Men Underwears"
    description="Lorem ipsum nhs"
  />
</div>;

function NewArrivals() {
  return (
    <section className="py-5 mb-5">
      <div className="container">
        <h2 className="mb-5 fs-2 fw-semibold text-center">
          Checkout BYC New Arrivals
        </h2>
        <div className="row">
          {newArrivalsList.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.title}>
              <NewArrivalsCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button variant="outline-btn">View All</Button>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;

function NewArrivalsCard({ image, title, description }) {
  return (
    <div>
      <div className="">
        <img
          src={image}
          alt=""
          className="object-fit-cover mb-4 w-100"
          style={{ aspectRatio: 1 }}
        />
      </div>
      <div className="">
        <h4 className="lh-1">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
