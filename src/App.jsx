import './App.css'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import NavBar from './components/nav-bar'
import News from './components/news'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticles } from './api'
import ArticlePage from './components/article-page'

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
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/articles" element={<News articles={articles}/>} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
