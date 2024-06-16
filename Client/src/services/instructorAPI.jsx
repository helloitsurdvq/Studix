import axios from "axios";

const VITE_APP_BASE_URL = "http://localhost:3000/api";

const baseUrl = VITE_APP_BASE_URL + "/instructor";

const createCourse = async (token, data) => {
    const response = await axios.post(`${baseUrl}/courses`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Course created successfully:", response.data);
    return response.data;
};

const getPublishedCourse = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/courses`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Instructor created course:", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getCourseById = async (token, id) => {
  try {
    const response = await axios.get(`${baseUrl}/courses/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteCourse = async (token, id) => {
    const response = await axios.delete(`${baseUrl}/courses/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Course marked for deletion:', response.data);
    return response.data;
};

const updateWithImage = async (
  token,
  id,
  formData
) => {
    const response = await axios.patch(
      `${baseUrl}/courses/${id}/images`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    );
    console.log("New update course information:", response.data);
    return response.data.course;
};

const updateCourse = async (
  token,
  id,
  data
) => {
    console.log(data);
    const response = await axios.patch(
      `${baseUrl}/courses/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("New update course information:", response.data);
    return response.data;
};

export default {
  createCourse,
  getPublishedCourse,
  getCourseById,
  deleteCourse,
  updateCourse,
  updateWithImage
};