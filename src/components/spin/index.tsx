import { useState } from 'react';
import styled from './spin.module.css';

export function Spin() {
  return (
    <div className={styled.container}>
      <p>Loading...</p>
    </div>
  );
}
