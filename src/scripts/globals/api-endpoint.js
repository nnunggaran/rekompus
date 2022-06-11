import CONFIG from './config';

const API_ENDPOINT = {
  REGISTER: `${CONFIG.BASE_URL}/register`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
  KAMPUS: `${CONFIG.BASE_URL}/kampus`,
  UPDATE_KAMPUS: (id) => `${CONFIG.BASE_URL}/kampus${id}`,
  DETAIL_KAMPUS: (id) => `${CONFIG.BASE_URL}/kampus/${id}`,
};

export default API_ENDPOINT;
