// EditNote.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, Container, Typography } from '@mui/material';
import { getNoteById, updateNote } from '../Services/NoteService';

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: '',
    pinned: false,
  });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getNoteById(id);
        setNote(response.data.note);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };
    fetchNote();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    
    try {
      await updateNote(id, note);
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Note
      </Typography>
      <form>
        <TextField
          label="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Content"
          name="content"
          value={note.content}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          label="Category"
          name="category"
          value={note.category}
          onChange={handleChange}
          fullWidth
          required
          select
          margin="normal"
        >
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <Button type="button" variant="contained" color="primary" fullWidth onClick={handleSave}>
          Save
        </Button>
      </form>
    </Container>
  );
};

export default EditNote;






