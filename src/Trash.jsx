import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Trash = () => {

    function handleDrop(event) {
        event.preventDefault();
        console.log(event);

    }
    return ( 
      <span className="trash" onMouseUp={(e) => handleDrop(e)}>
          <DeleteIcon style={{fontSize: '45px'}}></DeleteIcon>
      </span>
    );
};

export default Trash;