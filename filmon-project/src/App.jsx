import { useEffect, useState } from 'react'
import './App.css'
import StudentsDisplay from './components/StudentsDisplay'
import NavBar from './components/NavBar'
import { getStudents, deleteStudent } from './services/api'


function App() {
  const [students, setStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [searchText, setSearchText] = useState("")

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data)
  }
  useEffect(() => {
    fetchStudents();
  }, [])

  const handleFilter = (e) => {
    const value = e.target.value;
    setSearchText(value)
    const filtered = students.filter(student =>
      student.Name.toLowerCase().includes(value.toLowerCase()));//if searchText is used instead of value, its not updated by 1
    console.log(filtered)
    setFilteredStudents(filtered);
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    await fetchStudents();
    //filters out the deleted students
    setFilteredStudents(students.filter(student => student._id !== id))

  }

  return (
    <>
      <NavBar />
      <StudentsDisplay
        students={students}
        filteredStudents={filteredStudents}
        searchText={searchText}
        setSearchText={setSearchText}
        handleFilter={handleFilter}
        setFilteredStudents={setFilteredStudents}
        handleDeleteStudent={handleDeleteStudent}
      />
    </>
  )
}

/*
Bugs*
the filtered students don't get updated when one is deleted, updates on pg refresh or change in searchbar
potential solution- make student display a child of app, and use usecontext to pass the data instead of props
second potential solution - solve two bird 1 stone - have a check on delete, so you dont accidently delete students
ie a popup to confirm that you want to delete this student
also delete should only be visible to teacher
Next steps
1. add image implementation - elias 8/7 recording
2. implement use context to pass info to different pages/routes -dylan
3. better mobile ui scaling
4. change routes
extra
1. admin/teacher
2. login
3. student update their own "goals"
*/
export default App
