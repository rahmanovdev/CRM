import React from "react";
import { InputStyled } from "./styled";

export default function Input({
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
        width={width}
        padding={padding}
        height={height}
        id={id}
        defaultValue={value}
        type="text"
        onChange={handler}
      />
    </div>
  );
}
