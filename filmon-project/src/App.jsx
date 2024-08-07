import { useState } from 'react'
import './App.css'
import StudentForm from "./components/StudentForm"
import StudentsDisplay from './components/StudentsDisplay'
import StudentPage from './components/StudentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Student Enrollment</div>
      <StudentForm/>
      <StudentsDisplay/>
      <StudentPage/>
    </>
  )
}

export default App
