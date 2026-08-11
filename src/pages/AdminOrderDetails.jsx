import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleOrder, updateOrder } from "../services/orderService";

function AdminOrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getSingleOrder(id);

      console.log("Order details:", response);

      setOrder(response.data);
      setStatus(response.data.status);
    } catch (error) {
      console.error("Error fetching order:", error);

      setError(error.response?.data?.message || "Failed to load order");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const handleStatusUpdate = async () => {
    try {
      setUpdating(true);

      const response = await updateOrder(id, status);

      setOrder(response.data);

      alert("Order status updated successfully");
    } catch (error) {
      console.error("Error updating order:", error);

      alert(error.response?.data?.message || "Failed to update order");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <p>Loading order...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Order Details</h2>

          <small className="text-muted">Order ID: {order._id}</small>
        </div>

        <button
          className="btn btn-secondary"
          onClick={() => navigate("/admin/orders")}
        >
          ← Back to Orders
        </button>
      </div>

      {/* CUSTOMER */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Customer Information</h5>

          <p>
            <strong>Name:</strong> {order.user?.name || "N/A"}
          </p>

          <p>
            <strong>Email:</strong> {order.user?.email || "N/A"}
          </p>

          <p className="mb-0">
            <strong>Phone:</strong> {order.user?.phone || "N/A"}
          </p>
        </div>
      </div>

      {/* ORDER */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Order Information</h5>

          <p>
            <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
          </p>

          <p>
            <strong>Total:</strong> ₦{order.totalPrice?.toLocaleString()}
          </p>

          <div className="d-flex align-items-center gap-3">
            <strong>Status:</strong>

            <select
              className="form-select"
              style={{ maxWidth: "220px" }}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <button
              className="btn btn-danger"
              onClick={handleStatusUpdate}
              disabled={updating}
            >
              {updating ? "Updating..." : "Update Status"}
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h5 className="fw-bold mb-3">Order Items</h5>

          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {order.orderItems?.map((item) => (
                  <tr key={item._id}>
                    <td>{item.product?.name || "Product"}</td>

                    <td>₦{item.price?.toLocaleString()}</td>

                    <td>{item.quantity}</td>

                    <td>₦{(item.price * item.quantity).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="3" className="text-end fw-bold">
                    Total
                  </td>

                  <td className="fw-bold">
                    ₦{order.totalPrice?.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrderDetails;
