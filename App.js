import CreateArea from "./components/CreateArea";
import Header from "./components/Header";

import { useState } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";

import React from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };
  console.log(notes);
  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            title={item.title}
            content={item.content}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
