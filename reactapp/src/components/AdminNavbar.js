
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Skating Academy</h1>
      <div className="links">
        <Link id="adminAcademy" to="/AdminAcademy">Academy</Link>
        <Link id="adminCourse" to="/Admincourse">Courses</Link>
        <Link id="adminStudents" to="/Adminstudent">Student</Link>
        <Link id="logout" to="/">Log out</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;