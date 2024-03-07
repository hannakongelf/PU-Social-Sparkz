'use client';

import { Button, IconButton, SvgIcon } from '@mui/material';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteGame = () => {
    const session = useSession();
    const pathname = usePathname();
    console.log(pathname);
  
    if (session.status === 'loading') return null;
    else if (pathname === '/create') return null; 
    else if (session.data?.user)
      return (
        <section>
            <IconButton aria-label='favorite' className='bg-purple-500'>
            {isFavorite ? (
            <FavoriteIcon /> // Full heart when the game is in favorites
          ) : (
            <FavoriteBorderIcon /> // Border heart when the game is not in favorites
          )}
            </IconButton>
        </section>
      );
};

export default FavoriteGame;
