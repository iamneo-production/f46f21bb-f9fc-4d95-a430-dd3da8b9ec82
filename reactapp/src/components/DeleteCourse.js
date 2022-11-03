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

export default function DeleteCourse() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [courseId, setCourseId] = useState()
    const [errors, setErrors] = useState({})
    const classes = useStyles();

    const validate = () => {
        let temp = {}
        temp.courseId = courseId ? "" : "Required"
        setErrors({ ...temp })
    }

    const handleClick = (e) => {
        e.preventDefault()
        validate()
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/deleteCourse/" + courseId, {
            method: "DELETE",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            //     body: JSON.stringify(institue)
        }).then(response => {
            // console.log(response)
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
                        <h1>Delete Course</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <div style={{ display: "inline" }}>
                                <i><label>Please enter the course id to be deleted</label></i>
                            </div>
                            <div style={{ display: "inline" }}>
                                <TextField id="deleteCourse" label="Course ID" variant="outlined" fullWidth
                                    value={courseId}
                                    onChange={(e) => setCourseId(e.target.value)}
                                    error={errors.courseId}
                                    helperText="Required"
                                />
                            </div>
                        </div>
                        <Button id="deleteAcademy" variant="contained" color="secondary" onClick={handleClick}>
                            Delete
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}