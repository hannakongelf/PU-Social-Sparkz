import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '@/app/providers';
import IconButton from '@mui/material/IconButton';
import Brightness7 from '@mui/icons-material/Brightness7';
import Brightness4 from '@mui/icons-material/Brightness4';

export default function DarkmodeToggle({ text }: { text?: boolean }) {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <>
      {text ? (
        <button onClick={toggleColorMode}>
          {theme.palette.mode[0].toUpperCase() +
            theme.palette.mode.slice(1).toLowerCase()}{' '}
          mode{' '}
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </button>
      ) : (
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      )}
    </>
  );
}
