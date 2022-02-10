import { useEffect, useState } from "react";
import styled from "styled-components";

// get variables from JSON
const colors = require("./theme_colours.json");
const fonts = require("./theme_fonts.json");

const ColorButton = styled.div`
  background: linear-gradient(
    45deg,
    ${(props) => props.backgroundColor} 50%,
    ${(props) => props.color} 50%
  );
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.color};
  width: 50px;
  height: 50px;
  transition-duration: 0.5s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.backgroundColor};
  }
`;

const FontButton = styled.div`
  color: ${({ theme }) => theme.color};
  font-family: ${(props) => props.font};
  font-size: 2rem;
  border: 2px solid ${({ theme }) => theme.color};
  height: 100%;
`;

const Button = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  height: 100%;
`;

const ButtonColorContainer = (props) => {
  return (
    <ColorButton backgroundColor={props.backgroundColor} color={props.color} />
  );
};

const ButtonFontContainer = (props) => {
  return <FontButton font={props.font}>{props.font}</FontButton>;
};

const ThemeSelector = ({ setTheme, updateTheme }) => {
  const [colorsArr, setColorsArr] = useState([]);
  const [fontsArr, setFontsArr] = useState([]);

  useEffect(() => {
    const arr = [];
    Object.keys(colors).forEach(function (key) {
      arr.push(colors[key]);
    });
    setColorsArr(arr[0]);
  }, []);

  useEffect(() => {
    const arr = [];
    Object.keys(fonts).forEach(function (key) {
      arr.push(fonts[key]);
    });
    setFontsArr(arr[0]);
  }, []);

  return (
    <div>
      {colorsArr.map((i) => {
        // console.log("colorsArr ", item);
        return (
          <Button
            key={i.id}
            onClick={() =>
              updateTheme({
                color: i.color,
                backgroundColor: i.backgroundColor,
              })
            }
          >
            <ButtonColorContainer
              color={i.color}
              backgroundColor={i.backgroundColor}
            />
          </Button>
        );
      })}
      {fontsArr.map((i) => {
        // console.log("colorsArr ", item);
        return (
          <Button key={i.id} onClick={() => updateTheme({ font: i.font })}>
            <ButtonFontContainer font={i.font} />
          </Button>
        );
      })}
    </div>
  );
};

export default ThemeSelector;
