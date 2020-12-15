import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './style.scss';
import Course from './Course';

const Ticket = (props) => {


    return (
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 30, y: -100}}
          position={null}
        grid={[10, 10]}
        scale={1}
        >
            <div className="handle" style={{backgroundColor: 'whitesmoke', width: '150px'}}>
            <div>TICKET {props.id}</div>
            {props.courses.map((course, i) => {
                return <Course name={course} tID={props.id} courseNum={i + 1} key={i + 1}/>
            })}
            </div>
        </Draggable>
    )
};

export default Ticket;