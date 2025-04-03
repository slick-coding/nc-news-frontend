function ArticleEntry({article}) {
    const date = (new Date(article.created_at)).toString().split(" ").slice(0,5).join(" ");

    return <section className="article-entry">
        <h2>{article.title}</h2>
        <h4>by {article.author}</h4>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>Published on {date}</p>
        <p>{article.votes} upvotes.</p>
    </section>
}

export default ArticleEntry;
