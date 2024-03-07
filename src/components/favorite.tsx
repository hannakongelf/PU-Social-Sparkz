'use client'

import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getAllFavoritesGameId } from '@/db/queries/favorite';
import { FavoriteWithGameId } from '@/db/queries';
import { useSession } from 'next-auth/react';

interface Favorite {
    gameId: number
    favorite: FavoriteWithGameId
}

const FavoriteGame = ({ gameId, favorite }: Favorite) => {
  const session = useSession()

  if (!session.data?.user) return null

    const isFavorite = favorite?.games.includes({ id: gameId });
  
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
