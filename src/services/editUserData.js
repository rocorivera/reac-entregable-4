import axiosInstance from "../api/axiosInstance";

const editUserData = async (id, newData) => {
  try {
    await axiosInstance.put(`users/${id}/`, newData);
  } catch (err) {
    console.error(err);
  }
};

export default editUserData;
