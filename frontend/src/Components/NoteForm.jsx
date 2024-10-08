import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';
import { createNote } from '../Services/NoteService';

const NoteForm = ({ fetchNotes }) => {
    debugger;
    const [note, setNote] = useState({ title: '', content: '', category: '', pinned: false });
    debugger;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote({
            ...note,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createNote(note);
        fetchNotes();
        setNote({ title: '', content: '', category: '', pinned: false });
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Create Note
            </Button>
        </form>
    );
};

export default NoteForm;





