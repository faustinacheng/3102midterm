import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import NewNote from "./NewNote";

function App() {
    const [currNotes, setNotes] = useState(notes);
    const [currKey, setKey] = useState(notes.length + 1);

    function addNote(note) {
        note.key = currKey;
        setKey((prevKey) => {
            return prevKey + 1;
        });
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => {
                return note.key !== id;
            });
        });
    }

    return (
        <div>
            <Header />

            <NewNote onAdd={addNote} />

            {currNotes.map((note, index) => {
                return (
                    <Note
                        key={note.key}
                        id={note.key}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                );
            })}

            <Footer />
        </div>
    );
}

export default App;
