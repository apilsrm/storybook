import type { Meta, StoryObj } from "@storybook/react";
import { BoardContainer } from "@repo/ui/board-container";

const meta: Meta<typeof BoardContainer> = {
  component: BoardContainer,
  argTypes: {
    columns: {
      control: { type: "object" },
      description: "List of columns with tasks. Fill in the values.",
      table: {
        type: {
          summary: "Columns[]",
          detail: `{
            status: "To-Do" | "In-Progress" | "Review" | "Complete";
            tasks: Task[];
          }`,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BoardContainer>;

export const BoardType: Story = {
  render: (args) => <BoardContainer {...args} />,
  name: "Board Type",
  args: {
    columns: [
      {
        status: "To-Do",
        isBoardViewActive: true,
        tasks: [
          {
            title: "Develop a simple calculator",
            branch: "EU-3-2",
            level: "Intermediate Level",
            price: 3000,
          },
          {
            title: "Build a landing page",
            branch: "NA-5-1",
            level: "Beginner Level",
            price: 1500,
          },
        ],
      },
      {
        status: "In-Progress",
        isBoardViewActive: true,
        tasks: [
          {
            title: "Create a login system",
            branch: "EU-1-4",
            level: "Advanced Level",
            price: 5000,
          },
        ],
      },
    ],
  },
};

export const IterationType: Story = {
  render: (args) => <BoardContainer {...args} />,
  name: "Iteration Type",
  args: {
    columns: [
      {
        status: "Review",
        isBoardViewActive: false,
        tasks: [
          {
            title: "Code review for calculator app",
            branch: "EU-3-2",
            level: "Intermediate Level",
            price: 2000,
          },
        ],
      },
      {
        status: "Complete",
        isBoardViewActive: false,
        tasks: [
          {
            title: "Deploy the landing page",
            branch: "NA-5-1",
            level: "Beginner Level",
            price: 1000,
          },
        ],
      },
    ],
  },
};
