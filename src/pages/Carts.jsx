import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  getCart,
  removeFromCart,
  updateCartItem,
} from "../services/cartService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCart();

      console.log(response);

      setCartItems(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const increaseQuantity = async (item) => {
    try {
      await updateCartItem(item.product._id, item.quantity + 1);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQuantity = async (item) => {
    if (item.quantity === 1) return;

    try {
      await updateCartItem(item.product._id, item.quantity - 1);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await removeFromCart(id);

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <Container className="my-5">
      <p className="text-muted">
        Home &gt; <strong>Cart</strong>
      </p>

      <Card className="shadow-sm border-0 p-5">
        <h2 className="fw-bold mb-4">Cart {cartItems.length} item(s)</h2>

        <hr />

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h4>Your cart is empty</h4>

            <Link to="/AllProduct">
              <Button variant="danger" className="mt-3">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.product._id}>
                <Row className="align-items-center my-4">
                  <Col lg={7}>
                    <div className="d-flex">
                      <Image
                        src={
                          item.product.images?.length
                            ? item.product.images[0]
                            : "https://via.placeholder.com/150"
                        }
                        width={140}
                        rounded
                      />

                      <div className="ms-4">
                        <h3 className="fw-bold">{item.product.name}</h3>

                        <p>{item.product.description}</p>

                        <div className="d-flex gap-3 mt-3">
                          <Button variant="outline-danger">
                            <FaHeart className="me-2" />
                            Wishlist
                          </Button>

                          <Button
                            variant="danger"
                            onClick={() => removeItem(item.product._id)}
                          >
                            <FaTrash className="me-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg={2} className="text-center">
                    <h6>Quantity</h6>

                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </Button>

                      <span>{item.quantity}</span>

                      <Button
                        size="sm"
                        variant="danger"
                        disabled={item.quantity === 1}
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </Button>
                    </div>
                  </Col>

                  <Col lg={3} className="text-center">
                    <h5>₦{(item.price * item.quantity).toLocaleString()}</h5>
                  </Col>
                </Row>

                <hr />
              </div>
            ))}

            <Row className="mt-5">
              <Col lg={6}></Col>

              <Col lg={6}>
                <h2 className="fw-bold">CART TOTALS</h2>

                <div className="d-flex justify-content-between mt-4">
                  <h5>Subtotal</h5>

                  <h5>₦{subtotal.toLocaleString()}</h5>
                </div>

                <div className="d-flex justify-content-between">
                  <h5>Total</h5>

                  <h5 className="fw-bold">₦{subtotal.toLocaleString()}</h5>
                </div>

                <div className="d-flex justify-content-end gap-3 mt-4">
                  <Link to="/AllProduct">
                    <Button variant="outline-danger">Continue Shopping</Button>
                  </Link>

                  <Button variant="danger">Proceed to Checkout</Button>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Container>
  );
}

export default Cart;
