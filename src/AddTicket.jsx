import React, { useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import './style.scss';
import AddCourse from "./AddCourse";
import Ticket from "./Ticket";
import { Portal } from 'react-portal';

const AddTicket = (props) => {
  const [open, setOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState('');
  const [dishes, setDishes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newTicket, setNewTicket] = useState([]);

  const modalClick = () => {
    setOpen(!open);
  }

  const handleChange = (e) => {
      setCurrentCourse(e.target.value);
  }

  const anotherCourse = () => {
      setDishes(dishes.concat(currentCourse));
      setCourses(courses.concat(<AddCourse handleChange={handleChange} course={courses.length + 1} key={courses.length}/>));
  }

  const createTicket = (courseList) => {
    setDishes(dishes.concat(currentCourse));
    setNewTicket(newTicket.concat(<Ticket courses={courseList} id={props.id} key={props.id}/>));
    setDishes([]);
    setCourses([]);
    setOpen(!open);
  }

  var body;
      body = (
        <div className="add-modal">
          <h2 style={{color: 'black'}} id="modal-title">ADD COURSE</h2>
          <h3 style={{color: 'black'}} id="modal-description"></h3>
         <AddCourse handleChange={handleChange} course={0}/>
         {courses}
         <button onClick={() => anotherCourse()}>add to ticket</button>
         
         <button onClick={() => {
             props.addId();
             createTicket(dishes);
             }}>create ticket</button>
          <div></div>
        </div>
      );
  var cName;
  var buttonText = "";
  if (props.bText === "Add A Ticket") {
    cName = "ticket-button";
    buttonText = "Add Ticket";
  } else {
    cName = "plus-button";
    buttonText = ` + `;
  }
  
  if (buttonText === "Add Course") {
    return (
    <span>
      <button
        className={cName}
        onClick={() => modalClick()}>
        {buttonText}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </span>
  );
  } else {
  return (
    <div>
        <div>
      <Button
        color='primary'
        variant='contained'
        onClick={() => modalClick()}>
        {buttonText}
      </Button>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
      </div>
      <Portal node={document && document.getElementById('ticket-window')}>
      {newTicket}
      </Portal>
    </div>
  );
      }
};
export default AddTicket;