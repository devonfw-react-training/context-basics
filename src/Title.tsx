import { useContext } from "react";
import { ModeContext } from "./App";

const styles: any = {
  dark: {
    backgroundColor: "black",
    color: "white",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
};

export const Title = () => {
  const { mode } = useContext(ModeContext);
  return <div style={styles[mode]}>{mode}</div>;
};
