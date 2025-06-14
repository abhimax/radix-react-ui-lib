import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Scheduler } from './Scheduler';
import { events } from './storyData';

const meta = {
  title: 'Extended/Scheduler',
  component: Scheduler,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Scheduler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Scheduler events={events} />,
}; 