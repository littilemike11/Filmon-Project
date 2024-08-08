import { useEffect, useState } from "react"
import StudentCard from "./StudentCard"
import { Link } from "react-router-dom"
export default function studentsDisplay(props) {
    const [searchText, setSearchText] = useState("")
    const [filteredStudents, setFilteredStudents] = useState(props.students)

    const handleFilter = (e) => {
        const value = e.target.value;
        setSearchText(value)
        const filtered = props.students.filter(student =>
            student.Name.toLowerCase().includes(value.toLowerCase()));//if searchText is used instead of value, its not updated by 1
        setFilteredStudents(filtered);
    };

    console.log(searchText)
    console.log(filteredStudents)

    return (
        <>
            {/* search bar */}
            <div className="flex">
                <div className="flex-1">
                    <label className="input input-bordered flex items-center my-4 gap-2">
                        <input type="text" value={searchText} onChange={handleFilter} className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                {/* how to center properly */}
                <Link to={"/enroll"}><button className="btn ml-2 btn-outline mt-4">New</button></Link>
            </div>

            {
                //if there is search text, map filtered list
                searchText ?
                    <ul>
                        {filteredStudents.map((student, index) => (
                            <li key={index}>
                                <StudentCard
                                    student={student}
                                />
                            </li>
                        ))}
                    </ul>
                    :
                    //otherwise, no search text, show original list - needed to show on for refreshes
                    <ul>
                        {props.students.map((student, index) => (
                            <li key={index}>
                                <StudentCard
                                    student={student}
                                />
                            </li>
                        ))}

                    </ul>
            }

        </>
    )
}