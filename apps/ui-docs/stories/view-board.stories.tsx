import type { Meta, StoryObj } from "@storybook/react";
import { ViewBoard } from "@repo/ui/view-board";

const meta: Meta<typeof ViewBoard> = {
  component: ViewBoard,
  argTypes: {
    status: {
      control: { type: "radio" },
      options: ["To-Do", "In Progress", "Review", "Complete"],
    },
    tasks: {
      control: { type: "object" },
      defaultValue: [
        {
          title: "",
          branch: "",
          level: "",
          price: 0,
        },
      ],
      description: "List of tasks with default keys. Fill in the values.",
      table: {
        type: {
          summary: "Task[]",
          detail: `{
            title: string;
            branch: string;
            level: string;
            price: number;
          }`,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ViewBoard>;

export const Default: Story = {
  render: (args) => <ViewBoard {...args} />,
  name: "To-Do",
  args: {
    status: "To-Do",
    tasks: [
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
    ],
  },
};
export const inProgress: Story = {
  render: (args) => <ViewBoard {...args} />,
  name: "In Progress",
  args: {
    status: "In-Progress",
    tasks: [
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
    ],
  },
};
export const Review: Story = {
  render: (args) => <ViewBoard {...args} />,
  name: "Review",
  args: {
    status: "Review",
    tasks: [
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
    ],
  },
};
export const Complete: Story = {
  render: (args) => <ViewBoard {...args} />,
  name: "Complete",
  args: {
    status: "Complete",
    tasks: [
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
      {
        title: "Develop a simple calculator",
        branch: "EU-3-2",
        level: "Intermediate Level",
        price: 3000,
      },
    ],
  },
};
