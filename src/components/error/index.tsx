import styled from './error.module.css';

interface ErrorProps {
  msg: string;
}

export function Error({ msg }: ErrorProps) {
  return (
    <div className={styled.container}>
      <span>Error: {msg}</span>
    </div>
  );
}
