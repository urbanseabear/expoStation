import React, { useState } from "react";
import moment from "moment";
import { useStopwatch } from "./helper";

const Course = (props) => {
  const [isSent, setIsSent] = useState(false);
  const [hideFire, setHideFire] = useState(true);
  const { isRunning, elapsedTime, startTimer, stopTimer } = useStopwatch();

  const send = () => {
    setIsSent(true);
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
    <div>
      <button
        onClick={() => showCourse()}
        type="button"
        className="collapsible"
      >
        {props.courseNum}: {props.name}
      </button>
      <span hidden={hideFire} className="fire-timer">
        {moment(elapsedTime, "ss").format("mm : ss")}
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
