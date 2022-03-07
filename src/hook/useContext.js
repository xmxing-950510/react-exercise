import React, { useContext, useCallback, useState } from 'react';
import { Button } from 'antd';


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

// 创建一个 Theme 的 Context
const ThemeContext = React.createContext(themes.light);

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => { 
    setTheme((theme) => (theme === "light" ? "dark" : "light")); 
  }, []);
  
  return (
    // 使用 themes.dark 作为当前 Context 
    <ThemeContext.Provider value={themes[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 在 Toolbar 组件中使用一个会使用 Theme 的 Button
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 在 Theme Button 中使用 useContext 来获取当前的主题
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button style={{
      background: theme.background,
      color: theme.foreground
    }}>
      I am styled by theme context!
    </Button>
  );
}