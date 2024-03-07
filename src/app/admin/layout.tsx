import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Folder } from '@mui/icons-material';
import Link from 'next/link';
import * as paths from '@/paths';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subPage = ['reports', 'users', 'games', 'reviews'];
  return (
    <main className='flex mt-4'>
      <section className='w-1/3 mr-4'>
        <List>
          {subPage.map((page, idx) => (
            <Link key={page + idx} href={paths.admin(page)}>
              <ListItem className='border-b mb-4 mr-4'>
                <ListItemIcon>
                  <Folder />
                </ListItemIcon>
                <ListItemText primary={page} />
              </ListItem>
            </Link>
          ))}
        </List>
      </section>
      <section className='w-full border-l pl-8'>{children}</section>
    </main>
  );
}
