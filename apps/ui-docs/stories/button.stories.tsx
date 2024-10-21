import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "big"],
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "warning"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    outline: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (props) => <Button {...props} />,
  name: "Default Button",
  args: {
    children: "Click me",
  },
};

export const Disabled: Story = {
  render: (props) => <Button {...props} />,
  name: "Disabled Button",
  args: {
    disabled: true,

    children: "Click me",
  },
};

export const SmallDefault: Story = {
  render: (props) => <Button {...props} />,
  name: "Small Default Button",
  args: {
    size: "small",

    children: "Click me",
  },
};

export const BigDefault: Story = {
  render: (props) => <Button {...props} />,
  name: "Big Default Button",
  args: {
    size: "big",
    children: "Click me",
  },
};

export const Outline: Story = {
  render: (props) => <Button {...props} />,
  name: "Outline Button",
  args: {
    outline: true,
    children: "Click me",
  },
};

export const DisabledOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Disabled Outline Button",
  args: {
    outline: true,
    disabled: true,
    children: "Click me",
  },
};

export const SmallDefaultOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Small Default Outline Button",
  args: {
    size: "small",
    outline: true,
    children: "Click me",
  },
};

export const BigDefaultOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Big Default Outline Button",
  args: {
    size: "big",
    outline: true,
    children: "Click me",
  },
};

export const Warning: Story = {
  render: (props) => <Button {...props} />,
  name: "Warning Button",
  args: {
    variant: "warning",
    children: "Click me",
  },
};

export const WarningDisabled: Story = {
  render: (props) => <Button {...props} />,
  name: "Warning disabled",
  args: {
    disabled: true,
    variant: "warning",
    children: "Click me",
  },
};

export const SmallWarning: Story = {
  render: (props) => <Button {...props} />,
  name: "Small Warning Button",
  args: {
    size: "small",
    variant: "warning",
    children: "Click me",
  },
};

export const BigWarning: Story = {
  render: (props) => <Button {...props} />,
  name: "Big Warning Button",
  args: {
    size: "big",
    variant: "warning",
    children: "Click me",
  },
};

export const WarningOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Outline Warning Button",
  args: {
    variant: "warning",
    outline: true,
    children: "Click me",
  },
};

export const WarningDisabledOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Outline Warning disabled",
  args: {
    disabled: true,
    outline: true,
    variant: "warning",
    children: "Click me",
  },
};

export const SmallWarningOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Outline Small Warning Button",
  args: {
    size: "small",
    outline: true,
    variant: "warning",
    children: "Click me",
  },
};

export const BigWarningOutline: Story = {
  render: (props) => <Button {...props} />,
  name: "Outline Big Warning Button",
  args: {
    size: "big",
    outline: true,
    variant: "warning",
    children: "Click me",
  },
};
