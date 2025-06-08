import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Icon} from 'radix-react-ui-lib';
  it('uses default size and color if not provided', () => {

    render(<Icon name="Camera" />);

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