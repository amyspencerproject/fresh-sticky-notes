import React from "react";

const Note = (props) => {

    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeID = props.note.id;
        props.onType(editMeID, "title", updatedValue);
        
    }

    const updateDescription = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeId, "descriptionn", updatedValue);
    }

    const deleteNote = () => {
        const deleteMeId = props.note.id;
        props.onDelete(deleteMeId)
    }

    return (
        <li className="note" key={props.note.id}>
            <input className="note__title" type="text" placeholder="Title" onChange={updateTitle} value={props.note.title} />
            <textarea className="note__description" placeholder="Description" onChange={updateDescription} value={props.note.description}></textarea>
            <span className="note__delete" onClick={deleteNote}>X</span>
        </li>
    )
}

export default Note;