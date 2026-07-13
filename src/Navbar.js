import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="logo-area">
                <div className="logo-text">Google Keep</div>
            </div>
            <div className="search-area">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
}