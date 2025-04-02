import './App.css'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import NavBar from './components/nav-bar'
import News from './components/news'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
