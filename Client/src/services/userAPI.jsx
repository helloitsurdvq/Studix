import axios from "axios";

const VITE_APP_BASE_URL = "http://localhost:3000/api";

const baseUrl = VITE_APP_BASE_URL + "/user";

const getProfile = async (token) => {
  const response = await axios.get(`${baseUrl}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}; 

const updateProfile = async (token, profile) => {
  const response = await axios.patch(`${baseUrl}/`, profile, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const changePassword = async (token, oldPassword, newPassword) => {
    const response = await axios.patch(`${baseUrl}/password`, 
      JSON.stringify({oldPassword, newPassword}),
      {headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }}
    );
    return response.data;
};

const getPurchasedCourses = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/courses`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("User purchased courses:", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default { getProfile, updateProfile, changePassword, getPurchasedCourses };
