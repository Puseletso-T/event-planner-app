import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/dashboard">Event Planner</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link" to="/add-event">Add Event</Link>
                    <Link className="nav-link" to="/help">Help</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;
