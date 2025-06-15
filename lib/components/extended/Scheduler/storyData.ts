import { Event } from "react-big-calendar";
import { DateTime } from "luxon";

const now = DateTime.now();
const lastMonth = now.minus({ months: 1 });
const nextMonth = now.plus({ months: 1 });

export const events: Event[] = [
  // Last month
  {
    title: "Sprint Planning",
    start: lastMonth.set({ day: 10, hour: 10, minute: 0 }).toJSDate(),
    end: lastMonth.set({ day: 10, hour: 11, minute: 0 }).toJSDate(),
  },
  {
    title: "Tech Talk: TypeScript",
    start: lastMonth.set({ day: 15, hour: 14, minute: 0 }).toJSDate(),
    end: lastMonth.set({ day: 15, hour: 15, minute: 0 }).toJSDate(),
  },
  // This month
  {
    title: "Daily Standup",
    start: now.set({ day: 10, hour: 9, minute: 0 }).toJSDate(),
    end: now.set({ day: 10, hour: 9, minute: 30 }).toJSDate(),
  },
  {
    title: "Sprint Retrospective",
    start: now.set({ day: 11, hour: 15, minute: 0 }).toJSDate(),
    end: now.set({ day: 11, hour: 16, minute: 0 }).toJSDate(),
  },
  {
    title: "Architecture Discussion",
    start: now.set({ day: 12, hour: 11, minute: 0 }).toJSDate(),
    end: now.set({ day: 12, hour: 14, minute: 0 }).toJSDate(),
  },
  {
    title: "Tech Talk: React Performance",
    start: now.set({ day: 13, hour: 14, minute: 0 }).toJSDate(),
    end: now.set({ day: 13, hour: 15, minute: 0 }).toJSDate(),
  },
  {
    title: "Client Demo",
    start: now.set({ day: 14, hour: 10, minute: 0 }).toJSDate(),
    end: now.set({ day: 14, hour: 11, minute: 0 }).toJSDate(),
  },
  // Next month
  {
    title: "Quarterly Review",
    start: nextMonth.set({ day: 5, hour: 13, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 5, hour: 14, minute: 30 }).toJSDate(),
  },
  {
    title: "All Hands Meeting",
    start: nextMonth.set({ day: 10, hour: 16, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 10, hour: 17, minute: 0 }).toJSDate(),
  },
  {
    title: "Retrospective",
    start: nextMonth.set({ day: 15, hour: 15, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 15, hour: 16, minute: 0 }).toJSDate(),
  },
  {
    title: "Tech Talk: Microservices",
    start: nextMonth.set({ day: 20, hour: 11, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 20, hour: 12, minute: 0 }).toJSDate(),
  },
];
