import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import ArticleEntry from "./article-entry";
import CommentSection from "./comment-section";


function ArticlePage() {
    const [article, setArticle] = useState([])
    const {article_id} = useParams()
    
    const params = {article_id}

    useEffect(() => {
        getArticle(params).then((article) => {
            setArticle(article)
        })
    }, [])

    return  <section className="article-page">
        <ArticleEntry article={article}/>
        <CommentSection article_id={article_id}/>
    </section>
}

export default ArticlePage;
