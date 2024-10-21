import { useState } from "react";
import { TaskCard } from "./task-card";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface Task {
  title: string;
  branch: string;
  level: string;
  price: number;
}

export interface ViewBoardProps {
  status: "To-Do" | "In-Progress" | "Review" | "Complete";
  tasks: Task[];
  isBoardViewActive: boolean;
}

export const ViewBoard = ({
  status,
  tasks,
  isBoardViewActive,
}: ViewBoardProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const taskCount = tasks?.length || 0;

  return (
    <div
      className={`ui-px-4 ui-py-5 ui-border-2 ui-columns-xl ui-border-solid ui-border-gray-100 ui-rounded-xl ui-shadow-md`}
    >
      <div className="ui-flex ui-justify-between ui-items-center ui-p-2">
        <div className="ui-flex ui-space-x-4 ui-items-center">
          {isBoardViewActive ? (
            ""
          ) : (
            <p
              onClick={handleMaximize}
              className="ui-text-center ui-cursor-pointer"
            >
              {isMaximized ? (
                <Icon
                  icon="ri:arrow-drop-up-line"
                  width="22px"
                  height="22px"
                  className="ui-font-medium"
                />
              ) : (
                <Icon
                  icon="ri:arrow-drop-down-line"
                  width="22px"
                  height="22px"
                  className="ui-font-medium"
                />
              )}
            </p>
          )}
          <div className="ui-flex ui-space-x-4 ui-items-center">
            <div className="ui-bg-blue-100 ui-text-center ui-rounded-xl ui-px-4 ui-py-0.5">
              <p className="ui-text-blue-800 ui-not-italic ui-font-semibold ui-text-lg ui-leading-6">
                {status}
              </p>
            </div>
            {taskCount > 0 && (
              <span className="ui-text-black-500 ui-text-center ui-font-medium ui-text-base">
                {taskCount}
              </span>
            )}
          </div>
        </div>
        <p className="ui-text-center">
          <Icon
            icon="charm:menu-meatball"
            width="24px"
            height="24px"
            color="black"
          />
        </p>
      </div>
      <div className={`ui-p-6 ${isMaximized ? "ui-block" : "ui-hidden"}`}>
        {isMaximized || isBoardViewActive
          ? tasks?.map((task, index) => <TaskCard key={index} {...task} />)
          : tasks?.length > 0 && <TaskCard {...tasks[0]} />}
      </div>
    </div>
  );
};
