import styled, { ThemeProvider } from "styled-components";
import ThemeSelector from "./ThemeSelector";
import useLocalStorage from "./useLocalStorage";
import GlobalStyle from "./global";

const Content = styled.div`
  margin-left: auto;
  /* margin-left: min(10px, auto); */
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  max-width: 1000px;
`;

const Theme = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("Theme", {
    color: "black",
    backgroundColor: "white",
    font: "sans-serif",
  });

  const updateTheme = (change) => {
    const oldValue = JSON.parse(localStorage.getItem("Theme"));
    const newValue = {
      ...oldValue,
      color: change.color ? change.color : oldValue.color,
      backgroundColor: change.backgroundColor
        ? change.backgroundColor
        : oldValue.backgroundColor,
      font: change.font ? change.font : oldValue.font,
    };
    console.log(newValue);
    setTheme(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeSelector updateTheme={updateTheme} />
      <Content>{children}</Content>
      <button onClick={() => updateTheme({ color: "red" })}>red</button>
    </ThemeProvider>
  );
};
export default Theme;
