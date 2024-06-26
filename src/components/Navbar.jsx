import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
