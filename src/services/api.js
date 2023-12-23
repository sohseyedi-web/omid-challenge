import axios from "axios";

const BASE_URL = "https://vo2.ir/api";

export const getEventsData = async(data) => {
  return await axios.get(`${BASE_URL}/getEvents`, data).then(({ data }) => data);
};
export const getChartsData = async(data) => {
  return await axios.get(`${BASE_URL}/getChartsData`, data).then(({ data }) => data);
};
