function ArticleCard({article}) {
    const {author, title, topic, article_img_url, votes, comment_count} = article
    console.log(article)
    return <section className="article-card">
        <h3>{title}</h3>
        <img src={article_img_url} alt={title} />
        <p>{topic}</p>
        <p>Written by {author}</p>
        <p>✔ {votes} 📜 {comment_count}</p>
    </section>
}

export default ArticleCard;
