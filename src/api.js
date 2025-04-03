import axios from "axios";

const api = axios.create({
    baseURL: "https://northcoders-news-yo3k.onrender.com/api",
    timeout: 10000,
});

const getArticles = (params) => {
    return api.get("/articles").then(({ data: { articles } }) => {
        return articles;
    });
};

export { getArticles };
