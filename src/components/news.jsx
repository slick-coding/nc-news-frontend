import ArticleCard from "./article-card";

function News({articles}) {
    
    return <section>
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
    </section>
}

export default News;
