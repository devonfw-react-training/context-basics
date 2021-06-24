import { useState, createContext, FC } from "react";
import { Title } from "./Title";
import { Button } from "./Button";

export const ModeContext = createContext<any>("light");

const ModeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

function App() {
  return (
    <ModeProvider>
      <Title />
      <Button />
    </ModeProvider>
  );
}

export default App;
