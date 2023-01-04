import { FC, useState } from "react";
import { push, useCount } from "../firebase";

let Counter: FC = () => {
  let clicks = useCount();

  return (
    <>
      <button
        className="w-40 h-40 rounded-full bg-emerald-500 text-lg font-bold active:scale-95 hover:scale-105 transition-transform"
        onClick={push}
      >
        {clicks}
      </button>
      <p></p>
    </>
  );
};

export default Counter;
