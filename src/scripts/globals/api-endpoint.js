import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  LOGOUT: `${CONFIG.BASE_URL}/logout`,
  USER: `${CONFIG.BASE_URL}/me`,
  REVIEW: `${CONFIG.BASE_URL}/review`,
  KAMPUS: `${CONFIG.BASE_URL}/kampus`,
  DELETE_KAMPUS: (id) => `${CONFIG.BASE_URL}/kampus/${id}`,
  UPDATE_KAMPUS: (id) => `${CONFIG.BASE_URL}/kampus/${id}`,
  DETAIL_KAMPUS: (id) => `${CONFIG.BASE_URL}/kampus/${id}`,
  UPLOAD_LOGO: (id) => `${CONFIG.BASE_URL}/kampus/${id}/pictureid`,
};

export default API_ENDPOINT;
