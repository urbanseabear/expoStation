import React, { useState, useEffect } from 'react';
import './style.scss';
import Ticket from './Ticket';
import Trash from './Trash';
import moment from 'moment';
import AddTicket from './AddTicket';
import DeleteIcon from '@material-ui/icons/Delete';


const ExpoStation = () => {
    const [timer, showTimer] = useState(true);
    const [time, setTime] = useState('');
    const [ticketID, setTicketID] = useState(1);
    var testTicket = ["oysters", "salad", "beef"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().format('h:mm:ss a'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>Expo Station
        <div>meow</div>
        
        <button onClick={() => {
            showTimer(!timer);
        }}>{timer ? 'start service' : 'stop service'}</button>
        <div hidden={timer}>{time}</div>
        <div></div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61QgApHtrZL._AC_SL1500_.jpg" width="800px"></img>
        <div id="ticket-window">
        <Ticket courses={testTicket} id={ticketID} key={ticketID}/>
        </div>
        <div>
            <AddTicket addId={() => setTicketID(ticketID + 1)}  id={ticketID} bText="Add A Ticket"/>
        </div>
        <Trash></Trash>
        </div>
    );
};

export default ExpoStation;