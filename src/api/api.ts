import axios from "axios";

// https://rickandmortyapi.com/documentation - api documentation

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (page?: number, name?: string) => {
  try {
    const params = new URLSearchParams();

    if (page) {
      params.append("page", page.toString());
    }

    if (name) {
      params.append("name", name.toString());
    }

    const queryString = params.size ? `?${params.toString()}` : "";

    const response = await axios.get(
      `${API_BASE_URL}/character/${queryString}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};
