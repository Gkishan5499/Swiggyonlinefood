import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import { DarkModeProvider } from './component/DarkmodeContext'

import AddCategory from './component/AddCategory.jsx'
import AddResturant from './component/AddResturant.jsx'

function App() {
  
  return (
    <> 
     <DarkModeProvider>
     <BrowserRouter>
     <Header/>
   
      <Routes> 
        
        <Route path='/' Component={Home}/>
        <Route path='about' Component={About}/>

        <Route path='contact' Component={Contact}/>
        <Route path='blog' Component={Blog}/>
        <Route path='addcategory' Component={AddCategory}/>
        <Route path='addresturant' Component={AddResturant}/>


      </Routes>
     </BrowserRouter>
     </DarkModeProvider>
     <Footer/>
 
    </>
  )
}

export default App
