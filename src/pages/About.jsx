import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import medalImage from "../assets/about/medal-image.png";
import aboutImage from "../assets/about/about-image.png";
import productImage from "../assets/about/product-image.png";

const records = [
  {
    year: "1990",
    text: "Gold Prize for the Best Listed Firm awarded by Daesin Economy Research Institute.",
  },
  {
    year: "1993",
    text: "Selected as representative enterprise of Korea for successful strategies on globalization of Korean brands by Korean Traders Association.",
  },
  {
    year: "1997",
    text: "BYC selected as the most preferred brand for underwear by the Federation of Korean Women Economists.",
  },
  {
    year: "1997",
    text: "Selected as the official commercializer of underwear for the France World Cup.",
  },
  {
    year: "1999",
    text: "The Prize for Export of Original Brands awarded as recommended by the Korean Association of Textile Industries.",
  },
  {
    year: "2001",
    text: "The 10th Prize for the Enterprise of Economical Justice by the Enterprise Assessment Commission.",
  },
  {
    year: "2006",
    text: "The Prize for Export of Original Brands awarded as recommended by the Korean Association of Textile Industries.",
  },
  {
    year: "2006",
    text: "Selected by Korea Management Association as No.1 in brand influence among men's underwear companies.",
  },
  {
    year: "2011",
    text: "Selected as the Best Korean Enterprise by Korean Management Association.",
  },
];

const products = [
  {
    id: 1,
    name: "MEN BOXERS",
    code: "BYC 1163",
    description: "Fashionable Men's Underwear Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 2,
    name: "MEN BOXERS",
    code: "BYC 1163",
    description: "Fashionable Men's Underwear Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 3,
    name: "MEN BOXERS",
    code: "BYC 1163",
    description: "Fashionable Men's Underwear Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 4,
    name: "MEN BOXERS",
    code: "BYC 1163",
    description: "Fashionable Men's Underwear Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 5,
    name: "MEN BOXERS",
    code: "BYC 1163",
    description: "Fashionable Men's Underwear Cotton Underwear 3 In 1",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
];

function About() {
  return (
    <>
      <section className="py-5">
        <Container>
          <p className="text-muted small mb-5">
            Home <span>&gt;</span> About Us
          </p>

          <h1 className="text-center fw-bold display-4 mb-5">ABOUT US</h1>

          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img src={aboutImage} alt="About BYC" className="img-fluid" />
            </Col>

            <Col lg={6}>
              <h2 className="fw-bold mb-4">ABOUT BYC AFRICA</h2>

              <p className="fw-bold">
                We are the sole distributor of BYC products in Africa. We import
                BYC products from Korea and distribute them to African countries
                through Onamik Holdings Limited.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold display-5 mb-5">THE RECORD</h2>

          <Row className="g-4">
            {records.map((record, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <Card className="h-100 border-0 shadow-sm p-4">
                  <img
                    src={medalImage}
                    alt="Medal"
                    className="mb-3"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  />

                  <Card.Body className="px-0">
                    <Card.Text
                      className="text-muted"
                      style={{ fontSize: "14px" }}
                    >
                      {record.text}
                    </Card.Text>

                    <h5 className="text-danger fw-bold mt-4">
                      Year {record.year}
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Recently Viewed</h2>

            <Button
              variant="link"
              className="text-danger text-decoration-none fw-bold"
            >
              See all
            </Button>
          </div>

          <Row className="g-4">
            {products.map((product) => (
              <Col lg={2} md={4} sm={6} xs={12} key={product.id}>
                <Card className="border-0 h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="img-fluid"
                  />

                  <Card.Body className="px-0">
                    <h6 className="fw-bold mb-1">{product.name}</h6>

                    <small className="text-muted d-block">{product.code}</small>

                    <p className="text-muted mt-2" style={{ fontSize: "12px" }}>
                      {product.description}
                    </p>

                    <h6 className="fw-bold">{product.price}</h6>

                    <div className="text-warning">
                      ★★★★★
                      <span className="text-dark ms-2">{product.rating}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
