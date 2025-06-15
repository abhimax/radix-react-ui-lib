import { Meta, StoryObj } from "@storybook/react";
import { Code } from "../../index";

const meta = {
  title: "Primitives/Typography/Code",
  component: Code,
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
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost"],
      defaultValue: "soft",
      description: "Defines the visual variant of the Code component.",
    },
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
      description: 'Responsive<"light" | "regular" | "medium" | "bold">',
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
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "import { Button } from 'radix-react-ui-lib';" },
};
