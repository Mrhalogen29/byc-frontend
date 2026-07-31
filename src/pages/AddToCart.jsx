import { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import {
  FaStar,
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import boxer1 from "../assets/all-product/boxer.png";
import boxer2 from "../assets/all-product/boxer2.png";
import boxer3 from "../assets/all-product/boxer3.png";
import boxer4 from "../assets/all-product/boxer4.png";

function addToCart() {
  const images = [boxer1, boxer2, boxer3, boxer4];

  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("blue");

  return (
    <Container className="py-5">
      {/* Breadcrumb */}

      <p className="text-muted">
        Home &gt; All Product &gt; <strong>Men Boxers</strong>
      </p>

      <Card className="border-0 shadow-sm p-4">
        <Row>
          {/* LEFT SIDE */}

          <Col lg={5}>
            <img src={mainImage} alt="product" className="img-fluid rounded" />

            <div className="d-flex align-items-center justify-content-center mt-4">
              <Button variant="light">
                <FaChevronLeft />
              </Button>

              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  width="70"
                  height="70"
                  className={`mx-2 rounded ${
                    mainImage === img ? "border border-danger" : "border"
                  }`}
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    padding: "4px",
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}

              <Button variant="light">
                <FaChevronRight />
              </Button>
            </div>
          </Col>

          {/* RIGHT SIDE */}

          <Col lg={7}>
            <h3 className="fw-bold">MEN BOXERS</h3>

            <p className="text-muted">BYC 1166</p>

            <p>100% Cotton | 12 Pieces of Men's Boxer</p>

            <div className="mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} color="#F5A623" />
              ))}

              <span className="ms-2">4.05</span>
            </div>

            <h2 className="fw-bold text-danger">₦2,800.00</h2>

            <hr />

            {/* Available Sizes */}

            <div className="mb-4">
              <h6 className="fw-bold">Available Sizes</h6>

              <div className="d-flex gap-2 mt-2">
                {["S", "M", "L", "XL"].map((item) => (
                  <Button
                    key={item}
                    variant={size === item ? "danger" : "outline-secondary"}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            {/* Available Colours */}

            <div className="mb-4">
              <h6 className="fw-bold">Available Colours</h6>

              <div className="d-flex gap-3 mt-2">
                {["blue", "red", "green", "black"].map((item) => (
                  <div
                    key={item}
                    onClick={() => setColor(item)}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      backgroundColor: item,
                      border:
                        color === item ? "3px solid #dc3545" : "2px solid #ddd",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity */}

            <div className="mb-4">
              <h6 className="fw-bold">Quantity</h6>

              <div className="d-flex align-items-center gap-3 mt-2">
                <Button
                  variant="outline-danger"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  -
                </Button>

                <h5 className="m-0">{quantity}</h5>

                <Button
                  variant="outline-danger"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Buttons */}

            <div className="d-flex gap-3">
              <Button variant="outline-danger" className="px-4">
                <FaHeart className="me-2" />
                Wishlist
              </Button>

              <Button variant="danger" className="px-5">
                <FaShoppingCart className="me-2" />
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Product Description */}

      <Card className="border-0 shadow-sm mt-5 p-4">
        <h4 className="fw-bold mb-4">Product Description</h4>

        <p className="bold">
          This set of boxers will make you feel comfortable. The hem doesn't
          ravel. It is made from cotton which allows aeration around your body.
          It suitable for both adults and teenagers. These pair of boxers give
          good fit and sits appropriately, they ensure there is no unsightly
          bulge and they also give support to an important part of your body,
          which overall improves your confidence. It has a comfortable cotton
          material. It comes in different beautiful colors and patterns. It has
          cool and comfortable fit with flexible hem that doesn't ravel and
          comes tag -free for maximum comfort. Soft breathable fabric for air
          movement and forms to your body for best Fit. It is made of 100%
          premium cotton and is perfect for crotch, so you don't have to worry
          about ugly bumps. For pure organic softness and premium lingerie
          support, pair this four-in-one suit with yourself or the special man
          in your life.
        </p>
      </Card>

      {/* Customer Reviews */}

      <Card className="border-0 shadow-sm mt-4 p-4">
        <h4 className="fw-bold mb-4">Customer Reviews</h4>

        <div className="d-flex align-items-center mb-4">
          <h1 className="fw-bold text-danger me-3">4.5</h1>

          <div>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} color="#FFC107" />
              ))}
            </div>

            <small className="text-muted">Based on 120 Reviews</small>
          </div>
        </div>

        <hr />

        {/* Review 1 */}

        <div className="mb-4">
          <h6 className="fw-bold">John Doe</h6>

          <div className="mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="#FFC107" size={14} />
            ))}
          </div>

          <p className="text-muted">
            Excellent quality. The material feels soft, fits perfectly, and
            looks exactly like the picture.
          </p>
        </div>

        <hr />

        {/* Review 2 */}

        <div>
          <h6 className="fw-bold">Sarah Johnson</h6>

          <div className="mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} color="#FFC107" size={14} />
            ))}
          </div>

          <p className="text-muted">
            Very comfortable to wear. I will definitely buy another one.
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default addToCart;
