import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BoardPage } from './pages/BoardPage'
import { ErrorPage } from './pages/ErrorPage'
import { TodoPage } from './pages/TodoPage'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<BoardPage />} />
      <Route path="/todo/:id" element={<TodoPage />}/>
      <Route path="*" element={<ErrorPage />} />
     </Routes>
    </>
  )
}

export default App
