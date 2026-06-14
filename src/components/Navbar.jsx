export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/assets/matcha_logo.png"
          alt="Matcha & Me"
        />
      </div>

      <div className="nav-links">
       <div className="nav-links">
  <a
  href="#menu"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Menu
</a>
  <a href="#story">Story</a>
  <a href="#visit">Visit</a>
</div>
      </div>
    </nav>
  );
}