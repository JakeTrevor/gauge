import type { FC } from "react";

interface props extends React.HTMLAttributes<HTMLButtonElement> {}

let Button: FC<props> = ({ children, ...rest }) => {
  return (
    <button
      className="drop-shadow p-1 rounded bg-slate-400 hover:scale-105 transition-transform duration-300 font-bold"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
