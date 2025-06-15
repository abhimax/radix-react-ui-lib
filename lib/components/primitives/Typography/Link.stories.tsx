import { Meta, StoryObj } from "@storybook/react";
import { Link } from "../../..";

const meta = {
  title: "Primitives/Typography/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    underline: "auto",
  },
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
    weight: {
      control: "select",
      options: ["light", "regular", "medium", "bold"],
      description: 'Responsive<"light" | "regular" | "medium" | "bold">',
    },
    trim: {
      control: "select",
      options: ["normal", "start", "end", "both"],
      description: 'Responsive<"normal" | "start" | "end" | "both">',
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

    // Group: "Link Style Props"
    underline: {
      control: "select",
      options: ["auto", "always", "hover", "none"],
      defaultValue: "auto",
      description: "Controls the underline style of the link.",
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Radix UI Documentation",
    href: "https://www.radix-ui.com/themes/docs/overview/getting-started",
  },
};
