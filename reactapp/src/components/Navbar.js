
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Skating Academy</h1>
      <div className="links">
        <Link id="userAcademy" to="/ViewAcademy">Academy</Link>
        <Link id="userEnrolledCourse" to="/EnrolledCourse">Enrolled Courses</Link>
        <Link id="logout" to="/">Log out</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;