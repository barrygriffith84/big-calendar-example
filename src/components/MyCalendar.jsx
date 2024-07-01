import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getAllMeetups } from '../services/meetupService';




export const MyCalendar = () => {

    const [events, setEvents] = useState([]);

    const localizer = momentLocalizer(moment);

    useEffect(() => {

        getAllMeetups().then((meetupsArray) => {
          
         const eventArray = meetupsArray.map(meetup => {
                
                return {
                            title: meetup.description,
                            start: meetup.startDate,
                            end: meetup.endDate
                        };
          })

          setEvents(eventArray);

        });

      }, []);
    

return(
    <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 1000, width:1250 }}
    />
  </div>

)
};


