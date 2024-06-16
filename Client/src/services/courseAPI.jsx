import axios from "axios";

const VITE_APP_BASE_URL = "http://localhost:3000/api";

const baseUrl = VITE_APP_BASE_URL + "/courses";

const getCourses = async (keyword) => {
  try {
    const endpoint = keyword ? `${baseUrl}/?keyword=${keyword}` : baseUrl;
    const response = await axios.get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Course display successfully:", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getCourseById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Course: ", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

const updateRating = async (id, token, rating) => {
  try {
    const response = await axios.post(`${baseUrl}/${id}/rating`, {rating}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Course updated rating: ", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default {
  getCourses,
  getCourseById,
  updateRating
};