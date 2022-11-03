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

export default function AddInstitute() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [institueName, setInstitueName] = useState('')
    const [institueDescription, setInstitueDescription] = useState('')
    const [institueAddress, setInstitueAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})
    const classes = useStyles();

    const validate = () => {
        let temp = {}
        temp.institueName = institueName ? "" : "Required"
        temp.institueDescription = institueDescription ? "" : "Required"
        temp.institueAddress = institueAddress ? "" : "Required"
        temp.mobile = mobile ? "" : "Required"
        temp.email = (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email)?"":"Email format is incorrect"
        setErrors({ ...temp })
    }

    const handleClick = (e) => {
        e.preventDefault()
        validate()
        const institue = { institueName, institueDescription, institueAddress, mobile, email }
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/addInstitue", {
            method: "POST",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            body: JSON.stringify(institue)
        }).then(response => {
            // console.log(response)
            if (response.ok === true) {
                window.location = "/AdminAcademy"
            }
        });
    }

    return (
        <>
            <AdminNavbar />
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <div style={{ padding: "20px" }}>
                        <h1>Add Academy</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="academyName" label="Institue Name" variant="outlined" fullWidth
                            value={institueName}
                            onChange={(e) => setInstitueName(e.target.value)}
                            error={errors.institueName}
                            helperText="Required"
                        />
                        <TextField id="academyLocation" label="Institue Address" variant="outlined" fullWidth
                            value={institueAddress}
                            onChange={(e) => setInstitueAddress(e.target.value)}
                            error={errors.institueAddress}
                            helperText="Required"
                        />
                        <TextField id="contactNumber" label="Mobile" variant="outlined" fullWidth
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            error={errors.mobile}
                            helperText="Required"
                        />
                        <TextField id="emailId" label="Email" variant="outlined" fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email}
                            helperText="Email format is incorrect"
                        />
                        <TextField id="academyDescription" label="Institue Description" variant="outlined" fullWidth
                            value={institueDescription}
                            onChange={(e) => setInstitueDescription(e.target.value)}
                            error={errors.institueDescription}
                            helperText="Required"
                        />
                        <Button id="addAcademy" variant="contained" color="secondary" onClick={handleClick}>
                            Add Academy
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}