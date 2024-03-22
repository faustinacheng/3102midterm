import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
    const [currNotes, setNotes] = useState(notes);

    return (
        <div>
            <Header />

            {currNotes.map((note, index) => {
                return (
                    <Note
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
