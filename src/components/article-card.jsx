import { Link } from "react-router-dom";

function ArticleCard({article}) {
    const {article_id, author, title, topic, article_img_url, votes, comment_count} = article
    return <section className="article-card">
        <Link to={`/${article_id}`}>
            <h3>{title}</h3>
            <img src={article_img_url} alt={title} />
            <p>Written by {author}</p>
            <p>✔ {votes} 📜 {comment_count}</p>
            <p>{topic}</p>
        </Link>
    </section>
}

export default ArticleCard;