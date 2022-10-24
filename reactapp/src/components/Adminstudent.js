import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import AdminNavbar from './AdminNavbar';
import './student.css'

const redirectEdit = (e) => {
    e.preventDefault()
    window.location = "/EditStudent"
}

const redirectDelete = (e) => {
    e.preventDefault()
    window.location = "/DeleteStudent"
}

const redirectAdd = (e) => {
    e.preventDefault()
    window.location = "/AddStudent"
}

export default function Adminstudent() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("https://8080-fedcbfaffcaaaccfdfdccabcfdabdcccb.examlyiopb.examly.io/admin/viewStudent")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            }
            )
    }, [])

    return (
        <>
            <AdminNavbar />
            <div style={{ padding: "20px" }}>
                <h1>Student List</h1>
            </div>
            <div>
                <table id="studentList">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Student Id</th>
                            <th style={{ textAlign: "center" }}>Student Name</th>
                            <th style={{ textAlign: "center" }}>DOB</th>
                            <th style={{ textAlign: "center" }}>Address</th>
                            <th style={{ textAlign: "center" }}>Mobile</th>
                            <th style={{ textAlign: "center" }}>Age</th>
                            <th style={{ textAlign: "center" }}>Actions</th>
                        </tr>
                    </thead>
                    {(
                        <tbody>
                            {students.map(student => (
                                <tr key={student.studentId}>
                                    <td>
                                        <div>{student.studentId}</div>
                                    </td>
                                    <td>
                                        <div>{student.studentName}</div>
                                    </td>
                                    <td>
                                        <div>{student.studentDOB}</div>
                                    </td>
                                    <td>
                                        <div>{student.address}</div>
                                    </td>
                                    <td>
                                        <div>{student.mobile}</div>
                                    </td>
                                    <td>
                                        <div>{student.age}</div>
                                    </td>
                                    <td>
                                        <div style={{ display: "inline", padding: "10px" }}>
                                            <Button id="editStudent" variant="contained" color="primary" onClick={redirectEdit}>
                                                Edit
                                            </Button>
                                            <div style={{ display: "inline", padding: "10px" }}>
                                                <Button id="deleteStudent" variant="contained" color="secondary" onClick={redirectDelete}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    )}
                </table>
            </div>
            <div style={{ padding: "20px" }}>
                <Button id="addStudent" variant="contained" color="secondary" onClick={redirectAdd}>
                    Add
                </Button>
            </div>
        </>
    );
}