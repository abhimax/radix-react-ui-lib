import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AlertDialog } from "../AlertDialog";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "@radix-ui/themes";

describe("AlertDialog", () => {
  const defaultProps = {
    trigger: <Button>Open Dialog</Button>,
    title: "Test Title",
    description: "Test Description",
    actionText: "Confirm",
    cancelText: "Cancel",
  };

  it("renders trigger button correctly", () => {
    render(<AlertDialog {...defaultProps} />);
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("shows dialog content when trigger is clicked", () => {
    render(<AlertDialog {...defaultProps} />);
    
    // Click the trigger button
    fireEvent.click(screen.getByText("Open Dialog"));

    // Check if dialog content is visible
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onAction when action button is clicked", () => {
    const onAction = vi.fn();
    render(<AlertDialog {...defaultProps} onAction={onAction} />);

    // Open dialog and click action button
    fireEvent.click(screen.getByText("Open Dialog"));
    fireEvent.click(screen.getByText("Confirm"));

    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("renders with custom styling props", () => {
    const customProps = {
      ...defaultProps,
      color: "blue" as const,
      variant: "soft" as const,
      maxWidth: "600px",
    };

    render(<AlertDialog {...customProps} />);
    fireEvent.click(screen.getByText("Open Dialog"));

    const actionButton = screen.getByText("Confirm");
    expect(actionButton).toBeInTheDocument();
    expect(actionButton).toHaveClass("rt-Button");
  });

  it("renders with custom button text", () => {
    const customProps = {
      ...defaultProps,
      actionText: "Delete",
      cancelText: "Go Back",
    };

    render(<AlertDialog {...customProps} />);
    fireEvent.click(screen.getByText("Open Dialog"));

    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Go Back")).toBeInTheDocument();
  });

  it("closes when cancel button is clicked", () => {
    render(<AlertDialog {...defaultProps} />);
    
    // Open dialog
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Click cancel button
    fireEvent.click(screen.getByText("Cancel"));

    // Check if dialog content is removed from the document
    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });
});