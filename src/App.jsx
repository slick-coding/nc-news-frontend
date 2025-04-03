import './App.css'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import NavBar from './components/nav-bar'
import News from './components/news'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticles } from './api'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
      getArticles().then((articles) => {
        setArticles(articles);
      })
  }, []);

  return (
    <section>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News articles={articles}/>} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
