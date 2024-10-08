import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Export the functions using the axios instance
export const createNote = (note) => api.post('/newNote', note);
export const getNotes = () => api.get('/getNote');
export const updateNote = (id, updatedNote) => api.put(`/updateNote/${id}`, updatedNote);
export const deleteNote = (id) => api.delete(`/deleteNote/${id}`);
export const getNoteById = (id) => api.get(`/getNotesById/${id}`);
