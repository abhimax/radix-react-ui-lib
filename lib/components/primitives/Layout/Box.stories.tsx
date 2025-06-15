import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../..";

const meta = {
  title: "Primitives/Layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: {
    as: "div",
  },
  argTypes: {
    // Group: "Element Main Props"
    as: {
      control: "text",
      description:
        "Shorthand for changing the default rendered element into a semantically appropriate alternative.",
      defaultValue: "div",
      table: {
        category: "Element Main Props", // Grouping "as" under "Element Main Props"
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Element Main Props", // Grouping "asChild" under "Element Main Props"
      },
    },
    children: {
      control: "text",
      description: "Content inside the button",
      table: {
        category: "Element Main Props", // Grouping "children" under "Element Main Props"
      },
    },
    // Group: "Common Layout Props"
    p: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "p" under "Common Layout Props"
      },
    },
    px: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "px" under "Common Layout Props"
      },
    },
    py: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "py" under "Common Layout Props"
      },
    },
    pt: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "pt" under "Common Layout Props"
      },
    },
    pr: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "pr" under "Common Layout Props"
      },
    },
    pb: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "pb" under "Common Layout Props"
      },
    },
    pl: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">>',
      table: {
        category: "Common Layout Props", // Grouping "pl" under "Common Layout Props"
      },
    },
    width: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "width" under "Common Layout Props"
      },
    },
    minWidth: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "minWidth" under "Common Layout Props"
      },
    },
    maxWidth: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "maxWidth" under "Common Layout Props"
      },
    },
    height: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "height" under "Common Layout Props"
      },
    },
    minHeight: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "minHeight" under "Common Layout Props"
      },
    },
    maxHeight: {
      control: "text",
      description: "Responsive<string>",
      table: {
        category: "Common Layout Props", // Grouping "maxHeight" under "Common Layout Props"
      },
    },
    position: {
      control: "text",
      description: "Responsive<enum>",
      table: {
        category: "Common Layout Props", // Grouping "position" under "Common Layout Props"
      },
    },
    inset: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9">>',
      table: {
        category: "Common Layout Props", // Grouping "inset" under "Common Layout Props"
      },
    },
    top: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9">>',
      table: {
        category: "Common Layout Props", // Grouping "top" under "Common Layout Props"
      },
    },
    right: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9">>',
      table: {
        category: "Common Layout Props", // Grouping "right" under "Common Layout Props"
      },
    },
    bottom: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9">>',
      table: {
        category: "Common Layout Props", // Grouping "bottom" under "Common Layout Props"
      },
    },
    left: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-1",
        "-2",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "-8",
        "-9",
      ],
      description:
        'Responsive<Union<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9">>',
      table: {
        category: "Common Layout Props", // Grouping "left" under "Common Layout Props"
      },
    },
    // ... Other layout props here ...
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Radix React UI" },
};
export const Usage: Story = {
  args: {
    children: "Radix React UI",
    width: "100px",
    height: "100px",
    style: { backgroundColor: "#0695a7" },
  },
};
