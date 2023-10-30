import axiosInstance from "../api/axiosInstance";

const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get("/users");
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getAllUsers;
