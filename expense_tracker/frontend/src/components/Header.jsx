import "../styles/styles.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">ExpenseTracker</h1>
      <div className="nav-links">
        <a href="#" className="header-btn">Login</a>
        <a href="#" className="header-btn">Registration</a>
      </div>
    </div>
  );
}
