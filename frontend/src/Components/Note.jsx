import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { deleteNote, updateNote } from '../Services/NoteService';

const Note = ({ note, fetchNotes }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteNote(note._id);
    fetchNotes();
  };

  const handleTogglePin = async () => {
    await updateNote(note._id, { ...note, pinned: !note.pinned });
    fetchNotes();
  };

  const handleEdit = () => {
    navigate(`/edit/${note._id}`);
  };

  return (
    <ListItem>
      <ListItemText primary={note.title} secondary={note.content} />
      <ListItemSecondaryAction>
        <Checkbox edge="end" checked={note.pinned} onChange={handleTogglePin} />
        <IconButton sx={{color:"#5a7be7"}} edge="end" aria-label="edit" onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton sx={{color:"#e26077"}} edge="end" aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Note;



