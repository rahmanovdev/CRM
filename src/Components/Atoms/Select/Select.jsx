import React, { useRef, useState } from "react";
import {
  SelectClear,
  SelectContent,
  SelectIcon,
  SelectOption,
  SelectOptions,
  SelectStyled,
  SelectValue,
} from "./styled";
import useOnClickOutside from "../../../Hooks/useOnClickOutside";
import ChevronIcon from "../../../Assets/Icons/ChevronIcon";

export default function Select({ height, width, maxWidth, options, handler }) {
  const [view, setView] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);
  const selectRef = useRef(null);

  const togleView = () => setView((old) => !old);

  const hideView = () => setView(false);

  const setOption = (option) => {
    setCurrentOption(option.label);
    handler(option);
    hideView();
  };

  const clearHandler = (event) => {
    event.stopPropagation();
    handler(null);
    setCurrentOption(null);
    hideView(false);
  };

  useOnClickOutside(selectRef, hideView);

  return (
    <SelectStyled
     maxWidth={maxWidth}
     width={width}
     ref={selectRef}>
      <SelectContent height={height} onClick={togleView}>
        <SelectValue active={String(currentOption)}>
          {currentOption ?? "Select"}
        </SelectValue>
        <SelectIcon>
          <SelectClear onClick={clearHandler}>X</SelectClear>
          <ChevronIcon />
        </SelectIcon>
      </SelectContent>

      {view ? (
        <SelectOptions>
          {options.map((option) => (
            <SelectOption key={option.value} onClick={() => setOption(option)}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      ) : null}
    </SelectStyled>
  );
}
