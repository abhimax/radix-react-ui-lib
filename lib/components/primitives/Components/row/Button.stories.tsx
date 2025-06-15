import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Icon } from "../../..";

const meta = {
  title: "Primitives/Components/Row/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    size: "2",
    variant: "solid",
    loading: false,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    children: {
      control: "text",
      description: "Content inside the button",
    },
    size: {
      control: "inline-radio",
      options: ["1", "2", "3", "4"],
      description: "Size of the button",
    },
    variant: {
      control: "select",
      options: ["classic", "solid", "soft", "surface", "outline", "ghost"],
      description:
        "The visual variant to apply, see theme overview for more details.",
    },
    color: {
      control: "select",
      options: [
        "gray",
        "gold",
        "bronze",
        "brown",
        "yellow",
        "amber",
        "orange",
        "tomato",
        "red",
        "ruby",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "iris",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "jade",
        "green",
        "grass",
        "lime",
        "mint",
        "sky",
      ],
      description:
        "Overrides the accent color inherited from the Theme. See the color guide for more details.",
    },
    highContrast: {
      control: "boolean",
      description: "Uses a higher contrast color for the component.",
    },
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
      description:
        "Overrides the radius inherited from the theme. See the radius guide for more details.",
    },
    loading: {
      control: "boolean",
      description: "Indicates that the button is in a loading state.",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Radix React UI" },
};

export const Disabled: Story = {
  args: { children: "Disabled Button", disabled: true },
};

export const IconButton: Story = {
  args: {
    children: (
      <>
        <Icon name="HomeIcon" size={16} />
        Home
      </>
    ),
  },
};
