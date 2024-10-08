import React from 'react';
import Note from './Note';
import { List } from '@mui/material';

const NoteList = ({ notes, fetchNotes }) => {
    return (
        <List>
            
            {notes.map(note => (
                <Note key={note._id} note={note} fetchNotes={fetchNotes} />
            ))}
        </List>
    );
};

export default NoteList;



