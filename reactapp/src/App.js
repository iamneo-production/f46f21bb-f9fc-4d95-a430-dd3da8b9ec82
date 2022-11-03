import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import ViewAcademy from './components/ViewAcademy';
import EnrolledCourse from './components/EnrolledCourse';
import Enroll from './components/Enroll';
import AdminAcademy from "./components/AdminAcademy";
import EditInstitue from "./components/EditInstitue";
import AddInstitute from "./components/AddInstitute";
import DeleteInstitue from "./components/DeleteInstitue";
import Admincourse from "./components/Admincourse";
import AddCourse from "./components/AddCourse";
import DeleteCourse from "./components/DeleteCourse";
import EditCourse from "./components/EditCourse";
import Adminstudent from "./components/Adminstudent";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/Signup" element={<Signup/>}/>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/ViewAcademy" element={<ViewAcademy/>}/>
            <Route exact path="/EnrolledCourse" element={<EnrolledCourse/>}/>
            <Route exact path="/Enroll" element={<Enroll/>}/>
            <Route exact path="/AdminAcademy" element={<AdminAcademy/>}/>
            <Route exact path="/EditInstitue" element={<EditInstitue/>}/>
            <Route exact path="/AddInstitute" element={<AddInstitute/>}/>
            <Route exact path="/DeleteInstitue" element={<DeleteInstitue/>}/>
            <Route exact path="/Admincourse" element={<Admincourse/>}/>
            <Route exact path="/AddCourse" element={<AddCourse/>}/>
            <Route exact path="/DeleteCourse" element={<DeleteCourse/>}/>
            <Route exact path="/EditCourse" element={<EditCourse/>}/>
            <Route exact path="/Adminstudent" element={<Adminstudent/>}/>
            <Route exact path="/AddStudent" element={<AddStudent/>}/>
            <Route exact path="/DeleteStudent" element={<DeleteStudent/>}/>
            <Route exact path="/EditStudent" element={<EditStudent/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

