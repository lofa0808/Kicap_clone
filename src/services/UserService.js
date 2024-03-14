import axios from 'axios';

export const axiosJWT = axios.create();

const loginUser = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_KEY}/user/sign-in`, data);
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_KEY}/user/sign-out`);
  return res.data;
};

const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(`${import.meta.env.VITE_REACT_APP_API_KEY}/user/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

const UserService = {
  loginUser,
  logoutUser,
  getDetailsUser,
};

export default UserService;
