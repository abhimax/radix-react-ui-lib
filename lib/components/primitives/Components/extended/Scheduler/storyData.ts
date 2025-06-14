import { Event } from 'react-big-calendar';
import { DateTime } from 'luxon';

const now = DateTime.now();
const lastMonth = now.minus({ months: 1 });
const nextMonth = now.plus({ months: 1 });

export const events: Event[] = [
  // Last month
  {
    title: 'Sprint Planning',
    start: lastMonth.set({ day: 10, hour: 10, minute: 0 }).toJSDate(),
    end: lastMonth.set({ day: 10, hour: 11, minute: 0 }).toJSDate(),
    desc: 'Plan the upcoming sprint',
  },
  {
    title: 'Tech Talk: TypeScript',
    start: lastMonth.set({ day: 15, hour: 14, minute: 0 }).toJSDate(),
    end: lastMonth.set({ day: 15, hour: 15, minute: 0 }).toJSDate(),
    desc: 'Internal tech talk on TypeScript best practices',
  },
  // This month
  {
    title: 'Daily Standup',
    start: now.set({ day: 10, hour: 9, minute: 0 }).toJSDate(),
    end: now.set({ day: 10, hour: 9, minute: 30 }).toJSDate(),
    desc: 'Team daily sync-up',
  },
  {
    title: 'Sprint Retrospective',
    start: now.set({ day: 11, hour: 15, minute: 0 }).toJSDate(),
    end: now.set({ day: 11, hour: 16, minute: 0 }).toJSDate(),
    desc: 'Review sprint progress and improvements',
  },
  {
    title: 'Architecture Discussion',
    start: now.set({ day: 12, hour: 11, minute: 0 }).toJSDate(),
    end: now.set({ day: 12, hour: 14, minute: 0 }).toJSDate(),
    desc: 'Discuss new system architecture',
  },
  {
    title: 'Tech Talk: React Performance',
    start: now.set({ day: 13, hour: 14, minute: 0 }).toJSDate(),
    end: now.set({ day: 13, hour: 15, minute: 0 }).toJSDate(),
    desc: 'Internal tech talk on React optimization',
  },
  {
    title: 'Client Demo',
    start: now.set({ day: 14, hour: 10, minute: 0 }).toJSDate(),
    end: now.set({ day: 14, hour: 11, minute: 0 }).toJSDate(),
    desc: 'Demo new features to client',
  },
  // Next month
  {
    title: 'Quarterly Review',
    start: nextMonth.set({ day: 5, hour: 13, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 5, hour: 14, minute: 30 }).toJSDate(),
    desc: 'Company-wide quarterly review meeting',
  },
  {
    title: 'All Hands Meeting',
    start: nextMonth.set({ day: 10, hour: 16, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 10, hour: 17, minute: 0 }).toJSDate(),
    desc: 'Monthly all-hands for the whole company',
  },
  {
    title: 'Retrospective',
    start: nextMonth.set({ day: 15, hour: 15, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 15, hour: 16, minute: 0 }).toJSDate(),
    desc: 'Sprint retrospective for next month',
  },
  {
    title: 'Tech Talk: Microservices',
    start: nextMonth.set({ day: 20, hour: 11, minute: 0 }).toJSDate(),
    end: nextMonth.set({ day: 20, hour: 12, minute: 0 }).toJSDate(),
    desc: 'Tech talk on microservices architecture',
  },
]; 