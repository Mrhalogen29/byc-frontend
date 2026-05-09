function Button({ variant = "solid-btn", className = "", children }) {
  return <button className={`${variant} ` + className}>{children}</button>;
}

export default Button;
