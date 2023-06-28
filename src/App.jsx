import { useState } from 'react'
import HomePage from './pages/HomePage'
import ListingPage from './pages/ListingPage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/listing' element={<ListingPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App
