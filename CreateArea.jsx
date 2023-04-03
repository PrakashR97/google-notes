import React from "react";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Zoom from "@mui/material/Zoom";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expand = () => {
    setIsExpanded(true);
  };
  return (
    <>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </>
  );
};

export default CreateArea;
