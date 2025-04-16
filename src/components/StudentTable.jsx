import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./StudentTable.css";

function StudentTable() {
    const [students, setStudents] = useState([
        { firstName: "John", lastName: "Doe", age: "20" },
        { firstName: "Jane", lastName: "Smith", age: "22" },
    ]);

    const [newStudent, setNewStudent] = useState({ firstName: "", lastName: "", age: "" });

    const addStudent = () => {
        if (newStudent.firstName && newStudent.lastName && newStudent.age) {
            setStudents([...students, newStudent]);
            setNewStudent({ firstName: "", lastName: "", age: "" });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name} to ${value}`); // Debugging log
        setNewStudent({ ...newStudent, [name]: value });
    };

    return (
        <div className="flex flex-col items-center">
            <table className="table-auto border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">FIRST NAME</th>
                        <th className="border border-gray-400 px-4 py-2">LAST NAME</th>
                        <th className="border border-gray-400 px-4 py-2">AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{student.firstName}</td>
                            <td className="border border-gray-400 px-4 py-2">{student.lastName}</td>
                            <td className="border border-gray-400 px-4 py-2">{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex space-x-2">
                <Input
                    value={newStudent.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    name="firstName"
                />
                <Input
                    value={newStudent.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    name="lastName"
                />
                <Input
                    value={newStudent.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    name="age"
                />
            </div>
            <Button onClick={addStudent} className="mt-4">
                Add Student
            </Button>
        </div>
    );
}

export default StudentTable;