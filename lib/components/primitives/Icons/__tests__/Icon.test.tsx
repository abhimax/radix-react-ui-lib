import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon';
import { iconsMap } from '../iconsMap';
import * as RadixIcons from '@radix-ui/react-icons';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Icon', () => {
  it('renders nothing if icon name does not exist in iconsMap', () => {
    // @ts-expect-error testing invalid name
    const { container } = render(<Icon name="nonExistentIcon" />);
    expect(container.innerHTML).toBe('');
  });

  it('renders a Radix icon with correct props', () => {
    // Pick a known Radix icon key from iconsMap that matches RadixIcons
    // For example, use "Accessibility" from RadixIcons if available
    const iconName = Object.keys(RadixIcons)[0] as keyof typeof iconsMap;
    const size = 30;
    const color = '#ff0000';

    render(<Icon name={iconName} size={size} color={color} />);

    // So check svg attributes manually by querying svg element
     const svgElement = document.querySelector('svg');
     expect(svgElement).toHaveAttribute('width', size.toString());
     expect(svgElement).toHaveAttribute('height', size.toString());
     const pathElement = svgElement?.querySelector('path');
     expect(pathElement).toHaveAttribute('fill', color);
  });

  it('renders a Lucide icon with correct props', () => {
    // Use a known Lucide icon from iconsMap: Camera, Sun, or Heart
    const iconName = 'Camera' as keyof typeof iconsMap;
    const size = 40;
    const color = '#abcdef';

    render(<Icon name={iconName} size={size} color={color} />);

    // Lucide icons render svg with size attribute
    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    // Lucide icons use size prop, which sets width/height on svg, verify width and height
    expect(svgElement).toHaveAttribute('width', size.toString());
    expect(svgElement).toHaveAttribute('height', size.toString());

    // Color attribute might be passed as stroke or fill depending on icon implementation
    // We can check if svg has any fill or stroke matching color (optional)
    const hasColor = svgElement
      ? svgElement.getAttribute('stroke') === color || svgElement.getAttribute('fill') === color
      : false;
    expect(hasColor).toBe(true);
  });

  it('uses default size and color if not provided', () => {
    const iconName = 'Camera' as keyof typeof iconsMap;

    render(<Icon name={iconName} />);

    const svgElement = document.querySelector('svg');
    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');

    const defaultColor = 'currentColor';
    const hasDefaultColor =
      svgElement !== null &&
      (svgElement.getAttribute('stroke') === defaultColor || svgElement.getAttribute('fill') === defaultColor);
    expect(hasDefaultColor).toBe(true);
  });
});
