import * as React from 'react';
import Button from '@mui/material/Button';

interface StandardButtonProps {
  text: string;
  variant?: 'contained'| 'text'  | 'outlined';
}

export default function StandardButton({ text, variant='contained'}: StandardButtonProps) {
  return (
    <Button variant={variant}>{text}</Button> 
  );
}