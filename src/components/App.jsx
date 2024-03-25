import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";
import NewNote from "./NewNote";

function App() {
    const [currNotes, setNotes] = useState(notes);

    function addNote(note) {
        console.log("Note added");
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    return (
        <div>
            <Header />

            <NewNote onAdd={addNote} />

            {currNotes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                    />
                );
            })}

            <Footer />
        </div>
    );
}

export default App;
