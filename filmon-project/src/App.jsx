import { useState } from 'react'
import './App.css'
import StudentForm from "./components/StudentForm"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>hello</div>
      <StudentForm/>
    </>
  )
}

export default App
