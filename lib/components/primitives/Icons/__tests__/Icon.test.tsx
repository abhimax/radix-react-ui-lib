import React from "react";
import { render } from "@testing-library/react";
import { Icon } from "../Icon";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";

// Mock Radix Icons
vi.mock("@radix-ui/react-icons", () => {
  const mockIcons = {
    HomeIcon: ({ style, className }: { style?: any; className?: string }) => (
      <svg
        data-testid="mock-icon"
        width={style?.width}
        height={style?.height}
        style={style}
        className={className}
      />
    ),
  };

  return {
    ...mockIcons,
    __esModule: true,
    default: mockIcons,
  };
});

describe("Icon", () => {


  it("renders a Radix icon with correct size props", () => {
    const size = 30;
    const { container } = render(<Icon name="HomeIcon" size={size} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveStyle({ width: `${size}px`, height: `${size}px` });
  });

  it("uses default size if not provided", () => {
    const { container } = render(<Icon name="HomeIcon" />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveStyle({ width: "15px", height: "15px" }); // Radix default size
  });

  it("applies className when provided", () => {
    const className = "test-class";
    const { container } = render(
      <Icon name="HomeIcon" className={className} />
    );
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveClass(className);
  });

  it("applies skin color when provided", () => {
    const skin = "primary";
    const { container } = render(<Icon name="HomeIcon" skin={skin} />);
    const svgElement = container.querySelector("svg");
    expect(svgElement).toHaveStyle({
      color: "var(--colors-primary-custom-9)",
      fill: "var(--colors-primary-custom-9)",
    });
  });
});
