import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const storedNotes = JSON.parse(localStorage.getItem('notes'))
  const [inputNotes, setInputNotes] = useState(storedNotes);

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

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(inputNotes))
  }, [inputNotes])

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
