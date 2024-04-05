import { ChangeEvent } from 'react';
import styled from './input.module.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Input({
  value,
  onChange,
  name,
  placeholder,
  maxLength,
  removeError,
  type = 'text',
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      type={type}
      className={styled.container}
      onKeyUp={removeError}
    />
  );
}
