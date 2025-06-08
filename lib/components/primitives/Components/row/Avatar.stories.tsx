import { Avatar } from "../../../index";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Radix React UI/Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    size: '3',
    variant: 'soft',
    fallback: 'US',
    radius: 'full'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      description: 'Size of the avatar',
    },
    variant: {
      control: 'select',
      options: ["solid", "soft", "surface", "outline", "ghost"],
      description: 'The visual variant to apply',
    },
    color: {
      control: 'select',
      options: ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"],
      description: 'Color scheme',
    },
    highContrast: {
      control: 'boolean',
      description: 'Uses a higher contrast color',
    },
    radius: {
      control: 'select',
      options: ["none", "small", "medium", "large", "full"],
      description: 'Border radius',
    },
    fallback: {
      control: 'text',
      description: 'Fallback text when image is not available',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    }
    }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories
export const Default: Story = {
  args: {
    fallback: 'US'
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'User avatar',
    fallback: 'UA'
  },
};

export const Large: Story = {
  args: {
    size: '7',
    fallback: 'XL'
  },
};

export const Square: Story = {
  args: {
    radius: 'medium',
    fallback: 'SQ'
  },
};

export const LoadingState: Story = {
  args: {
    src: '', // Empty src to force fallback
    fallback: 'LS'
  },
};

export const CustomColor: Story = {
  args: {
    color: 'blue',
    fallback: 'CU'
  },
};