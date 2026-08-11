import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { loginUser, registerUser } from "../services/authService.js";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
      alert("Login successful");

      if (response.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setRegisterLoading(true);
      setRegisterError("");

      const response = await registerUser({
        name,
        email: registerEmail,
        password: registerPassword,
      });

      alert("account created successfully! kindly login");
      setName("");
      setRegisterEmail("");
      setRegisterPassword("");
      navigate("/login");
    } catch (error) {
      setRegisterError(error.response?.data?.message || "registration failed");
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <Container className="my-5">
      {/* Breadcrumb */}

      <p className="text-muted">Home &gt; Account</p>

      <Card className="border-0 shadow-sm p-5">
        <Row>
          {/* LOGIN */}

          <Col lg={6} className="border-end pe-5">
            <h2 className="fw-bold text-center mb-5">Login</h2>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-4">
                <Form.Label>E-mail</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>

                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "15px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#6c757d",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Form.Check type="checkbox" label="Remember me" />

                <a href="#" className="text-dark text-decoration-none">
                  Forgot your password?
                </a>
              </div>
              {error && <p className="text-danger text-center mb-3">{error}</p>}

              <Button
                variant="danger"
                className="w-100"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loggging in..." : "LOGIN"}
              </Button>
            </Form>
          </Col>

          {/* CREATE ACCOUNT */}
          <Col lg={6} className="ps-5">
            <h2 className="fw-bold text-center mb-5">Create your account</h2>

            <Form onSubmit={handleRegister}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Create a password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </Form.Group>

              {registerError && (
                <p className="text-danger text-center">{registerError}</p>
              )}

              <Button
                type="submit"
                variant="danger"
                className="w-100"
                disabled={registerLoading}
              >
                {registerLoading ? "Creating Account..." : "CREATE ACCOUNT"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Login;
