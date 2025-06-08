// Icon.stories.tsx
import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import * as RadixIcons from '@radix-ui/react-icons';

const meta = {
  title: 'Radix React UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

// Basic icon story
export const Basic: Story = {
  args: {
    name: 'HomeIcon',
    size: 24,
    color: 'currentColor',
  },
};

// Colored icon story
export const Colored: Story = {
  args: {
    name: 'HeartFilledIcon',
    size: 24,
    color: '#FF0000',
  },
};

// Different sizes story
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon name="StarIcon" size={16} />
      <Icon name="StarIcon" size={24} />
      <Icon name="StarIcon" size={32} />
    </div>
  ),
};

// Icon gallery story
export const IconGallery: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '1rem',
      padding: '1rem',
    }}>
      {Object.keys(RadixIcons).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '4px',
          }}
        >
          <Icon name={iconName as keyof typeof RadixIcons} size={24} />
          <span style={{ fontSize: '12px', textAlign: 'center' }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
