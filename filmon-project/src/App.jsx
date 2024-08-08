import { useEffect, useState } from 'react'
import './App.css'
import StudentForm from "./components/StudentForm"
import StudentsDisplay from './components/StudentsDisplay'
import StudentPage from './components/StudentPage'
import { getStudents } from './services/api'

function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    const response = await getStudents();
    console.log(response.data)
  }
  useEffect(() => {
    fetchStudents();
  }, [])
  return (
    <>
      <div>St Mary</div>

      <StudentsDisplay />

    </>
  )
}

export default App
