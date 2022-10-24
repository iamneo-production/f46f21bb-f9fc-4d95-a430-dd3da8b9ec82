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

export default function DeleteInstitue() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [institueId, setInstitueId] = useState()

    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/deleteInstitue/" + institueId, {
            method: "DELETE",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
        //     body: JSON.stringify(institue)
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
                        <h1>Delete Academy</h1>
                    </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <div style={{ display: "inline" }}>
                                <i><label>Please enter the institue id to be deleted</label></i>
                            </div>
                            <div style={{ display: "inline" }}>
                                <TextField id="deleteInstitute" label="Institute ID" variant="outlined" fullWidth
                                    value={institueId}
                                    onChange={(e) => setInstitueId(e.target.value)}
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