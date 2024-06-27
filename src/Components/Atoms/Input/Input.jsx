import React from "react";
import { InputStyled } from "./styled";

export default function Input({
  type = '',
  placeholder = '',
  padding,
  height,
  width,
  onChange,
  value = "",
  id,
}) {
  const handler = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <InputStyled
      type={type}
        placeholder={placeholder}
        width={width}
        padding={padding}
        height={height}
        id={id}
        defaultValue={value}
        onChange={handler}
      />
    </div>
  );
}
