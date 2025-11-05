import myLogo from "./../assets/Logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={myLogo} alt="Brew & Code Café" className="nav-logo" />
        <h1 className="nav-title">Brew & Code Café</h1>
      </div>
    </nav>
  );
}

export default Navbar;