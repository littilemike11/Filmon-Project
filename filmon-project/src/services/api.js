import axios from "axios";

const API_URL = "/api/v1";

export const getStudents = () => axios.get(`${API_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);
export const createStudent = (student) =>
  axios.post(`${API_URL}/students`, student);
export const updateStudent = (id, student) =>
  axios.put(`${API_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);
