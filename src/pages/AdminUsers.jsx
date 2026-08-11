import { useEffect, useState } from "react";
import api from "../api/axios.js";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/users");

      console.log("Users response:", response.data);

      setUsers(response.data.data);
    } catch (error) {
      console.error("Users error:", error);
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);

      setError(error.response?.data?.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Users</h2>
          <p className="text-muted mb-0">Manage registered users</p>
        </div>

        <span className="badge bg-dark fs-6">{users.length} Users</span>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Date Registered</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="fw-semibold">{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone || "-"}</td>

                  <td>
                    {user.role === "admin" ? (
                      <span className="badge bg-danger">Admin</span>
                    ) : (
                      <span className="badge bg-secondary">Customer</span>
                    )}
                  </td>

                  <td>
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "-"}
                  </td>

                  <td>
                    <button className="btn btn-sm btn-primary me-2">
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user._id)}
                      disabled={user.role === "admin"}
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
    </div>
  );
}

const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this user?",
  );

  if (!confirmed) return;

  try {
    await api.delete(`/users/delete/${id}`);

    alert("User deleted successfully");

    setUsers((currentUsers) => currentUsers.filter((user) => user._id !== id));
  } catch (error) {
    console.error("Delete user error:", error);

    alert(error.response?.data?.message || "Failed to delete user");
  }
};

export default AdminUsers;
