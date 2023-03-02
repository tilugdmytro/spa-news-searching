import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";
const searchResults = 15;

export async function fetchArticles() {
  try {
    const { data } = await axios.get(`articles?_limit=${searchResults}`);
    // console.log("был fetch для всех ");
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticleById(articleId) {
  try {
    const { data } = await axios.get(`articles/${articleId}`);
    // console.log("был fetch для одной ");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchArticlesByQuery(query) {
  try {
    const { data } = await axios.get(`articles/?title_contains=${query}`);
    // console.log("был fetch по поиску ");
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
