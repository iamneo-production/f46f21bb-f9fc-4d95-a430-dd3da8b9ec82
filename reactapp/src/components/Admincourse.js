import React, { useEffect, useState } from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import AdminNavbar from './AdminNavbar';

const redirectEdit = (e) => {
    e.preventDefault()
    window.location = "/EditCourse"
}

const redirectDelete = (e) => {
    e.preventDefault()
    window.location = "/DeleteCourse"
}

const redirectAdd = (e) => {
    e.preventDefault()
    window.location = "/AddCourse"
}

export default function Admincourse() {
    const paperStyle = { padding: '50px 20px', margin: "20px auto" }
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/viewCourse")
            .then(res => res.json())
            .then((result) => {
                setCourses(result);
            }
            )
    }, [])

    return (
        <>
            <AdminNavbar />
            <Container>
                <div style={{ padding: "20px" }}>
                    <h1>Admin Course</h1>
                </div>
                <Paper elevation={3} style={paperStyle}>
                    {courses.map(course => (
                        <Paper elevation={6} style={{ margin: "30px", padding: "15px", textAlign: "left" }} key={course.courseId}>
                            <div style={{ padding: "20px" }}>
                                <b>Course Id: </b>{course.courseId}<br />
                                <b>Course Name: </b>{course.courseName}<br />
                                <b>Course Description: </b>{course.courseDescription}<br />
                                <b>Course Duration: </b>{course.courseDuration}<br />
                                <div style={{ textAlign: "right" }}>
                                    <Button id="editCourse" variant="contained" color="primary" onClick={redirectEdit}>
                                        Edit
                                    </Button>
                                    <div style={{ textAlign: "right", display: "inline", padding: "10px" }}>
                                        <Button id="deleteCourse" variant="contained" color="secondary" onClick={redirectDelete}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))
                    }
                </Paper>
                <div style={{ padding: "20px" }}>
                    <Button id="addCourse" variant="contained" color="secondary" onClick={redirectAdd}>
                        Add
                    </Button>
                </div>
            </Container>
        </>
    );
}