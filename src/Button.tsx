import { useContext } from "react";
import { ModeContext } from "./App";

export const Button = () => {
  const { toggleMode } = useContext(ModeContext);
  return <button onClick={toggleMode}>toggle mode</button>;
};
