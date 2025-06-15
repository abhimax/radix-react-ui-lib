import React, { useState } from "react";
import { Calendar, luxonLocalizer, Event } from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop, { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { events as defaultEvents } from "./storyData";
import "./styles/scheduler.css";

const localizer = luxonLocalizer(DateTime);
const DnDCalendar = withDragAndDrop(Calendar);

export interface SchedulerProps {
  events?: Event[];
}

interface ExtendedEvent extends Event {
  desc?: string;
}

export const Scheduler: React.FC<SchedulerProps> = ({
  events: initialEvents = defaultEvents,
}) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const handleEventDrop = ({
    event,
    start,
    end,
  }: {
    event: Event;
    start: Date;
    end: Date;
  }) => {
    const updatedEvents = events.map((e) => {
      if (e === event) {
        return { ...e, start, end };
      }
      return e;
    });
    setEvents(updatedEvents);
  };

  const handleEventResize = ({
    event,
    start,
    end,
  }: {
    event: Event;
    start: Date;
    end: Date;
  }) => {
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
        startAccessor={(event: Event) => event.start ? new Date(event.start) : new Date()}
        endAccessor={(event: Event) => event.end ? new Date(event.end) : new Date()}
        titleAccessor={(event: Event) => String(event.title || '')}
        tooltipAccessor={(event: ExtendedEvent) => String(event.desc || event.title || '')}
        defaultView="week"
        views={["month", "week", "day"]}
        className="calendar"
        onEventDrop={handleEventDrop as withDragAndDropProps['onEventDrop']}
        onEventResize={handleEventResize as withDragAndDropProps['onEventResize']}
        eventPropGetter={() => ({ className: "event" })}
        resizable
      />
    </div>
  );
};
