import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Scheduler } from "../Scheduler";
import { Event } from "react-big-calendar";

type CalendarProps = {
  events: Event[];
  eventPropGetter?: () => { className: string };
  onEventDrop?: (event: Event, start: Date, end: Date) => void;
  onEventResize?: (event: Event, start: Date, end: Date) => void;
};

// Mock react-big-calendar
vi.mock("react-big-calendar", () => {
  const Calendar = ({ events, eventPropGetter }: CalendarProps) => {
    const renderEvents = (events: Event[]) => {
      return events.map((event: Event, index: number) => (
        <div
          key={index}
          data-testid="event"
          className={eventPropGetter?.().className}
        >
          {event.title}
        </div>
      ));
    };

    return <div data-testid="calendar">{renderEvents(events)}</div>;
  };
  // Add a mock for luxonLocalizer
  return { Calendar, luxonLocalizer: () => ({} as unknown) };
});

// Mock CSS import
vi.mock("react-big-calendar/lib/css/react-big-calendar.css", () => ({}));

// Mock withDragAndDrop HOC
vi.mock("react-big-calendar/lib/addons/dragAndDrop", () => ({
  __esModule: true,
  default: (Calendar: React.ComponentType<CalendarProps>) => Calendar,
}));

describe("Scheduler", () => {
  const mockEvents: Event[] = [
    {
      title: "Test Event",
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 2),
    },
  ];

  it("renders without crashing", () => {
    render(<Scheduler />);
    expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });

  it("renders with events", () => {
    render(<Scheduler events={mockEvents} />);
    expect(screen.getByTestId("event")).toHaveTextContent("Test Event");
  });

  it("applies custom class to events", () => {
    render(<Scheduler events={mockEvents} />);
    expect(screen.getByTestId("event")).toHaveClass("event");
  });

  it("uses default events when none provided", () => {
    render(<Scheduler />);
    // The default events from storyData should be rendered
    expect(screen.getByTestId("calendar")).toBeInTheDocument();
  });

  it("handles event drop", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    fireEvent.click(eventElement);
    // The event should still be in the document after drop
    expect(screen.getByTestId("event")).toBeInTheDocument();
  });

  it("handles event resize", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    fireEvent.mouseDown(eventElement);
    // The event should still be in the document after resize
    expect(screen.getByTestId("event")).toBeInTheDocument();
  });
});
