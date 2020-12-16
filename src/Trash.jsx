import React from 'react';

const Trash = () => {

    function handleDrop(event) {
        event.preventDefault();
        console.log(event);

    }
    return ( 
      <span onMouseUp={(e) => handleDrop(e)}>
      </span>
    );
};

export default Trash;