import type { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
}

let Wrapper: FC<props> = ({ children }) => {
  return (
    <div className="rounded drop-shadow-lg bg-slate-50 p-3">{children}</div>
  );
};

export default Wrapper;
