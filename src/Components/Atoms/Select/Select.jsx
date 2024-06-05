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

export default function Select({ options, handler }) {
  const [view, setView] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);
  const selectRef = useRef(null);

  const togleView = () => setView((old) => !old);

  const hideView = () => setView(false);


  const setOption = (option)=> {
    setCurrentOption(option.label)
    handler(option)
    hideView()
  }

  const clearHandler = (event)=> {
    event.stopPropagation()
    handler(null);
    setCurrentOption(null);
      hideView(false);
  }

  useOnClickOutside(selectRef,hideView);

  return (
    <SelectStyled ref={selectRef}>
      <SelectContent onClick={togleView}>
        <SelectValue  active={String(currentOption)}>{ currentOption ?? "Select"}</SelectValue>
        <SelectIcon>
           <SelectClear onClick={clearHandler}>X</SelectClear>
              A
        </SelectIcon>
       
      </SelectContent>

      {view ? (
        <SelectOptions>
          {options.map((option) => (
            <SelectOption
             key={option.value}
             onClick={()=> setOption(option)}
             
             >
                
                {option.label}</SelectOption>
          ))}
        </SelectOptions>
      ) : null}
    </SelectStyled>
  );
}
