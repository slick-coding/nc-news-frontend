function ArticleCard({article}) {
    const {author, title, topic, article_img_url, votes, comment_count} = article
    return <section className="article-card">
        <h3>{title}</h3>
        <img src={article_img_url} alt={title} />
        <p>Written by {author}</p>
        <p>✔ {votes} 📜 {comment_count}</p>
        <p>{topic}</p>
    </section>
}

export default ArticleCard;
