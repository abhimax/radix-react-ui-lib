import React, { useState } from 'react';
import { Calendar, luxonLocalizer, Event } from 'react-big-calendar';
import { DateTime } from 'luxon';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { events as defaultEvents } from './storyData';
import './Scheduler.css';

const localizer = luxonLocalizer(DateTime);
const DnDCalendar = withDragAndDrop(Calendar);

export interface SchedulerProps {
  events?: Event[];
}

export const Scheduler: React.FC<SchedulerProps> = ({ events: initialEvents = defaultEvents }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleEventDrop = ({ event, start, end }: { event: Event; start: Date; end: Date }) => {
    const updatedEvents = events.map((e) => {
      if (e === event) {
        return { ...e, start, end };
      }
      return e;
    });
    setEvents(updatedEvents);
  };

  const handleEventResize = ({ event, start, end }: { event: Event; start: Date; end: Date }) => {
    const updatedEvents = events.map((e) => {
      if (e === event) {
        return { ...e, start, end };
      }
      return e;
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="scheduler-container">
      <DnDCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        tooltipAccessor="desc"
        defaultView="week"
        views={['month', 'week', 'day']}
        className="calendar"
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
        eventPropGetter={() => ({ className: 'event' })}
        resizable
      />
    </div>
  );
};
