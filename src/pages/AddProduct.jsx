import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    colors: "",
    sizes: "",
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("quantity", formData.quantity);
      data.append("price", formData.price);
      data.append("colors", formData.colors);
      data.append("sizes", formData.sizes);

      images.forEach((image) => {
        data.append("images", image);
      });

      await createProduct(data);

      alert("Product created successfully!");

      navigate("/admin/products");
    } catch (error) {
      console.error("Create product error:", error);

      setError(error.response?.data?.message || "Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Add Product</h2>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/admin/products")}
        >
          ← Back to Products
        </button>
      </div>

      <div className="card border-0 shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>

            <textarea
              name="description"
              className="form-control"
              rows="4"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            {/* Quantity */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>

              <input
                type="number"
                name="quantity"
                className="form-control"
                placeholder="Enter quantity"
                min="0"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Price (₦)</label>

              <input
                type="number"
                name="price"
                className="form-control"
                placeholder="Enter price"
                min="0"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            {/* Colors */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Colors</label>

              <input
                type="text"
                name="colors"
                className="form-control"
                placeholder="Example: Black, White, Red"
                value={formData.colors}
                onChange={handleChange}
              />
            </div>

            {/* Sizes */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Sizes</label>

              <input
                type="text"
                name="sizes"
                className="form-control"
                placeholder="Example: S, M, L, XL"
                value={formData.sizes}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Images */}
          <div className="mb-4">
            <label className="form-label">Product Images</label>

            <input
              type="file"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />

            <small className="text-muted">You can select up to 5 images.</small>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn btn-danger" disabled={loading}>
            {loading ? "Creating Product..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
