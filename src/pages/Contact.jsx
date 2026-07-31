import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import productImage from "../assets/about/product-image.png";
import mapImage from "../assets/contact/map-image.png";
import addressIcon from "../assets/contact/address.png";
import phoneIcon from "../assets/contact/phone.png";
import emailIcon from "../assets/contact/email.png";

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

function Contact() {
  return (
    <>
      <section className="py-5">
        <Container>
          <p className="text-muted small mb-5">
            Home <span>&gt;</span> Contact Us
          </p>

          <h1 className="text-center fw-bold display-4 mb-5">CONTACT US</h1>

          <img
            src={mapImage}
            alt="Map"
            className="img-fluid w-100 mb-5 rounded"
          />

          <Row className="g-4 text-center mb-5">
            <Col md={4}>
              <div className="p-4 bg-light h-100">
                <img
                  src={addressIcon}
                  alt="Address"
                  width="50"
                  className="mb-3"
                />

                <h4 className="fw-bold">ADDRESS</h4>

                <p className="mb-1">(Head Office)</p>

                <p>175 Cameroun Road Aba, Abia State.</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 bg-light h-100">
                <img src={phoneIcon} alt="Phone" width="50" className="mb-3" />

                <h4 className="fw-bold">PHONE</h4>

                <p>
                  08101375376
                  <br />
                  09053403403
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 bg-light h-100">
                <img src={emailIcon} alt="Email" width="50" className="mb-3" />

                <h4 className="fw-bold">EMAIL ADDRESS</h4>

                <p>BYCAFRICA@gmail.com</p>
              </div>
            </Col>
          </Row>

          <h2 className="fw-bold mb-4">Drop a Message</h2>

          <Form style={{ maxWidth: "500px" }}>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>

            <Button variant="danger" className="w-100">
              Submit
            </Button>
          </Form>
        </Container>
      </section>

      {/* Recently Viewed Section */}
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

export default Contact;
