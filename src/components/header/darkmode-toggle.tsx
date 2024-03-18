import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useContext } from 'react';
import { ColorModeContext } from '@/app/providers';

export default function DarkmodeToggle() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <button onClick={toggleColorMode}>
      {theme.palette.mode[0].toUpperCase() +
        theme.palette.mode.slice(1).toLowerCase()}{' '}
      mode {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </button>
  );
}
