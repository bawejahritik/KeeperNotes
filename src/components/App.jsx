import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputNotes, setInputNotes] = useState([]);

  function addNote(note) {
    setInputNotes(prevItems => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setInputNotes(prevItems => {
      return prevItems.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea className="page-wrap"onAdd={addNote}/>
      {inputNotes.map((noteContent, index) => (
        <Note
          key={index}
          id={index}
          title={noteContent.title}
          content={noteContent.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
