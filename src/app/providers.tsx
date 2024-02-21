'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SessionProvider } from 'next-auth/react';
import theme from '@/app/theme/theme';

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <SessionProvider>{children}</SessionProvider>
          </CssBaseline>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
