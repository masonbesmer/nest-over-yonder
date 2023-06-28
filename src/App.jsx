import { useState } from 'react'
import HomePage from './pages/HomePage'
import ListingPage from './pages/ListingPage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'


function App(props) {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listing/:id' element={<ListingPage />} />
          
        </Routes>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App
