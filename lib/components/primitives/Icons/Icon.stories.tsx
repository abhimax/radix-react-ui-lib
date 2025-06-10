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
      display: 'flex', 
      flexWrap: 'wrap',
      gap: '0.5rem',
      padding: '1rem',
      justifyContent: 'flex-start',
    }}>
      {Object.keys(RadixIcons).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '4px',
            width: '200px',
            backgroundColor: '#fff',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#f9f9f9';
            target.style.transform = 'translateY(-2px)';
            target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#fff';
            target.style.transform = 'none';
            target.style.boxShadow = 'none';
          }}
        >
          <Icon name={iconName as keyof typeof RadixIcons} size={32} />
          <span style={{ 
            fontSize: '12px', 
            textAlign: 'center',
            color: '#666',
            fontWeight: 500
          }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
