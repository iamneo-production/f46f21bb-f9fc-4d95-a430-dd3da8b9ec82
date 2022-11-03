import React, { useEffect, useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import Navbar from './Navbar';

export default function EnrolledCourse() {
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
            <Navbar />
            <Container>
                <div style={{ padding: "20px" }}>
                    <h1>Enrolled Courses</h1>
                </div>
                <Paper elevation={3} style={paperStyle}>
                    {courses.map(course => (
                        <Paper elevation={6} style={{ margin: "30px", padding: "15px", textAlign: "left" }} key={course.courseId}>
                            <div style={{ padding: "20px" }} id="enrolledCourse">
                                <b>Course Id: </b>{course.courseId}<br />
                                <b>Course Name: </b>{course.courseName}<br />
                                <b>Course Description: </b>{course.courseDesc}<br />
                                <b>Course Duration: </b>{course.courseDuration}<br />
                                <b>Status: </b>{course.status}
                            </div>
                        </Paper>
                    ))
                    }
                </Paper>
            </Container>
        </>
    );
}