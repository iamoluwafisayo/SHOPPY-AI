import { createContext, useContext, useMemo, useState } from "react";
import { getDesignTokens } from "../theme/themePalettes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext();

export const ThemeToggleProvider = ({ children }) => {
  const [mode] = useState("light");

  const colorMode = useMemo(() => ({}), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorModeContext);
