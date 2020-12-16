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
            showTimer(false);
        }}>start service</button>
        <div hidden={timer}>{time}</div>
        <div></div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/61QgApHtrZL._AC_SL1500_.jpg" width="800px"></img>
        <div id="ticket-window">
        <Ticket courses={testTicket} id={ticketID}/>
        </div>
        <div>
            <AddTicket onClick={() => setTicketID(ticketID++)}  id={ticketID} bText="Add A Ticket"/>
        </div>
        <DeleteIcon style={{marginLeft: '90%', fontSize: '40px'}}><Trash></Trash></DeleteIcon>
        </div>
    );
};

export default ExpoStation;