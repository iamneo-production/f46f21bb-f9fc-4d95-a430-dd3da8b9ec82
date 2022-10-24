import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Enroll() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [courseId, setCourseId] = useState()
    const [studentId, setStudentId] = useState(0)
    const [institueId, setInstitueId] = useState(0)
    const [status, setStatus] = useState("in progress")
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [age, setAge] = useState()
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        setCourseId(Number(courseId))
        const admission = {studentId, courseId, institueId, status}
        const student = { name, dob, address, mobile, age }
        console.log(student)
        console.log(admission)
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/user/addAdmission", {
            method: "POST",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            body: JSON.stringify(admission)
        }).then(response => {
            console.log(response.ok)
            if (response.ok === true) {
                window.location = "/EnrolledCourse"
            }
        });
    }

    return (
        <>
            <Navbar />
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <div style={{ padding: "20px" }}>
                        <h1>Enroll Course</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="courseId" label="Course Id" variant="outlined" fullWidth
                            value={courseId}
                            onChange={(e) => setCourseId(e.target.value)}
                        />
                        <TextField id="name" label="Name" variant="outlined" fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField id="dob" label="DOB (DD-MM-YYYY)" variant="outlined" fullWidth
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <TextField id="address" label="Address" variant="outlined" fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <TextField id="mobile" label="Mobile" variant="outlined" fullWidth
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <TextField id="age" label="Age" variant="outlined" fullWidth
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <Button id="submitButton" variant="contained" color="secondary" onClick={handleClick}>
                            Enroll Now
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}