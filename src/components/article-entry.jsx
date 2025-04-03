import { useEffect } from "react";
import { useState } from "react";
import { getArticle, updateArticleVotes } from "../api";

function ArticleEntry({ article_id }) {
    const [article, setArticle] = useState([]);
    const [upvotes, setUpvotes] = useState(0);
    const [error, setError] = useState(null)

    const date = new Date(article.created_at).toString().split(" ").slice(0, 5).join(" ");
    const params = {article_id}

    useEffect(() => {
        getArticle(params).then((article) => {
            setArticle(article);
            setUpvotes(article.votes)
        });
    }, []);

    const handleUpvote = () => {
        setUpvotes((currentUpvotes) => currentUpvotes + 1);
        setError(null)
        const voteParams = {article_id, inc_votes: 1} 
        updateArticleVotes(voteParams).catch((err)=> {
            setUpvotes((currentUpvotes) => currentUpvotes - 1);
            setError("Upvote unsuccessful. Please try again.")
        })
    };

    const handleDownvote = () => {
        setUpvotes((currentUpvotes) => currentUpvotes - 1);
        setError(null)
        const voteParams = {article_id, inc_votes: -1} 
        updateArticleVotes(voteParams).catch((err)=> {
            setUpvotes((currentUpvotes) => currentUpvotes + 1);
            setError("Downvote unsuccessful. Please try again.")
        })
    }

    return (
        <section className="article-entry">
            <h2>{article.title}</h2>
            <h4>by {article.author}</h4>
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.body}</p>
            <p>Published on {date}</p>
            <p>{upvotes} upvotes.</p>
            <div className="vote-buttons">
                <button onClick={handleUpvote}>Upvote ✅</button>
                <button onClick={handleDownvote}>Downvote ❌</button>
            </div>
            {error ? <p>{error}</p> : null}
        </section>
    );
}

export default ArticleEntry;
