import { useEffect, useState } from 'react'
import './App.css'
import StudentsDisplay from './components/StudentsDisplay'
import NavBar from './components/NavBar'
import { getStudents, deleteStudent } from './services/api'


function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data)
  }
  useEffect(() => {
    fetchStudents();
  }, [])

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    await fetchStudents();
  }

  return (
    <>
      <NavBar />
      <StudentsDisplay
        students={students}
        handleDeleteStudent={handleDeleteStudent}
      />
    </>
  )
}

/*
Bugs*
the filtered students don't get updated when one is deleted, updates on pg refresh or change in searchbar
potential solution- make student display a child of app, and use usecontext to pass the data instead of props
Next steps
1. add image implementation - elias 8/7 recording
2. implement use context to pass info to different pages/routes -dylan
3. better mobile ui scaling
extra
1. admin/teacher
2. login
3. student update their own "goals"
*/
export default App
