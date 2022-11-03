import React, { useEffect, useState } from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import Navbar from './Navbar';

const redirectTo = (e) => {
  e.preventDefault()
  window.location = "/Enroll"
}

export default function ViewAcademy() {
  const paperStyle = { padding: '50px 20px', margin: "20px auto" }
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/user/viewAdmission")
      .then(res => res.json())
      .then((result) => {
        setCourses(result);
      }
      )
  }, [])

  return (
    <>
    <Navbar/>
    <Container>
      <div style={{ padding: "20px" }}>
        <h1>View Courses</h1>
      </div>
      <Paper elevation={3} style={paperStyle}>
        {courses.map(course => (
          <Paper elevation={6} style={{ margin: "30px", padding: "15px", textAlign: "left" }} key={course.courseId}>
            <div style={{ padding: "20px" }}>
            <b>Course Id: </b>{course.courseId}<br />
            <b>Course Name: </b>{course.courseName}<br />
            <b>Course Description: </b>{course.courseDesc}<br />
            <b>Course Duration: </b>{course.courseDuration}<br />
            </div>
          </Paper>
        ))
        }
        <div style={{ padding: "20px" }}>
          <Button variant="contained" color="secondary" onClick={redirectTo}>
            Enroll
          </Button>
        </div>
      </Paper>
    </Container>
    </>
  );
}