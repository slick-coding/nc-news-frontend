import axios from "axios";

const api = axios.create({
    baseURL: "https://northcoders-news-yo3k.onrender.com/api",
    timeout: 60000,
});

const getArticles = (params) => {
    return api.get("/articles").then(({ data: { articles } }) => {
        return articles;
    });
};

const getArticle = (params) => {
    const { article_id } = params;
    return api
        .get(`/articles/${article_id}`).then(({data: {articles}}) => {
            return articles;
        }).catch((err)=>{
            console.log(err)
        });
};

const getComments = (params) => {
    return api.get(`/articles/${params.article_id}/comments`).then(({ data: { comments } }) => {
        return comments
    })
}

export { getArticles, getArticle, getComments };
