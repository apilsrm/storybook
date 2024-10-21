import type { Meta, StoryObj } from "@storybook/react";
import { TaskCard } from "@repo/ui/task-card";

const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TaskCard>;

export const Primary: Story = {
  render: (props) => <TaskCard {...props} />,
  name: "TaskCard",
  args: {
    title: "Develop a simple calculator",
    branch: "EU-3-2",
    level: "Intermediate Level",
    price: 3000,
  },
};
