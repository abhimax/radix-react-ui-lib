import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../Icon';
import * as RadixIcons from '@radix-ui/react-icons';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('Icon', () => {
  it('renders nothing if icon name does not exist', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    // @ts-expect-error testing invalid name
    const { container } = render(<Icon name="nonExistentIcon" />);
    expect(container.innerHTML).toBe('');
    expect(consoleSpy).toHaveBeenCalledWith('Icon "nonExistentIcon" not found in Radix Icons');
    consoleSpy.mockRestore();
  });

  it('renders a Radix icon with correct size props', () => {
    const iconName = 'HomeIcon';
    const size = 30;
    const color = '#ff0000';

    const { container } = render(<Icon name={iconName} size={size} color={color} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', size.toString());
    expect(svgElement).toHaveAttribute('height', size.toString());
  });

  it('uses default size if not provided', () => {
    const iconName = 'HomeIcon';

    const { container } = render(<Icon name={iconName} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '15'); // Radix default size
    expect(svgElement).toHaveAttribute('height', '15'); // Radix default size
  });

  it('applies className when provided', () => {
    const className = 'test-class';
    const { container } = render(<Icon name="HomeIcon" className={className} />);
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass(className);
  });
});
