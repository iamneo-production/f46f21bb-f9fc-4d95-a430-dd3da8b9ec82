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

export default function Login() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [notadmin, setNotadmin] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [errors, setErrors] = useState({})

  const classes = useStyles();

  const validate = () => {
    let temp = {}
    temp.email = (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(email)?"":"Email format is incorrect"
    temp.password = password?"":"Password is required" 
    setErrors({...temp})
  }

  const redirectSignup = (e) => {
    e.preventDefault()
    window.location = "/Signup"
  }

  const handleClick = (e) => {
    e.preventDefault()
    validate()
    fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/login/" + email + "/" + password, {
      method: "GET",
      headers: { Accept: 'application/json', "Content-Type": "application/json" },

    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          if (json === true) {
            setAdmin(true)
            setNotadmin(false)
            setLoggedIn(true)
            window.location = "/AdminAcademy"
          }
        });
      }
    });
    fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/user/login/" + email + "/" + password, {
      method: "GET",
      headers: { Accept: 'application/json', "Content-Type": "application/json" },

    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          if (json === true) {
            setNotadmin(true)
            setAdmin(false)
            setLoggedIn(true)
            window.location = "/ViewAcademy"
          }
        });
      }
    });
    console.log("admin");
    console.log(admin);
    console.log("loggedIn");
    console.log(loggedIn);
    console.log("user");
    console.log(notadmin);
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Skating Academy</h1>
      </div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Login</h1>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="email" label="Email" variant="outlined" fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              helperText = "Email format incorrect"
            />
            <TextField id="password" type="password" label="Password" variant="outlined" fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              helperText = "Password required"
            />
            <Button id="loginButton" variant="contained" color="secondary" onClick={handleClick}>
              Login
            </Button>
            <Button id="signupLink" variant="contained" color="primary" onClick={redirectSignup}>
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}