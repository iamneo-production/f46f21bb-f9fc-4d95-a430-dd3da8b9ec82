import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import AdminNavbar from './AdminNavbar';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function AddCourse() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [courseName, setCourseName] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [courseDuration, setCourseDuration] = useState()
    const [errors, setErrors] = useState({})
    const classes = useStyles();

    const validate = () => {
        let temp = {}
        temp.courseName = courseName ? "" : "Required"
        temp.courseDescription = courseDescription ? "" : "Required"
        temp.courseDuration = courseDuration ? "" : "Required"
        setErrors({ ...temp })
    }

    const handleClick = (e) => {
        e.preventDefault()
        validate()
        setCourseDuration(Number(courseDuration))
        const course = { courseName, courseDescription, courseDuration }
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/addCourse", {
            method: "POST",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            body: JSON.stringify(course)
        }).then(response => {
            console.log(response)
            if (response.ok === true) {
                window.location = "/AdminCourse"
            }
        });
    }

    return (
        <>
            <AdminNavbar />
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <div style={{ padding: "20px" }}>
                        <h1>Add Course</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="courseName" label="Course Name" variant="outlined" fullWidth
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            error={errors.courseName}
                            helperText="Required"
                        />
                        <TextField id="courseDescription" label="Course Description" variant="outlined" fullWidth
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                            error={errors.courseDescription}
                            helperText="Required"
                        />
                        <TextField id="courseDuration" label="Course Duration" variant="outlined" fullWidth
                            value={courseDuration}
                            onChange={(e) => setCourseDuration(e.target.value)}
                            error={errors.courseDuration}
                            helperText="Required"
                        />
                        <Button id="addCourse" variant="contained" color="secondary" onClick={handleClick}>
                            Add Course
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}
