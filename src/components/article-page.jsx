import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import ArticleEntry from "./article-entry";
import CommentSection from "./comment-section";


function ArticlePage() {
    const {article_id} = useParams()

    return  <section className="article-page">
        <ArticleEntry article_id={article_id}/>
        <CommentSection article_id={article_id}/>
    </section>
}

export default ArticlePage;
