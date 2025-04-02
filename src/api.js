import axios from "axios";

const api = axios.create({
    baseURL: "https://northcoders-news-yo3k.onrender.com/api",
    timeout: 10000,
});

const getNews = (params) => {
    return api.get("/articles", { params }).then(({ data: { items } }) => {
        return items;
    });
};

export { getNews };
