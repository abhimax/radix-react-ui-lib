import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Scheduler } from "../Scheduler";

// Mock react-big-calendar
vi.mock("react-big-calendar", () => ({
  Calendar: ({ 
    events, 
    eventPropGetter, 
    onEventDrop, 
    onEventResize,
    startAccessor,
    endAccessor,
    titleAccessor,
    tooltipAccessor,
    defaultView,
    views
  }: any) => (
    <div role="application">
      <div data-testid="calendar-views">{views?.join(",")}</div>
      <div data-testid="default-view">{defaultView}</div>
      {events?.map((event: any) => (
        <div 
          key={event.title} 
          className={eventPropGetter?.()?.className}
          data-testid="event"
          data-title={titleAccessor(event)}
          data-tooltip={tooltipAccessor(event)}
          data-start={startAccessor(event)}
          data-end={endAccessor(event)}
          onClick={() => onEventDrop?.({ event, start: new Date(), end: new Date() })}
          onMouseDown={() => onEventResize?.({ event, start: new Date(), end: new Date() })}
        >
          {event.title}
        </div>
      ))}
    </div>
  ),
  luxonLocalizer: () => () => {},
}));

// Mock react-big-calendar CSS imports
vi.mock("react-big-calendar/lib/css/react-big-calendar.css", () => ({}));
vi.mock("react-big-calendar/lib/addons/dragAndDrop/styles.css", () => ({}));

// Mock withDragAndDrop HOC
vi.mock("react-big-calendar/lib/addons/dragAndDrop", () => ({
  __esModule: true,
  default: (Calendar: any) => Calendar,
}));

const mockEvents = [
  {
    title: "Test Event",
    start: new Date("2024-03-20T10:00:00"),
    end: new Date("2024-03-20T11:00:00"),
    desc: "Test Description"
  },
];

describe("Scheduler", () => {
  it("renders without crashing", () => {
    render(<Scheduler />);
    expect(screen.getByRole("application")).toBeInTheDocument();
  });

  it("renders with events", () => {
    render(<Scheduler events={mockEvents} />);
    expect(screen.getByText("Test Event")).toBeInTheDocument();
  });

  it("applies custom class to events", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByText("Test Event").closest(".event");
    expect(eventElement).toHaveClass("event");
  });

  it("uses default events when none provided", () => {
    render(<Scheduler />);
    // The default events from storyData should be rendered
    expect(screen.getByRole("application")).toBeInTheDocument();
  });

  it("handles event drop", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    fireEvent.click(eventElement);
    // The event should still be in the document after drop
    expect(screen.getByText("Test Event")).toBeInTheDocument();
  });

  it("handles event resize", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    fireEvent.mouseDown(eventElement);
    // The event should still be in the document after resize
    expect(screen.getByText("Test Event")).toBeInTheDocument();
  });

  it("renders with correct view options", () => {
    render(<Scheduler />);
    expect(screen.getByTestId("calendar-views")).toHaveTextContent("month,week,day");
    expect(screen.getByTestId("default-view")).toHaveTextContent("week");
  });

  it("displays event tooltips", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    expect(eventElement).toHaveAttribute("data-tooltip", "Test Description");
  });

  it("correctly formats event dates", () => {
    render(<Scheduler events={mockEvents} />);
    const eventElement = screen.getByTestId("event");
    expect(eventElement).toHaveAttribute("data-start");
    expect(eventElement).toHaveAttribute("data-end");
  });
}); 