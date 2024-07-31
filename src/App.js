import React from 'react'
import Navbar from './Components/Navbar.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckBmi from './Components/CheckBmi.js'
import Contact from './Components/Contact.js'
import Food from './Components/Food.js'
import Home from './Components/Home.js'
import Movie from './Components/Movie.js'
import Product from './Components/Product.js'
import News from './Components/News.js'
import Weather from './Components/Weather.js'
import Login from './Components/Login.js'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='checkBmi' element={<CheckBmi />}></Route>

          <Route path='contact' element={<Contact />}></Route>
          <Route path='weather' element={<Weather />}></Route>
          <Route path='news' element={<News />}></Route>
          <Route path='movie' element={<Movie />}></Route>
          <Route path='food' element={<Food />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
