import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

export async function fetchArticles() {
  try {
    const { data } = await axios.get("articles?_limit=20&_start=6");
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

export async function fetchArticleByFilter(filter) {
  try {
    const { data } = await axios.get(`articles/?title_contains=${filter}`);
    // const arrSummary = await axios.get(`articles/?summary_contains=${filter}`);
    // const data = [...arrTitle.data, ...arrSummary.data];
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
