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

export default function DeleteStudent() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [studentId, setStudentId] = useState()
    const [errors, setErrors] = useState({})
    const classes = useStyles();

    const validate = () => {
        let temp = {}
        temp.studentId = studentId ? "" : "Required"
        setErrors({ ...temp })
    }

    const handleClick = (e) => {
        e.preventDefault()
        validate()
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/deleteStudent/" + studentId, {
            method: "DELETE",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
        //     body: JSON.stringify(institue)
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
                        <h1>Delete Student</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <div style={{ display: "inline" }}>
                                <i><label>Please enter the student id to be deleted</label></i>
                            </div>
                            <div style={{ display: "inline" }}>
                                <TextField id="deleteStudent" label="Student ID" variant="outlined" fullWidth
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    error={errors.studentId}
                                    helperText="Required"
                                />
                            </div>
                        </div>
                        <Button id="deleteStudent" variant="contained" color="secondary" onClick={handleClick}>
                            Delete
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}