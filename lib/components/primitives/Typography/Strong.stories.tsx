import { Meta, StoryObj } from "@storybook/react";
import { Strong } from "../../..";

const meta = {
  title: "Primitives/Typography/Strong",
  component: Strong,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    // Group: "Element Main Props"
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    },

    // Group: "Text Layout Props"
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
  },
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Radix ReactUI Lib" },
};
