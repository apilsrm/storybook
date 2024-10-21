import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useState } from "react";
export interface TaskCardProps {
  title: string;
  branch: string;
  level: string;
  price: number;
}

export const TaskCard = (props: TaskCardProps) => {
  const [isRun, setIsRun] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsRun(true);
        }}
        className={classNames(
          "ui-px-4 ui-mb-7 ui-py-6 ui-columns-xl ui-border-solid ui-border-gray-100 ui-rounded-xl hover:ui-bg-blue-50",
          { "ui-bg-blue-100": isRun }
        )}
      >
        <p className="ui-not-italic ui-font-semibold ui-text-black-900 ui-text-xl ui-leading-6 ui-mb-7">
          {props.title}
        </p>

        <div className="ui-flex ui-items-center ui-gap-2.5 ui-mb-7">
          <Icon
            icon="mdi:checkbox-marked"
            width="1.4rem"
            height="1.5rem"
            color="blue"
          />
          <div className=" ui-not-italic ui-font-semibold ui-text-xl ui-leading-5  ui-text-gray-500">
            {props.branch}
          </div>
        </div>

        <div className="ui-text-gray-700 ui-flex ui-justify-between">
          <div className="ui-flex ui-gap-2.5 ui-items-center">
            <Icon
              icon="healthicons:medium-bars"
              width="1.4rem"
              height="1.5rem"
            />
            <p className="ui-not-italic ui-font-semibold ui-text-xl ui-leading-5">
              {props.level}
            </p>
          </div>
          <div className="ui-flex ui-gap-2.5 ui-items-center">
            <Icon
              icon="pepicons-pop:dollar-circle"
              width="1.4rem"
              height="1.5rem"
            />
            <p className="ui-not-italic ui-font-semibold ui-text-xl ui-leading-5">
              Price : Rs. {props.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
TaskCard.displayName = "TaskCard";
