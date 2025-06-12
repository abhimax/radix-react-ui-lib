import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "../../../../";
import { Button } from "@radix-ui/themes";

const meta = {
  title: "Radix React UI/Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Delete Account</Button>,
    title: "Delete Account",
    description:
      "Are you sure you want to delete your account? This action cannot be undone.",
    actionText: "Delete Account",
    cancelText: "Cancel",
    variant: "solid",
    maxWidth: "450px",
  },
};

export const CustomStyling: Story = {
  args: {
    trigger: <Button color="blue">Update Settings</Button>,
    title: "Confirm Update",
    description:
      "Your settings will be updated. This might require a page refresh.",
    actionText: "Update",
    cancelText: "Not Now",
    color: "blue",
    variant: "soft",
    maxWidth: "400px",
  },
};

export const DestructiveAction: Story = {
  args: {
    trigger: <Button color="crimson">Revoke Access</Button>,
    title: "Revoke Access",
    description:
      "Are you sure? This application will no longer be accessible and any existing sessions will be expired.",
    actionText: "Revoke Access",
    cancelText: "Cancel",
    color: "crimson",
    variant: "solid",
    maxWidth: "450px",
  },
};
