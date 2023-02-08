import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";
const searchResults = 15;

export async function fetchArticles() {
  try {
    const { data } = await axios.get(`articles?_limit=${searchResults}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticleById(articleId) {
  try {
    const { data } = await axios.get(`articles/${articleId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticleByQuery(query) {
  try {
    const { data } = await axios.get(`articles/?title_contains=${query}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
