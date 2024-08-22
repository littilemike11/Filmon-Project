import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createStudent, updateStudent } from "../services/api"
import ErrorMessage from "./ErrorMessage";
import NavBar from "./NavBar";
export default function StudentForm() {
    const navigate = useNavigate()
    const location = useLocation();
    const student = location.state;
    const [isUpdate, setIsUpdate] = useState() // where im updating or creating
    const [newStudent, setNewStudent] = useState(() => {
        // Check if student exists and set default values if not
        if (student) {
            setIsUpdate(true)
            return {
                Name: student.Name || "",
                GPA: student.GPA || 0,
                School: student.School || "",
                Grade: student.Grade || "",
                Prayer: student.Prayer || "",
                TigrinyaLevel: student.TigrinyaLevel || "",
                Qidasse: student.Qidasse || "",
                BiblePg: student.BiblePg || 0
            };
        } else {
            // Return default values if no student
            setIsUpdate(false)
            return {
                Name: "",
                GPA: 0,
                School: "",
                Grade: "",
                Prayer: "",
                TigrinyaLevel: "",
                Qidasse: "",
                BiblePg: 0
            };
        }
    });
    //error handling
    const [isError, setIsError] = useState(false);

    const handleInputChange = (e) => {
        setIsError(false)
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value })
    }
    const handleCreateStudent = async () => {
        //if no name return error
        if (!newStudent.Name) {

            setIsError(true)
            return
        }
        //console.log("new Student", newStudent)
        //api call to create student in db
        await createStudent(newStudent)
        //reset new student
        setNewStudent(
            {
                Name: "",
                GPA: 0,
                School: "",
                Grade: "",
                Prayer: "",
                TigrinyaLevel: "",
                Qidasse: "",
                BiblePg: 0
            }
        )
    }
    const handleUpdateStudent = async () => {
        //if no name return error
        if (!newStudent.Name) {
            console.log("Please provide student name")
            setIsError(true)
            return
        }

        //api call to update student in db
        await updateStudent(student._id, newStudent)
        navigate("/")
    }

    return (
        <>
            <NavBar />
            <div className="mt-5 text-3xl">
                {isUpdate ? `Updating ${student.Name}` : "Student Enrollment"}
            </div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input type="text" name="Name" placeholder="Full Name" value={newStudent.Name}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                {isError &&
                    <div className="mt-4">
                        <ErrorMessage errorText="Please provide Student Name" />
                    </div>
                }
                <div className="label">
                    <span className="label-text">GPA</span>
                </div>
                <input type="Number" name="GPA" max={4.0} min={0} step={.1} placeholder="GPA" value={newStudent.GPA}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Grade</span>
                </div>
                <input type="text" name="Grade" placeholder="Grade" value={newStudent.Grade}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">School</span>
                </div>
                <input type="text" name="School" placeholder="School Name" value={newStudent.School}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Prayer</span>
                </div>
                <input type="text" name="Prayer" placeholder="Prayer" value={newStudent.Prayer}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Qidasse</span>
                </div>
                <input type="text" name="Qidasse" placeholder="Qidasse" value={newStudent.Qidasse}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Tirgrinya</span>
                </div>
                <input type="text" name="TigrinyaLevel" placeholder="Tirgrinya" value={newStudent.TigrinyaLevel}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
                <div className="label">
                    <span className="label-text">Bible Page</span>
                </div>
                <input type="text" name="BiblePg" placeholder="Bible Page" value={newStudent.BiblePg}
                    onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />

            </label>
            <button onClick={isUpdate ? handleUpdateStudent : handleCreateStudent} className="btn mt-4">Submit</button>
        </>
    )
}


