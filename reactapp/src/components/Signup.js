import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Signup() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [userRole, setUserRole] = useState('')
    const classes = useStyles();


    const redirectLogin = (e) => {
        e.preventDefault()
        window.location = "/"
    }

    const handleClick = (e) => {
        e.preventDefault()
        const user = { email, password, username, mobileNumber, userRole }
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/signup", {
            method: "POST",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(response => {
            // console.log(response.ok)
            if (response.ok === true) {
                window.location = "/"
            }
        });
    }

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Skating Academy</h1>
            </div>
            <Container>
                <Paper elevation={3} style={paperStyle}>
                    <div style={{ padding: "20px" }}>
                        <h1>Signup</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="admin/user" label="User Role (ADMIN/USER)" variant="outlined" fullWidth
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                        />
                        <TextField id="email" label="Email" variant="outlined" fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField id="username" label="Username" variant="outlined" fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField id="mobileNumber" label="Mobile Number" variant="outlined" fullWidth
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                        <TextField id="password" type="Password" label="Password" variant="outlined" fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField id="confirmPassword" type="Password" label="Confirm Password" variant="outlined" fullWidth />
                        <Button id="submitButton" variant="contained" color="secondary" onClick={handleClick}>
                            Signup
                        </Button>
                        <Button id="signinLink" variant="contained" color="primary" onClick={redirectLogin}>
                            Login
                        </Button>
                    </form>
                </Paper>
            </Container >
        </>
    );
}
