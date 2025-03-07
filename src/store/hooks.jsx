import Context, {ThemeContext} from "./Context";
import { useContext } from "react";

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};

export const useThemeStore = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    return [theme, setTheme]
  };