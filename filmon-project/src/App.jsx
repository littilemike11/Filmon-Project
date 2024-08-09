import { useEffect, useState } from 'react'
import './App.css'
import StudentsDisplay from './components/StudentsDisplay'
import NavBar from './components/NavBar'
import { getStudents } from './services/api'


function App() {
  const [students, setStudents] = useState([])

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data)
  }
  useEffect(() => {
    fetchStudents();
  }, [])

  return (
    <>
      <NavBar />
      <StudentsDisplay
        students={students}
      />
    </>
  )
}

/*
Next steps
1. add image implementation - elias 8/7 recording
2. custom routing based on student Name - dylan
3. implement use context to pass info to different pages/routes -dylan
4. better mobile ui scaling
extra
1. admin/teacher
2. login
3. student update their own "goals"
*/
export default App
