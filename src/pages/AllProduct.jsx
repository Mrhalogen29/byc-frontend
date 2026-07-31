import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";

import productImage from "../assets/all-product/Camisole.png";
import boxersImage from "../assets/all-product/boxer.png";
import boxersImage2 from "../assets/all-product/boxer2.png";
import boxersImage3 from "../assets/all-product/boxer3.png";
import boxersImage4 from "../assets/all-product/boxer4.png";

const product = [
  {
    id: 1,
    name: "CAMISOLE",
    code: "BYC-2598ABC",
    description: "Long Cotton Adjustable Strap Camisole Tank Top - White",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 2,
    name: "CAMISOLE",
    code: "BYC-501LMS",
    description: "Long Cotton Adjustable Strap Camisole Tank Top - Black",
    price: "₦2,800.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 3,
    name: "CAMISOLE",
    code: "BYC-501LMS",
    description: "Long Cotton Adjustable Strap Camisole Tank Top - White",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 4,
    name: "CAMISOLE",
    code: "BYC-501LMS",
    description: "Long Cotton Adjustable Strap Camisole Tank Top - White",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 5,
    name: "CAMISOLE",
    code: "BYC-501LMS",
    description: "Long Cotton Adjustable Strap Camisole Tank Top - Black",
    price: "₦1,900.00",
    rating: "4.05",
    image: productImage,
  },
  {
    id: 6,
    name: "BOXERS",
    code: "BYC 1161",
    description: "Fashionable Men’s Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,800.00",
    rating: "4.05",
    image: boxersImage,
  },
  {
    id: 7,
    name: "BOXERS",
    code: "BYC 1201",
    description: "Fashionable Men’s Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦1,800.00",
    rating: "4.05",
    image: boxersImage2,
  },
  {
    id: 8,
    name: "BOXERS",
    code: "KBY-3204",
    description: "Fashionable Men’s Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦10,000.00",
    rating: "4.05",
    image: boxersImage3,
  },
  {
    id: 9,
    name: "BOXERS",
    code: "BYL-6709",
    description: "Fashionable Men’s Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦12,000.00",
    rating: "4.05",
    image: boxersImage,
  },
  {
    id: 10,
    name: "BOXERS",
    code: "KBY-3204",
    description: "Fashionable Men’s Underwear Boxer Cotton Underwear 3 In 1",
    price: "₦10,000.00",
    rating: "4.05",
    image: boxersImage4,
  },
];

function AllProduct() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getProducts();
      console.log(response);

      setProducts(response.data);
    } catch (err) {
      console.log(err);

      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 className="text-center py-5">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-center py-5 text-danger">{error}</h3>;
  }

  const handleAddToCart = async (productId) => {
    console.log("product ID", productId);

    try {
      const response = await addToCart(productId);
      console.log("Add to Cart Response", response);

      alert("Product added to cart successfully!");

      console.log(response);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to add to cart");
    }
  };

  return (
    <section className="py-5">
      <Container>
        <p className="text-muted small mb-4">Home &gt; All Products</p>

        <div className="border rounded p-4 bg-white">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">All Products</h3>

            <Form.Select style={{ width: "170px" }}>
              <option>Most Sold</option>

              <option>Newest</option>

              <option>Price: Low to High</option>

              <option>Price: High to Low</option>
            </Form.Select>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <Card
                key={product._id}
                className="product-card shadow-sm border-0"
              >
                <Card.Img
                  variant="top"
                  className="product-image"
                  src={
                    product.images?.length > 0
                      ? product.images[0]
                      : productImage
                  }
                />

                <Card.Body>
                  <h6 className="fw-bold">{product.name}</h6>

                  <small className="text-muted">
                    {product.code || "BYC Product"}
                  </small>

                  <p
                    className="text-muted mt-2"
                    style={{
                      fontSize: "12px",

                      minHeight: "40px",
                    }}
                  >
                    {product.description}
                  </p>

                  <h6 className="fw-bold">₦{product.price.toLocaleString()}</h6>

                  <div className="text-warning mb-3">
                    ★★★★★
                    <span className="text-dark ms-2">
                      {product.rating || 4.5}
                    </span>
                  </div>

                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="flex-fill"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      Add to cart ♡ Wishlist
                    </Button>

                    <Button variant="danger" size="sm" className="flex-fill">
                      Buy Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AllProduct;
