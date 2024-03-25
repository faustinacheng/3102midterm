import React, { useState } from "react";

function NewNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevNote.content,
                };
            } else if (name === "content") {
                return {
                    title: prevNote.title,
                    content: value,
                };
            }
        });
    }

    function handleClick() {
        props.onAdd(note);
        setNote({ title: "", content: "" });
    }

    return (
        <div className="newNote">
            <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Title"
                value={note.title}
            />
            <textarea
                onChange={handleChange}
                name="content"
                placeholder="Take a note..."
                value={note.content}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default NewNote;
