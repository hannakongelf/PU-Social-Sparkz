'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SessionProvider } from 'next-auth/react';
import { createContext, useMemo, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ToggleColorModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default function Providers({ children }: Props) {
  return (
    <>
      <AppRouterCacheProvider>
        <ToggleColorModeProvider>
          <CssBaseline>
            <SessionProvider>{children}</SessionProvider>
          </CssBaseline>
        </ToggleColorModeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
