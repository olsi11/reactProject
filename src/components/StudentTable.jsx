import React, { useContext, useState } from "react";
import ButtonList from "./ButtonList";
import Input from "./Input";
import TableListContext from "../Context/TableListContext";
import "./StudentTable.css";

function StudentTable() {
    const { tableList, deleteTableItem, setTableList } = useContext(TableListContext);
    const [newStudent, setNewStudent] = useState({ text: "", rating: "", age: "" });

    const addStudent = () => {
        if (newStudent.text && newStudent.rating && newStudent.age) {
            const newStudentData = {
                id: tableList.length + 1,
                text: newStudent.text,
                rating: parseInt(newStudent.rating),
                age: parseInt(newStudent.age),
            };
            setTableList([...tableList, newStudentData]); // Use setTableList to update the state
            setNewStudent({ text: "", rating: "", age: "" });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const isButtonDisabled =
        newStudent.text.length < 3 || // Text must have at least 3 characters
        isNaN(newStudent.rating) || newStudent.rating < 1 || newStudent.rating > 10 || // Rating must be a number between 1 and 10
        isNaN(newStudent.age) || newStudent.age.length < 1; // Age must be a number and at least 1 character

    return (
        <div className="flex flex-col items-center">
            <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">TEXT</th>
                        <th className="border border-gray-300 px-4 py-2">RATING</th>
                        <th className="border border-gray-300 px-4 py-2">AGE</th>
                        <th className="border border-gray-300 px-4 py-2">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {tableList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">{item.text}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.rating}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                    onClick={() => deleteTableItem(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex space-x-2">
                <Input
                    value={newStudent.text}
                    onChange={handleInputChange}
                    placeholder="Text"
                    name="text"
                    className="border-gray-300"
                />
                <Input
                    value={newStudent.rating}
                    onChange={handleInputChange}
                    placeholder="Rating"
                    name="rating"
                    className="border-gray-300"
                />
                <Input
                    value={newStudent.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    name="age"
                    className="border-gray-300"
                />
            </div>
            <ButtonList
                onClick={addStudent}
                className={`mt-4 px-4 py-2 rounded ${
                    isButtonDisabled
                        ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled state
                        : "bg-blue-500 text-white hover:bg-blue-600" // Enabled state
                }`}
                disabled={isButtonDisabled}
            >
                Add Student
            </ButtonList>
        </div>
    );
}

export default StudentTable;