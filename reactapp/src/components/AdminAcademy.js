import React, { useEffect, useState } from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import AdminNavbar from './AdminNavbar';

const redirectEdit = (e) => {
    e.preventDefault()
    window.location = "/EditInstitue"
}

const redirectDelete = (e) => {
    e.preventDefault()
    window.location = "/DeleteInstitue"
}

const redirectAdd = (e) => {
    e.preventDefault()
    window.location = "/AddInstitute"
}

export default function AdminAcademy() {
    const paperStyle = { padding: '50px 20px', margin: "20px auto" }
    const [institues, setInstitues] = useState([])

    useEffect(() => {
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/viewInstitue")
            .then(res => res.json())
            .then((result) => {
                setInstitues(result);
            }
            )
    }, [])

    return (
        <>
            <AdminNavbar />
            <Container>
                <div style={{ padding: "20px" }}>
                    <h1>Admin Academy</h1>
                </div>
                <Paper elevation={3} style={paperStyle}>
                    {institues.map(institue => (
                        <Paper elevation={6} style={{ margin: "30px", padding: "15px", textAlign: "left" }} key={institue.institueId}>
                            <div style={{ padding: "20px" }}>
                                <b>Institue Id: </b>{institue.institueId}<br />
                                <b>Institue Name: </b>{institue.institueName}<br />
                                <b>Institue Description: </b>{institue.institueDescription}<br />
                                <b>Institue Address: </b>{institue.institueAddress}<br />
                                <b>Institue Mobile: </b>{institue.mobile}<br />
                                <b>Institue Email: </b>{institue.email}<br />
                                <div style={{ textAlign: "right" }}>
                                    <Button id="editAcademy" variant="contained" color="primary" onClick={redirectEdit}>
                                        Edit
                                    </Button>
                                    <div style={{ textAlign: "right", display: "inline", padding: "10px" }}>
                                        <Button id="deleteAcademy" variant="contained" color="secondary" onClick={redirectDelete}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    ))
                    }
                </Paper>
                <Button variant="contained" color="secondary" onClick={redirectAdd}>
                    Add
                </Button>
            </Container>
        </>
    );
}