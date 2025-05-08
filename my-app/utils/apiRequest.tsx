import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://api.dictionaryapi.dev/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your-token",
  },
});

export async function wordDefinitionSearch(word: string) {
  const searchResult = await baseURL.get(`api/v2/entries/en/${word}`);

  return searchResult.data[0];
}
wordDefinitionSearch("hello");
