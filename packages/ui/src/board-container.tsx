import { useState } from "react";
import { ViewBoard, Task } from "./view-board";

import { Icon } from "@iconify/react/dist/iconify.js";

import { Button } from "./button";

export interface Columns {
  status: "To-Do" | "In-Progress" | "Review" | "Complete";
  tasks: Task[];
  isBoardViewActive: boolean;
}

export type BoardContainerProps = {
  columns: Columns[];
};

// BoardContainer Component
export const BoardContainer = ({ columns }: BoardContainerProps) => {
  const [isBoardViewActive, setIsBoardViewActive] = useState<boolean>(true);

  return (
    <>
      <div className="ui-flex ui-flex-row ui-gap-3">
        <div className="ui-mr-3">
          <Button
            outline={isBoardViewActive}
            onClick={() => {
              setIsBoardViewActive(true);
            }}
          >
            <div className="ui-flex ui-gap-3 ui-justify-center">
              <Icon icon="lucide:layers" width="24" height="24" />
              Board Type
            </div>
          </Button>
        </div>

        <div className="ui-ml-3">
          <Button
            outline={!isBoardViewActive}
            onClick={() => {
              setIsBoardViewActive(false);
            }}
          >
            <div className="ui-flex ui-gap-3 ui-justify-center">
              <Icon icon="lucide:layers" width="24" height="24" />
              Iteration Type
            </div>
          </Button>
        </div>
      </div>

      <div
        className={
          isBoardViewActive
            ? "ui-flex ui-space-x-5 ui-gap-2.5"
            : "ui-space-y-4 "
        }
      >
        {columns.map((column, index) => (
          <div
            key={index}
            className={isBoardViewActive ? "ui-w-1/4" : "ui-w-full"}
          >
            <ViewBoard
              status={column.status}
              tasks={column.tasks}
              isBoardViewActive={isBoardViewActive}
            />
          </div>
        ))}
      </div>
    </>
  );
};
