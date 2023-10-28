import axios from "axios";

const getBaseUrl = () => {
  return `${process.env.REACT_APP_BASE_URL}/api/v1/`;
};

const login = async (body) => {
  return axios.post(`${getBaseUrl()}user/login`, body).then(({ data }) => {
    if (!data) throw new Error("User not found");
    else {
      storeToken(data.body.token);
    }
  });
};

const getCurrentProfile = async () => {
  return axios
    .post(`${getBaseUrl()}user/profile`)
    .then(({ data }) => data?.body);
};

const updateProfile = async (body) => {
  return axios
    .put(`${getBaseUrl()}user/profile`, body)
    .then(({ data }) => data?.body);
};

function updateAxiosAuthorization() {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + getAuthToken();

    return config;
  });
}

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const getAuthToken = () => {
  return localStorage.getItem("token") ?? null;
};

export {
  login,
  getCurrentProfile,
  getAuthToken,
  updateAxiosAuthorization,
  updateProfile,
};
