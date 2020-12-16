import React, { useEffect, useState } from "react";
import moment from "moment";
import { useStopwatch } from "./helper";
const classNames = require('classnames');

const Course = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [sentTime, setSendTime] = useState('');
  const [hideFire, setHideFire] = useState(true);
  const [formattedTime, setFormattedTime] = useState('00 : 00');
  const { isRunning, elapsedTime, startTimer, stopTimer } = useStopwatch();

  useEffect(() => {
    if (elapsedTime > 60) {
    var min = elapsedTime / 60;
    setFormattedTime(`${Math.floor(min)} : ${elapsedTime % 60}`);
    return formattedTime;
    } else {
        setFormattedTime(`0 : ${elapsedTime}`);
        return formattedTime;
    }
  }, [elapsedTime])

  const send = () => {
    setIsSent(true);
    stopTimer();
    setHideFire(true);
    setSendTime(moment().format('h:mm:ss'));
  };

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer();
    setHideFire(false);
  };

  const showCourse = () => {
    var details = document.getElementById(`t${props.tID}-c${props.courseNum}`);
    if (details.style.maxHeight) {
      details.style.maxHeight = null;
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
    }
  };

  return (
    <div >
      <button
        onClick={() => showCourse()}
        type="button"
        className={classNames("collapsible", {"sent": isSent})}
      >
        {props.courseNum}: {props.name}
      </button><span hidden={isSent ? false : true}>sent at: {sentTime}</span>
      <span hidden={hideFire} className="fire-timer">
        {formattedTime}
        <button
          onClick={() => handleStartStop()}
          status={isRunning ? "running" : "stopped"}
        >
          {isRunning ? "Hold" : "Fire"}
        </button>
        <button
          onClick={() => {
            send();
          }}
          status={isSent ? "sent" : "working"}
        >
          Send
        </button>
      </span>
      <div id={`t${props.tID}-c${props.courseNum}`} className="course-info">
        <p>dish details</p>
        <button
          onClick={() => {
            handleStartStop();
            showCourse();
          }}
          status={isRunning ? "running" : "stopped"}
        >
          {isRunning ? "Hold" : "Fire"}
        </button>
      </div>
    </div>
  );
};

export default Course;
