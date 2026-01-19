import type { FC } from "react";


interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}
const Input: FC<InputProps> = ({
    value,
    placeholder,
    type,
    onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};


export default Input;