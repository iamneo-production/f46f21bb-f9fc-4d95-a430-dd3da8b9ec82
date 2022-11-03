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

export default function AddStudent() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [studentName, setStudentName] = useState('')
    const [studentDOB, setStudentDOB] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [age, setAge] = useState()
    const [errors, setErrors] = useState({})
    const classes = useStyles();

    const validate = () => {
        let temp = {}
        temp.studentName = studentName ? "" : "Required"
        temp.studentDOB = studentDOB ? "" : "Required"
        temp.address = address ? "" : "Required"
        temp.mobile = mobile ? "" : "Required"
        temp.age = age ? "" : "Required"
        setErrors({ ...temp })
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        validate()
        setAge(Number(age))
        const student = { studentName, studentDOB, address, mobile, age }
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/addStudent", {
            method: "POST",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(response => {
            // console.log(response)
            if (response.ok === true) {
                window.location = "/Adminstudent"
            }
        });
    }

    return (
        <>
            <AdminNavbar />
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <div style={{ padding: "20px" }}>
                        <h1>Add Student</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="studentName" label="Student Name" variant="outlined" fullWidth
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            error={errors.studentName}
                            helperText="Required"
                        />
                        <TextField id="studentDOB" label="Student DOB (DD-MM-YYYY)" variant="outlined" fullWidth
                            value={studentDOB}
                            onChange={(e) => setStudentDOB(e.target.value)}
                            error={errors.studentDOB}
                            helperText="Required"
                        />
                        <TextField id="address" label="Address" variant="outlined" fullWidth
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            error={errors.address}
                            helperText="Required"
                        />
                        <TextField id="mobile" label="Mobile" variant="outlined" fullWidth
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            error={errors.mobile}
                            helperText="Required"
                        />
                        <TextField id="age" label="Age" variant="outlined" fullWidth
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            error={errors.age}
                            helperText="Required"
                        />
                        <Button id="addStudent" variant="contained" color="secondary" onClick={handleClick}>
                            Add Student
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}
