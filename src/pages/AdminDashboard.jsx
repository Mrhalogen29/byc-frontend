import React from "react";

function AdminDashboard() {
  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Total Products</h6>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Total Orders</h6>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Total Users</h6>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Pending Orders</h6>
            <h2>0</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
