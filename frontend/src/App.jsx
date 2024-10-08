import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';
import EditNote from './Components/EditNote';
import { getNotes } from './Services/NoteService';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Router>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Notes App
        </Typography>
        <Routes>
          <Route path="/" element={<><NoteForm fetchNotes={fetchNotes} /><NoteList notes={notes} fetchNotes={fetchNotes} /></>} />
          <Route path="/edit/:id" element={<EditNote/>} />
          
        </Routes>
      </Container>
    </Router>
  );
};

export default App;



