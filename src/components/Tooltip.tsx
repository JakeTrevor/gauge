import type { FC, ReactNode } from "react";

interface props {
  tooltip: string;
  children: ReactNode;
}

let Tooltip: FC<props> = ({ tooltip, children }) => {
  return (
    <div
      data-tooltip={tooltip}
      className="before:absolute before:bg-white before:rounded-md before:p-1 before:drop-shadow-lg before:content-[attr(data-tooltip)] before:opacity-0 before:top-0 before:hover:opacity-100 before:hover:top-1 before:transition-all duration-150"
    >
      {children}
    </div>
  );
};

export default Tooltip;
