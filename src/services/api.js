import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

export const fetchDashboard = async () => {
  const res = await axios.get(`${API_BASE}/dashboard`);
  return res.data;
};