import { useEffect, useState } from "react";
import axios from "axios";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProducts();
      console.log("Admin products:", response);

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.response?.data?.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Products</h2>

        <button
          className="btn btn-danger"
          onClick={() => navigate("/admin/products/add")}
        >
          + Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="alert alert-info">No products found.</div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      {product.images?.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          width="60"
                          height="60"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        "No image"
                      )}
                    </td>

                    <td>{product.name}</td>

                    <td>₦{product.price}</td>

                    <td>{product.quantity}</td>

                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this product?",
  );

  if (!confirmed) return;

  try {
    await api.delete(`/product/delete/${id}`);

    alert("Product deleted successfully");

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product._id !== id),
    );
  } catch (error) {
    console.error("Delete product error:", error);

    alert(error.response?.data?.message || "Failed to delete product");
  }
};

export default AdminProducts;
