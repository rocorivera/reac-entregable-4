import axiosInstance from "../api/axiosInstance";

const createUser = async (data) => {
  try {
    await axiosInstance.post("users/", data);
  } catch (err) {
    console.error(err);
  }
};

export default createUser;
