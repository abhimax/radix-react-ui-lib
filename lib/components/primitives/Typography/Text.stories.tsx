import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../..";

const meta = {
  title: "Radix React UI/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    as: {
      control: "text",
      description:
        "Shorthand for changing the default rendered element into a semantically appropriate alternative.",
    },
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
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      defaultValue: "2",
      description: "Size of the text",
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
      description: "css font weight",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Sets the CSS text-align property.",
    },
    trim: {
      control: "select",
      options: ["normal", "start", "end", "both"],
      description:
        "Trims the leading whitespace from the start or end of the text.",
    },
    truncate: {
      control: "boolean",
      description:
        "Truncates text with an ellipsis. Be aware of common pitfalls in flex layouts.",
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "pretty", "balance"],
      description:
        "Controls the wrapping behavior of the text. See the corresponding text-wrap values for details.",
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
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Radix ReactUI Lib - Modern React Component Library" },
};
