import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Course = (props) => {
    const [fireDish, setFire] = useState('');
    const [showFire, setShowFire] = useState(true);
    var counter = 0;
    var clock;
    
    const fire = () => {
        var details = document.getElementById(`t${props.tID}-c${props.courseNum}`);
        details.style.maxHeight = 0;
        setShowFire(false);
        clock = setInterval(() => {
            setFire(moment().minute(0).second(counter++).format('mm : ss'));
        }, 1000);
    }

    const hold = () => {
        return clearInterval(clock);
    }
    const reFire = () => {
        clearInterval(clock);
    }
    const showCourse = () => {
        var details = document.getElementById(`t${props.tID}-c${props.courseNum}`);
        if (details.style.maxHeight){
            details.style.maxHeight = null;
          } else {
            details.style.maxHeight = details.scrollHeight + "px";
          }
    }

    return (
        <div>
            <button onClick={() => showCourse()} type="button" className="collapsible">{props.courseNum}: {props.name}</button><span hidden={showFire} className="fire-timer">{fireDish}<button onClick={() => hold()}>hold fire</button><button onClick={() => reFire()}>fire</button></span>
            <div id={`t${props.tID}-c${props.courseNum}`} className="course-info"><p>dish details</p>
              <button  onClick={() => fire()} type="button" className="fire-button">Fire</button>
            </div>
        </div>
    );
};

export default Course;