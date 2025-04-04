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
        .get(`/articles/${article_id}`)
        .then(({ data: { articles } }) => {
            return articles;
        })
        .catch((err) => {
            console.log(err);
        });
};

const getComments = (params) => {
    return api.get(`/articles/${params.article_id}/comments`).then(({ data: { comments } }) => {
        return comments;
    });
};

const updateArticleVotes = (params) => {
    const { article_id, inc_votes } = params;
    return api.patch(`/articles/${article_id}`, { inc_votes });
};

const getUsers = () => {
    return api.get(`/users`).then(({ data: { users } }) => {
        return users;
    });
};

const postComment = (article_id, commentData) => {
    return api.post(`/articles/${article_id}/comments`, commentData);
};

const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}

export { getArticles, getArticle, getComments, updateArticleVotes, getUsers, postComment, deleteComment };
