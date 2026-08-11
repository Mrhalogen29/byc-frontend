import { NavLink, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="d-flex">
      {/* SIDEBAR */}
      <aside
        className="bg-dark text-white p-3"
        style={{
          width: "250px",
          minHeight: "100vh",
        }}
      >
        <h4 className="mb-4">BYC ADMIN</h4>

        <nav className="nav flex-column gap-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-danger text-white" : "text-white"}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-danger text-white" : "text-white"}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-danger text-white" : "text-white"}`
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `nav-link ${isActive ? "bg-danger text-white" : "text-white"}`
            }
          >
            Users
          </NavLink>

          <hr />

          <button onClick={handleLogout} className="btn btn-outline-light mt-2">
            Logout
          </button>
        </nav>
      </aside>

      {/* ADMIN CONTENT */}
      <main className="flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
