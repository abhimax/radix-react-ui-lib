import { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "../../..";

const meta = {
  title: "Radix React UI/Typography/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    // Group: "Element Main Props"
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },
    size: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description: "Responsive<enum>",
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "⌘ + K" },
};
