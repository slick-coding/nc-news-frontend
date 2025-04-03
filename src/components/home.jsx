import { Link } from "react-router-dom";
import ArticleCard from "./article-card";

function Home({ articles }) {
    return (
        <section className="home-page">
            <section className="latest-news">
                <h2>Latest News</h2>
                <section className="latest-news-cards">
                    {articles.map((article, index) => {
                        if (index < 3) {
                            return <ArticleCard key={article.article_id} article={article} />;
                        }
                    })}
                </section>
                <Link to="/news"><h4>See more news.</h4></Link>
            </section>
        </section>
    );
}

export default Home;
