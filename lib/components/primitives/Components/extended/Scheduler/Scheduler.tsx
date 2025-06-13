import React from "react";
import { Calendar, luxonLocalizer, Event } from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = luxonLocalizer(DateTime);

export interface SchedulerProps {
  events?: Event[];
}

export const Scheduler: React.FC<SchedulerProps> = ({ events }) => {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        tooltipAccessor="desc"
        defaultView="week"
        views={["month", "week", "day"]}
        style={{ height: "100%" }}
      />
    </div>
  );
};
