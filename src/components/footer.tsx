import { List, ListItem } from '@mui/material';
import Link from 'next/link';
import * as paths from '@/paths';

const Footer = () => {
  return (
    <footer className='py-4 shadow flex justify-center h-48 bg-[#845EC2] self-end'>
      <div className='container max-w-4xl flex justify-between items-center'>
        <section>© Social Sparkz 2024</section>
        <section>
          <List>
            <ListItem>
              <Link
                className='border-b border-black dark:border-white'
                href={paths.profile()}
              >
                Your profile
              </Link>
            </ListItem>
            <ListItem>
              <Link
                className='border-b border-black dark:border-white'
                href={paths.personalList()}
              >
                Your lists
              </Link>
            </ListItem>
            <ListItem>
              <Link
                className='border-b border-black dark:border-white'
                href={paths.favorite()}
              >
                Favorites
              </Link>
            </ListItem>
          </List>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
