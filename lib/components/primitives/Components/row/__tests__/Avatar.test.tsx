import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from '../../../../index';
import { Theme } from '@radix-ui/themes';

describe('Avatar Component', () => {
  const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
    <Theme appearance="light" accentColor="indigo" grayColor="slate" radius="medium" scaling="100%">
      {children}
    </Theme>
  );

  it('renders with default props', () => {
    const { container } = render(
      <ThemeWrapper>
        <Avatar fallback="AB" />
      </ThemeWrapper>
    );
    const avatar = container.querySelector('.rt-AvatarRoot');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('rt-r-size-3'); // Default size
    expect(avatar).toHaveClass('rt-variant-soft'); // Default variant
  });

  it('applies custom size class', () => {
    const { container } = render(
      <ThemeWrapper>
        <Avatar size="7" fallback="AB" />
      </ThemeWrapper>
    );
    const avatar = container.querySelector('.rt-AvatarRoot');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('rt-r-size-7');
  });

  it('applies custom variant class', () => {
    const { container } = render(
      <ThemeWrapper>
        <Avatar variant="solid" fallback="AB" />
      </ThemeWrapper>
    );
    const avatar = container.querySelector('.rt-AvatarRoot');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('rt-variant-solid');
  });

  it('applies custom color attribute', () => {
    const { container } = render(
      <ThemeWrapper>
        <Avatar color="blue" fallback="AB" />
      </ThemeWrapper>
    );
    const avatar = container.querySelector('.rt-AvatarRoot');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('data-accent-color', 'blue');
  });


  it('renders with image props', () => {
    const src = 'https://example.com/avatar.jpg';
    const alt = 'User avatar';
    const { container } = render(
      <ThemeWrapper>
        <Avatar
          src={src}
          alt={alt}
          fallback="AB"
        />
      </ThemeWrapper>
    );
    const avatar = container.querySelector('.rt-AvatarRoot');
    expect(avatar).toBeInTheDocument();
  });
}); 