import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false);

    function handleChange(event){
        const{name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote, [name]:value
            };
        });
    }

    function submitNote(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        // setExpanded(false);
    }

    function handleClick(){
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
      )}
        
        
        <textarea name="content" placeholder="Take a note..." rows={isExpanded?3:1}  onChange={handleChange} value={note.content} onClick={handleClick}/>
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>


      </form>
    </div>
  );
}

export default CreateArea;
